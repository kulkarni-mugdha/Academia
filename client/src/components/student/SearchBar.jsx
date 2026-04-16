import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data, onSearchChange, showSubmit = true }) => {

  const navigate = useNavigate()

  const [input, setInput] = useState(data ? data : '')

  useEffect(() => {
    setInput(data ? data : '')
  }, [data])

  const onSearchHandler = (e) => {
    e.preventDefault()

    if (onSearchChange) {
      return;
    }

    navigate('/course-list/' + input)

  }

  return (
    <form onSubmit={onSearchHandler} className="max-w-xl w-full md:h-14 h-12 flex items-center bg-[var(--color-card)] border border-[var(--color-border)] rounded transition-colors duration-300">
      <img className="md:w-auto w-10 px-3" src={assets.search_icon} alt="search_icon" />
      <input
        onChange={e => {
          setInput(e.target.value)
          onSearchChange?.(e.target.value)
        }}
        value={input}
        type="text"
        className="w-full h-full bg-transparent outline-none text-gray-500/80 dark:text-gray-200"
        placeholder="Search for courses"
      />
      {showSubmit && <button type='submit' className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1">Search</button>}
    </form>
  )
}

export default SearchBar
