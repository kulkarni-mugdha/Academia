import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const Chatbot = () => {

    const { allCourses, formatPrice } = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState([
        { id: 1, sender: 'bot', text: 'Hi, I am your Academia assistant. Ask me about courses, pricing, or becoming an educator.' }
    ])
    const messagesEndRef = useRef(null)

    const courseTitles = useMemo(
        () => allCourses.slice(0, 5).map((course) => course.courseTitle).filter(Boolean),
        [allCourses]
    )

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, isTyping, isOpen])

    const getBotResponse = (query) => {
        const normalizedQuery = query.toLowerCase()

        if (normalizedQuery.includes('course') || normalizedQuery.includes('learn')) {
            return courseTitles.length > 0
                ? `Here are some courses you can explore: ${courseTitles.join(', ')}.`
                : 'Courses are available in Academia. You can browse the course list to explore them.'
        }

        if (normalizedQuery.includes('price') || normalizedQuery.includes('cost') || normalizedQuery.includes('fee')) {
            const sampleCourse = allCourses.find((course) => Number(course?.coursePrice || 0) >= 0)
            return sampleCourse
                ? `Course pricing varies by category. For example, ${sampleCourse.courseTitle} is currently listed at ${formatPrice(sampleCourse.coursePrice)} before discounts.`
                : 'Course pricing depends on the course and any active discount. Open a course card to see the latest price.'
        }

        if (normalizedQuery.includes('educator') || normalizedQuery.includes('teacher') || normalizedQuery.includes('instructor')) {
            return 'Educators on Academia can publish courses, manage content, and track student engagement from the educator dashboard.'
        }

        return 'I am your Academia assistant. How can I help you?'
    }

    const sendMessage = () => {
        const trimmedInput = input.trim()

        if (!trimmedInput || isTyping) return

        setMessages((prevMessages) => [
            ...prevMessages,
            { id: Date.now(), sender: 'user', text: trimmedInput }
        ])
        setInput('')
        setIsTyping(true)

        window.setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: Date.now() + 1, sender: 'bot', text: getBotResponse(trimmedInput) }
            ])
            setIsTyping(false)
        }, 800)
    }

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isOpen && (
                <div className="mb-3 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-2xl transition-colors duration-300 max-sm:w-[calc(100vw-2.5rem)]">
                    <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Academia Assistant</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-300">Ask about courses, pricing, and educators</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-gray-500 dark:text-gray-300"
                        >
                            Close
                        </button>
                    </div>

                    <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${message.sender === 'user'
                                    ? 'ml-auto bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-800 dark:bg-slate-800 dark:text-gray-100'
                                    }`}
                            >
                                {message.text}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="max-w-[85%] rounded-2xl bg-gray-100 px-3 py-2 text-sm text-gray-500 dark:bg-slate-800 dark:text-gray-300">
                                Academia Assistant is typing...
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className="border-t border-[var(--color-border)] px-3 py-3">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                onKeyDown={(event) => event.key === 'Enter' && sendMessage()}
                                placeholder="Type your message..."
                                className="h-11 flex-1 rounded-full border border-[var(--color-border)] bg-transparent px-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 dark:text-gray-100"
                            />
                            <button
                                type="button"
                                onClick={sendMessage}
                                className="h-11 rounded-full bg-blue-600 px-4 text-sm font-medium text-white"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white shadow-lg"
            >
                Chat
            </button>
        </div>
    )
}

export default Chatbot
