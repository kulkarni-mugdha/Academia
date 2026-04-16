export const mockCourses = [
    {
        _id: "66a100000000000000000001",
        courseTitle: "Web Development for Beginners",
        description: "Build a strong foundation in HTML, CSS, JavaScript, and responsive layouts through practical projects inspired by Indian business and portfolio websites.",
        courseDescription: `
            <h2>Start Your Web Development Journey</h2>
            <p>Learn the essentials of HTML, CSS, and JavaScript by building beginner-friendly projects with examples relevant to Indian learners, freelancers, and small businesses.</p>
            <p>This course helps you understand how websites are structured, styled, and made interactive so you can confidently create your own pages from scratch.</p>
            <ul>
                <li>Understand HTML page structure and semantic tags</li>
                <li>Style modern layouts with CSS and responsive design</li>
                <li>Add interactivity with JavaScript basics</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/e0f2fe/0f172a?text=Web+Development",
        coursePrice: 999,
        isPublished: true,
        discount: 10,
        educator: {
            _id: "66b200000000000000000001",
            name: "Ananya Verma"
        },
        courseRatings: [
            { userId: "demo-user-1", rating: 5 },
            { userId: "demo-user-2", rating: 4 }
        ],
        enrolledStudents: ["demo-student-1", "demo-student-2", "demo-student-3"],
        courseContent: [
            {
                chapterId: "web-ch-1",
                chapterOrder: 1,
                chapterTitle: "HTML and CSS Basics",
                chapterContent: [
                    {
                        lectureId: "web-lec-1",
                        lectureTitle: "Creating Your First Web Page",
                        lectureDuration: 42,
                        lectureUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "web-lec-2",
                        lectureTitle: "Styling Layouts for Desktop and Mobile",
                        lectureDuration: 54,
                        lectureUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "web-ch-2",
                chapterOrder: 2,
                chapterTitle: "JavaScript Essentials",
                chapterContent: [
                    {
                        lectureId: "web-lec-3",
                        lectureTitle: "Variables, Functions, and Events",
                        lectureDuration: 48,
                        lectureUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "web-lec-4",
                        lectureTitle: "Mini Project: Interactive College Event Page",
                        lectureDuration: 65,
                        lectureUrl: "https://www.youtube.com/watch?v=jS4aFq5-91M",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000002",
        courseTitle: "Data Science with Python",
        description: "Learn Python, NumPy, Pandas, and visualization techniques to analyze datasets drawn from Indian business, finance, and public data scenarios.",
        courseDescription: `
            <h2>Learn Data Science with Real Examples</h2>
            <p>This course introduces Python for data analysis and helps you work with practical datasets such as retail sales, exam scores, and city-level trends.</p>
            <p>You will clean data, visualize insights, and build confidence using the libraries most commonly used in entry-level data science roles.</p>
            <ul>
                <li>Write Python code for analysis workflows</li>
                <li>Work with NumPy and Pandas effectively</li>
                <li>Create charts and summaries for decision-making</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/dcfce7/0f172a?text=Data+Science",
        coursePrice: 1499,
        isPublished: true,
        discount: 15,
        educator: {
            _id: "66b200000000000000000002",
            name: "Rohit Kulkarni"
        },
        courseRatings: [
            { userId: "demo-user-3", rating: 5 },
            { userId: "demo-user-4", rating: 5 }
        ],
        enrolledStudents: ["demo-student-4", "demo-student-5"],
        courseContent: [
            {
                chapterId: "ds-ch-1",
                chapterOrder: 1,
                chapterTitle: "Python for Data Analysis",
                chapterContent: [
                    {
                        lectureId: "ds-lec-1",
                        lectureTitle: "Setting Up Python and Jupyter",
                        lectureDuration: 36,
                        lectureUrl: "https://www.youtube.com/watch?v=HW29067qVWk",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "ds-lec-2",
                        lectureTitle: "Working with Series and DataFrames",
                        lectureDuration: 58,
                        lectureUrl: "https://www.youtube.com/watch?v=vmEHCJofslg",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "ds-ch-2",
                chapterOrder: 2,
                chapterTitle: "Visualization and Insights",
                chapterContent: [
                    {
                        lectureId: "ds-lec-3",
                        lectureTitle: "Plotting Trends with Matplotlib",
                        lectureDuration: 51,
                        lectureUrl: "https://www.youtube.com/watch?v=3Xc3CA655Y4",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "ds-lec-4",
                        lectureTitle: "Mini Project: Sales Dashboard for an Indian Store",
                        lectureDuration: 68,
                        lectureUrl: "https://www.youtube.com/watch?v=GPVsHOlRBBI",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000003",
        courseTitle: "Java Programming Masterclass",
        description: "Master Java fundamentals, object-oriented programming, and problem-solving through examples commonly faced by Indian engineering students and freshers.",
        courseDescription: `
            <h2>Become Confident with Core Java</h2>
            <p>Learn Java from scratch with a step-by-step path covering syntax, OOP, collections, and real coding practice useful for college labs and placement preparation.</p>
            <p>The course is structured to help beginners become comfortable writing, debugging, and organizing Java programs independently.</p>
            <ul>
                <li>Understand Java syntax and control flow</li>
                <li>Apply object-oriented programming principles</li>
                <li>Practice with coding exercises and mini applications</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/fef3c7/0f172a?text=Java+Masterclass",
        coursePrice: 2999,
        isPublished: true,
        discount: 20,
        educator: {
            _id: "66b200000000000000000003",
            name: "Neha Bansal"
        },
        courseRatings: [
            { userId: "demo-user-5", rating: 4 },
            { userId: "demo-user-6", rating: 5 }
        ],
        enrolledStudents: ["demo-student-6", "demo-student-7", "demo-student-8", "demo-student-9"],
        courseContent: [
            {
                chapterId: "java-ch-1",
                chapterOrder: 1,
                chapterTitle: "Java Foundations",
                chapterContent: [
                    {
                        lectureId: "java-lec-1",
                        lectureTitle: "Installing JDK and Writing Your First Program",
                        lectureDuration: 40,
                        lectureUrl: "https://www.youtube.com/watch?v=eIrMbAQSU34",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "java-lec-2",
                        lectureTitle: "Loops, Methods, and Arrays",
                        lectureDuration: 57,
                        lectureUrl: "https://www.youtube.com/watch?v=grEKMHGYyns",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "java-ch-2",
                chapterOrder: 2,
                chapterTitle: "Object-Oriented Programming",
                chapterContent: [
                    {
                        lectureId: "java-lec-3",
                        lectureTitle: "Classes, Objects, and Constructors",
                        lectureDuration: 46,
                        lectureUrl: "https://www.youtube.com/watch?v=BSVKUk58K6U",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "java-lec-4",
                        lectureTitle: "Mini Project: Student Result Processor",
                        lectureDuration: 63,
                        lectureUrl: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000004",
        courseTitle: "DBMS Fundamentals",
        description: "Understand relational databases, SQL queries, normalization, and transactions with examples based on student records, banking, and inventory systems.",
        courseDescription: `
            <h2>Build Strong DBMS Fundamentals</h2>
            <p>This course explains core database concepts in a beginner-friendly way using relatable examples like college admissions, bank accounts, and order tracking.</p>
            <p>You will learn how to model tables, write queries, and understand why database design matters in real applications.</p>
            <ul>
                <li>Learn ER models, keys, and normalization</li>
                <li>Write essential SQL queries confidently</li>
                <li>Understand transactions, indexing, and integrity</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/fce7f3/0f172a?text=DBMS+Fundamentals",
        coursePrice: 1999,
        isPublished: true,
        discount: 12,
        educator: {
            _id: "66b200000000000000000004",
            name: "Siddharth Nair"
        },
        courseRatings: [
            { userId: "demo-user-7", rating: 4 },
            { userId: "demo-user-8", rating: 4 }
        ],
        enrolledStudents: ["demo-student-10"],
        courseContent: [
            {
                chapterId: "dbms-ch-1",
                chapterOrder: 1,
                chapterTitle: "Relational Database Basics",
                chapterContent: [
                    {
                        lectureId: "dbms-lec-1",
                        lectureTitle: "Tables, Rows, Columns, and Keys",
                        lectureDuration: 39,
                        lectureUrl: "https://www.youtube.com/watch?v=ztHopE5Wnpc",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "dbms-lec-2",
                        lectureTitle: "Writing Basic SQL Queries",
                        lectureDuration: 56,
                        lectureUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "dbms-ch-2",
                chapterOrder: 2,
                chapterTitle: "Normalization and Transactions",
                chapterContent: [
                    {
                        lectureId: "dbms-lec-3",
                        lectureTitle: "1NF, 2NF, and 3NF Explained",
                        lectureDuration: 43,
                        lectureUrl: "https://www.youtube.com/watch?v=UrYLYV7WSHM",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "dbms-lec-4",
                        lectureTitle: "Mini Project: Library Management Database",
                        lectureDuration: 61,
                        lectureUrl: "https://www.youtube.com/watch?v=27axs9dO7AE",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000005",
        courseTitle: "React Frontend Development",
        description: "Learn React, components, hooks, and reusable UI patterns by building responsive interfaces inspired by real Indian startup products and student dashboards.",
        courseDescription: `
            <h2>Build Modern Frontend Apps with React</h2>
            <p>This course helps you understand React from the ground up with practical projects, reusable components, and UI workflows that feel relevant to modern web applications.</p>
            <p>You will learn how to manage state, compose components, and create clean user experiences that work well on desktop and mobile.</p>
            <ul>
                <li>Understand JSX, components, props, and state</li>
                <li>Work with hooks such as useState and useEffect</li>
                <li>Build polished layouts with reusable UI sections</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/dbeafe/0f172a?text=React+Frontend",
        coursePrice: 1499,
        isPublished: true,
        discount: 18,
        educator: {
            _id: "66b200000000000000000005",
            name: "Aditi Sharma"
        },
        courseRatings: [
            { userId: "demo-user-9", rating: 5 },
            { userId: "demo-user-10", rating: 4 }
        ],
        enrolledStudents: ["demo-student-11", "demo-student-12"],
        courseContent: [
            {
                chapterId: "react-ch-1",
                chapterOrder: 1,
                chapterTitle: "React Basics",
                chapterContent: [
                    {
                        lectureId: "react-lec-1",
                        lectureTitle: "Understanding Components and JSX",
                        lectureDuration: 44,
                        lectureUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "react-lec-2",
                        lectureTitle: "Props, State, and Event Handling",
                        lectureDuration: 59,
                        lectureUrl: "https://www.youtube.com/watch?v=Tn6-PIqc4UM",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "react-ch-2",
                chapterOrder: 2,
                chapterTitle: "Hooks and UI Architecture",
                chapterContent: [
                    {
                        lectureId: "react-lec-3",
                        lectureTitle: "Using useState and useEffect Effectively",
                        lectureDuration: 48,
                        lectureUrl: "https://www.youtube.com/watch?v=O6P86uwfdR0",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "react-lec-4",
                        lectureTitle: "Mini Project: Student Learning Dashboard",
                        lectureDuration: 66,
                        lectureUrl: "https://www.youtube.com/watch?v=SqcY0GlETPk",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000006",
        courseTitle: "Node.js API Development",
        description: "Build REST APIs with Node.js, Express, and MongoDB through practical backend workflows useful for student projects, admin panels, and production-ready apps.",
        courseDescription: `
            <h2>Create Reliable Backend APIs</h2>
            <p>This course walks you through the essentials of backend development with Node.js and Express, helping you understand routing, controllers, middleware, and database integration.</p>
            <p>You will build APIs step by step and learn patterns that make your backend code easier to maintain and scale.</p>
            <ul>
                <li>Design RESTful routes and controllers</li>
                <li>Connect Express apps with MongoDB</li>
                <li>Handle validation, middleware, and errors cleanly</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/e0e7ff/0f172a?text=Node+API",
        coursePrice: 1999,
        isPublished: true,
        discount: 20,
        educator: {
            _id: "66b200000000000000000006",
            name: "Vikram Deshmukh"
        },
        courseRatings: [
            { userId: "demo-user-11", rating: 5 },
            { userId: "demo-user-12", rating: 4 }
        ],
        enrolledStudents: ["demo-student-13", "demo-student-14", "demo-student-15"],
        courseContent: [
            {
                chapterId: "node-ch-1",
                chapterOrder: 1,
                chapterTitle: "Express Fundamentals",
                chapterContent: [
                    {
                        lectureId: "node-lec-1",
                        lectureTitle: "Setting Up Express and Routes",
                        lectureDuration: 41,
                        lectureUrl: "https://www.youtube.com/watch?v=L72fhGm1tfE",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "node-lec-2",
                        lectureTitle: "Controllers, Middleware, and Request Flow",
                        lectureDuration: 57,
                        lectureUrl: "https://www.youtube.com/watch?v=SccSCuHhOw0",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "node-ch-2",
                chapterOrder: 2,
                chapterTitle: "Database and Authentication Basics",
                chapterContent: [
                    {
                        lectureId: "node-lec-3",
                        lectureTitle: "Connecting MongoDB and Creating Models",
                        lectureDuration: 53,
                        lectureUrl: "https://www.youtube.com/watch?v=fgTGADljAeg",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "node-lec-4",
                        lectureTitle: "Mini Project: Course Enrollment API",
                        lectureDuration: 71,
                        lectureUrl: "https://www.youtube.com/watch?v=-MTSQjw5DrM",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000007",
        courseTitle: "UI UX Design Essentials",
        description: "Understand design systems, wireframes, user flows, and interface decisions through examples from learning platforms, e-commerce apps, and mobile products.",
        courseDescription: `
            <h2>Design Better Digital Experiences</h2>
            <p>This course introduces UI and UX design through practical examples that help you think about users, clarity, consistency, and visual hierarchy.</p>
            <p>You will learn how to move from ideas to wireframes and polished interfaces with a stronger understanding of usability and design structure.</p>
            <ul>
                <li>Learn user flows, wireframes, and layout thinking</li>
                <li>Understand typography, spacing, and color systems</li>
                <li>Create interfaces that feel clear and intentional</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/f5d0fe/0f172a?text=UI+UX+Design",
        coursePrice: 999,
        isPublished: true,
        discount: 10,
        educator: {
            _id: "66b200000000000000000007",
            name: "Meera Kapoor"
        },
        courseRatings: [
            { userId: "demo-user-13", rating: 4 },
            { userId: "demo-user-14", rating: 5 }
        ],
        enrolledStudents: ["demo-student-16"],
        courseContent: [
            {
                chapterId: "design-ch-1",
                chapterOrder: 1,
                chapterTitle: "Foundations of UI UX",
                chapterContent: [
                    {
                        lectureId: "design-lec-1",
                        lectureTitle: "Understanding Users and Interface Goals",
                        lectureDuration: 38,
                        lectureUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "design-lec-2",
                        lectureTitle: "Wireframes, Layouts, and Visual Hierarchy",
                        lectureDuration: 52,
                        lectureUrl: "https://www.youtube.com/watch?v=3Y6Q8QeV7WQ",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "design-ch-2",
                chapterOrder: 2,
                chapterTitle: "Design Systems in Practice",
                chapterContent: [
                    {
                        lectureId: "design-lec-3",
                        lectureTitle: "Typography, Color, and Component Consistency",
                        lectureDuration: 47,
                        lectureUrl: "https://www.youtube.com/watch?v=8jQ7M0Y6oOw",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "design-lec-4",
                        lectureTitle: "Mini Project: Learning App Interface Redesign",
                        lectureDuration: 64,
                        lectureUrl: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000008",
        courseTitle: "Aptitude and Placement Preparation",
        description: "Prepare for placement tests with quantitative aptitude, logical reasoning, and interview-focused problem solving tailored for Indian campus recruitment rounds.",
        courseDescription: `
            <h2>Prepare Smarter for Placements</h2>
            <p>This course is designed for students and freshers who want structured practice for aptitude rounds, logical reasoning, and interview preparation.</p>
            <p>It focuses on concepts, shortcuts, and timed problem-solving so you can build accuracy and confidence before placement season.</p>
            <ul>
                <li>Strengthen quantitative aptitude fundamentals</li>
                <li>Practice logical reasoning with exam-style questions</li>
                <li>Prepare strategically for placement assessments</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/fee2e2/0f172a?text=Placement+Prep",
        coursePrice: 1499,
        isPublished: true,
        discount: 22,
        educator: {
            _id: "66b200000000000000000008",
            name: "Karan Malhotra"
        },
        courseRatings: [
            { userId: "demo-user-15", rating: 5 },
            { userId: "demo-user-16", rating: 4 }
        ],
        enrolledStudents: ["demo-student-17", "demo-student-18"],
        courseContent: [
            {
                chapterId: "place-ch-1",
                chapterOrder: 1,
                chapterTitle: "Quantitative Aptitude Basics",
                chapterContent: [
                    {
                        lectureId: "place-lec-1",
                        lectureTitle: "Percentages, Ratios, and Averages",
                        lectureDuration: 45,
                        lectureUrl: "https://www.youtube.com/watch?v=0D0n0b4G4uE",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "place-lec-2",
                        lectureTitle: "Time, Work, Speed, and Accuracy Tricks",
                        lectureDuration: 58,
                        lectureUrl: "https://www.youtube.com/watch?v=2kT6rS_BpeA",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "place-ch-2",
                chapterOrder: 2,
                chapterTitle: "Reasoning and Test Strategy",
                chapterContent: [
                    {
                        lectureId: "place-lec-3",
                        lectureTitle: "Logical Patterns and Seating Arrangements",
                        lectureDuration: 49,
                        lectureUrl: "https://www.youtube.com/watch?v=QJxjLkN96l8",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "place-lec-4",
                        lectureTitle: "Mock Test Review for Campus Placements",
                        lectureDuration: 67,
                        lectureUrl: "https://www.youtube.com/watch?v=3S8N2sWfjaY",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000009",
        courseTitle: "Full Stack Web Development",
        description: "Build modern full stack applications with frontend, backend, APIs, and database workflows through practical projects inspired by real product scenarios.",
        courseDescription: `
            <h2>Go from Frontend to Full Stack</h2>
            <p>This course connects the full development workflow so you can build complete applications using the tools most commonly used in modern web development.</p>
            <p>You will work across UI, APIs, authentication, and data handling to understand how real full stack projects come together.</p>
            <ul>
                <li>Build frontend and backend features together</li>
                <li>Connect APIs, authentication, and databases</li>
                <li>Create real-world portfolio-ready projects</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/dbeafe/0f172a?text=Full+Stack",
        coursePrice: 1499,
        isPublished: true,
        discount: 15,
        educator: {
            _id: "66b200000000000000000009",
            name: "Arjun Mehta"
        },
        courseRatings: [
            { userId: "demo-user-17", rating: 5 },
            { userId: "demo-user-18", rating: 4 }
        ],
        enrolledStudents: ["demo-student-19", "demo-student-20"],
        courseContent: [
            {
                chapterId: "fs-ch-1",
                chapterOrder: 1,
                chapterTitle: "Frontend to Backend Flow",
                chapterContent: [
                    {
                        lectureId: "fs-lec-1",
                        lectureTitle: "Planning a Full Stack Project",
                        lectureDuration: 43,
                        lectureUrl: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "fs-lec-2",
                        lectureTitle: "Connecting React with Backend APIs",
                        lectureDuration: 61,
                        lectureUrl: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "fs-ch-2",
                chapterOrder: 2,
                chapterTitle: "Authentication and Data",
                chapterContent: [
                    {
                        lectureId: "fs-lec-3",
                        lectureTitle: "User Flows, Tokens, and Protected Routes",
                        lectureDuration: 49,
                        lectureUrl: "https://www.youtube.com/watch?v=2jqok-WgelI",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "fs-lec-4",
                        lectureTitle: "Mini Project: Course Platform Backend Integration",
                        lectureDuration: 72,
                        lectureUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000010",
        courseTitle: "Advanced React Development",
        description: "Deepen your React skills with advanced state handling, performance patterns, component architecture, and real UI implementation strategies.",
        courseDescription: `
            <h2>Master Advanced React Concepts</h2>
            <p>This course is built for learners who already know the basics of React and want to build cleaner, larger, and more maintainable applications.</p>
            <p>You will focus on architecture, state flow, optimization, and real implementation patterns used in production apps.</p>
            <ul>
                <li>Build scalable component structures</li>
                <li>Handle complex state and async data</li>
                <li>Improve performance and code organization</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/e0e7ff/0f172a?text=Advanced+React",
        coursePrice: 1999,
        isPublished: true,
        discount: 20,
        educator: {
            _id: "66b200000000000000000010",
            name: "Nisha Reddy"
        },
        courseRatings: [
            { userId: "demo-user-19", rating: 5 },
            { userId: "demo-user-20", rating: 5 }
        ],
        enrolledStudents: ["demo-student-21", "demo-student-22"],
        courseContent: [
            {
                chapterId: "adv-react-ch-1",
                chapterOrder: 1,
                chapterTitle: "Architecture and State Flow",
                chapterContent: [
                    {
                        lectureId: "adv-react-lec-1",
                        lectureTitle: "Designing Reusable React Modules",
                        lectureDuration: 46,
                        lectureUrl: "https://www.youtube.com/watch?v=hQAHSlTtcmY",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "adv-react-lec-2",
                        lectureTitle: "Handling API State and Async UI",
                        lectureDuration: 58,
                        lectureUrl: "https://www.youtube.com/watch?v=NZKUirTtxcg",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "adv-react-ch-2",
                chapterOrder: 2,
                chapterTitle: "Performance and DX",
                chapterContent: [
                    {
                        lectureId: "adv-react-lec-3",
                        lectureTitle: "Rendering Performance and UI Responsiveness",
                        lectureDuration: 44,
                        lectureUrl: "https://www.youtube.com/watch?v=THL1OPn72vo",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "adv-react-lec-4",
                        lectureTitle: "Mini Project: Advanced Dashboard Experience",
                        lectureDuration: 69,
                        lectureUrl: "https://www.youtube.com/watch?v=lAFbKzO-fss",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000011",
        courseTitle: "Machine Learning Basics",
        description: "Learn core machine learning ideas, data preparation, model evaluation, and beginner-friendly workflows with practical examples and projects.",
        courseDescription: `
            <h2>Start Your Machine Learning Journey</h2>
            <p>This course introduces machine learning in a clear and practical way so you can understand how models work and where they are useful.</p>
            <p>You will work with simple datasets, build intuition for predictions, and learn how to evaluate results step by step.</p>
            <ul>
                <li>Understand supervised learning basics</li>
                <li>Prepare data and train beginner-friendly models</li>
                <li>Measure model quality with simple evaluation methods</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/dcfce7/0f172a?text=ML+Basics",
        coursePrice: 1499,
        isPublished: true,
        discount: 12,
        educator: {
            _id: "66b200000000000000000011",
            name: "Raghav Iyer"
        },
        courseRatings: [
            { userId: "demo-user-21", rating: 4 },
            { userId: "demo-user-22", rating: 5 }
        ],
        enrolledStudents: ["demo-student-23"],
        courseContent: [
            {
                chapterId: "ml-ch-1",
                chapterOrder: 1,
                chapterTitle: "ML Foundations",
                chapterContent: [
                    {
                        lectureId: "ml-lec-1",
                        lectureTitle: "What Machine Learning Solves",
                        lectureDuration: 39,
                        lectureUrl: "https://www.youtube.com/watch?v=GwIo3gDZCVQ",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "ml-lec-2",
                        lectureTitle: "Features, Labels, and Training Data",
                        lectureDuration: 56,
                        lectureUrl: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "ml-ch-2",
                chapterOrder: 2,
                chapterTitle: "Models and Evaluation",
                chapterContent: [
                    {
                        lectureId: "ml-lec-3",
                        lectureTitle: "Regression and Classification Basics",
                        lectureDuration: 45,
                        lectureUrl: "https://www.youtube.com/watch?v=JcI5E2Ng6r4",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "ml-lec-4",
                        lectureTitle: "Mini Project: Predicting Student Outcomes",
                        lectureDuration: 64,
                        lectureUrl: "https://www.youtube.com/watch?v=i_LwzRVP7bg",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000012",
        courseTitle: "Data Structures & Algorithms",
        description: "Strengthen problem solving with arrays, linked lists, stacks, queues, trees, recursion, and interview-oriented algorithm practice.",
        courseDescription: `
            <h2>Improve Problem Solving with DSA</h2>
            <p>This course helps you understand the most important data structures and algorithms through examples, visual explanations, and coding practice.</p>
            <p>It is especially useful for placements, coding rounds, and building stronger problem-solving confidence.</p>
            <ul>
                <li>Understand core data structures clearly</li>
                <li>Practice algorithm thinking step by step</li>
                <li>Prepare for coding interviews more confidently</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/fef3c7/0f172a?text=DSA",
        coursePrice: 999,
        isPublished: true,
        discount: 10,
        educator: {
            _id: "66b200000000000000000012",
            name: "Pooja Nair"
        },
        courseRatings: [
            { userId: "demo-user-23", rating: 5 },
            { userId: "demo-user-24", rating: 4 }
        ],
        enrolledStudents: ["demo-student-24", "demo-student-25"],
        courseContent: [
            {
                chapterId: "dsa-ch-1",
                chapterOrder: 1,
                chapterTitle: "Core Data Structures",
                chapterContent: [
                    {
                        lectureId: "dsa-lec-1",
                        lectureTitle: "Arrays, Strings, and Complexity",
                        lectureDuration: 41,
                        lectureUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "dsa-lec-2",
                        lectureTitle: "Stacks, Queues, and Linked Lists",
                        lectureDuration: 59,
                        lectureUrl: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "dsa-ch-2",
                chapterOrder: 2,
                chapterTitle: "Algorithms and Interview Patterns",
                chapterContent: [
                    {
                        lectureId: "dsa-lec-3",
                        lectureTitle: "Recursion, Sorting, and Searching",
                        lectureDuration: 47,
                        lectureUrl: "https://www.youtube.com/watch?v=kgBjXUE_Nwc",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "dsa-lec-4",
                        lectureTitle: "Mini Project: Solving Interview-Style Problems",
                        lectureDuration: 68,
                        lectureUrl: "https://www.youtube.com/watch?v=2ZLl8GAk1X4",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000013",
        courseTitle: "Python Programming Mastery",
        description: "Learn Python fundamentals, functions, object-oriented programming, and real coding workflows through projects designed for beginners and aspiring developers.",
        courseDescription: `
            <h2>Build Strong Python Skills</h2>
            <p>This course helps you become comfortable with Python by combining fundamentals with practical exercises and small projects that build confidence progressively.</p>
            <p>You will write clean code, work with common data structures, and understand how Python is used in development and automation tasks.</p>
            <ul>
                <li>Learn Python syntax, loops, functions, and modules</li>
                <li>Practice object-oriented programming and problem solving</li>
                <li>Build mini projects using real programming workflows</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/dcfce7/0f172a?text=Python+Mastery",
        coursePrice: 1499,
        isPublished: true,
        discount: 18,
        educator: {
            _id: "66b200000000000000000013",
            name: "Rahul Joshi"
        },
        courseRatings: [
            { userId: "demo-user-25", rating: 5 },
            { userId: "demo-user-26", rating: 4 }
        ],
        enrolledStudents: ["demo-student-26", "demo-student-27"],
        courseContent: [
            {
                chapterId: "python-ch-1",
                chapterOrder: 1,
                chapterTitle: "Python Foundations",
                chapterContent: [
                    {
                        lectureId: "python-lec-1",
                        lectureTitle: "Installing Python and Writing Your First Script",
                        lectureDuration: 38,
                        lectureUrl: "https://www.youtube.com/watch?v=rfscVS0vtbw",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "python-lec-2",
                        lectureTitle: "Variables, Loops, and Functions",
                        lectureDuration: 57,
                        lectureUrl: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "python-ch-2",
                chapterOrder: 2,
                chapterTitle: "Problem Solving with Python",
                chapterContent: [
                    {
                        lectureId: "python-lec-3",
                        lectureTitle: "Working with Lists, Dictionaries, and Files",
                        lectureDuration: 49,
                        lectureUrl: "https://www.youtube.com/watch?v=qhT5P4b0Yj8",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "python-lec-4",
                        lectureTitle: "Mini Project: Student Automation Toolkit",
                        lectureDuration: 66,
                        lectureUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000014",
        courseTitle: "C++ for Beginners",
        description: "Understand C++ syntax, logic building, functions, arrays, and object-oriented programming with beginner-friendly examples and coding exercises.",
        courseDescription: `
            <h2>Start Programming with C++</h2>
            <p>This course introduces C++ in a structured way so new learners can understand programming fundamentals while also preparing for academic and placement-focused coding tasks.</p>
            <p>You will learn how to write, test, and improve your code through clear examples and guided exercises.</p>
            <ul>
                <li>Learn core C++ syntax and control flow</li>
                <li>Practice arrays, functions, and object-oriented basics</li>
                <li>Build a stronger foundation for coding interviews</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/e0e7ff/0f172a?text=C%2B%2B+Beginners",
        coursePrice: 999,
        isPublished: true,
        discount: 10,
        educator: {
            _id: "66b200000000000000000014",
            name: "Kavya Menon"
        },
        courseRatings: [
            { userId: "demo-user-27", rating: 4 },
            { userId: "demo-user-28", rating: 5 }
        ],
        enrolledStudents: ["demo-student-28"],
        courseContent: [
            {
                chapterId: "cpp-ch-1",
                chapterOrder: 1,
                chapterTitle: "C++ Basics",
                chapterContent: [
                    {
                        lectureId: "cpp-lec-1",
                        lectureTitle: "Setting Up C++ and Understanding Syntax",
                        lectureDuration: 35,
                        lectureUrl: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "cpp-lec-2",
                        lectureTitle: "Conditions, Loops, and Functions",
                        lectureDuration: 54,
                        lectureUrl: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "cpp-ch-2",
                chapterOrder: 2,
                chapterTitle: "Data Structures and OOP",
                chapterContent: [
                    {
                        lectureId: "cpp-lec-3",
                        lectureTitle: "Arrays, Strings, and Pointers",
                        lectureDuration: 47,
                        lectureUrl: "https://www.youtube.com/watch?v=8jLOx1hD3_o",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "cpp-lec-4",
                        lectureTitle: "Mini Project: Student Record Manager in C++",
                        lectureDuration: 63,
                        lectureUrl: "https://www.youtube.com/watch?v=Rub-JsjMhWY",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    },
    {
        _id: "66a100000000000000000015",
        courseTitle: "JavaScript Advanced Concepts",
        description: "Go deeper into JavaScript with closures, async programming, ES6+, modules, and patterns used in modern frontend and backend applications.",
        courseDescription: `
            <h2>Level Up Your JavaScript</h2>
            <p>This course is designed for learners who already know the basics of JavaScript and want to strengthen the concepts that matter in real projects and interviews.</p>
            <p>You will understand how JavaScript behaves under the hood and how to write cleaner, more modern code.</p>
            <ul>
                <li>Master closures, scope, promises, and async workflows</li>
                <li>Use ES6+ features effectively in real applications</li>
                <li>Build confidence with modern JavaScript patterns</li>
            </ul>
        `,
        courseThumbnail: "https://placehold.co/600x400/fef3c7/0f172a?text=Advanced+JavaScript",
        coursePrice: 1499,
        isPublished: true,
        discount: 15,
        educator: {
            _id: "66b200000000000000000015",
            name: "Ishita Kapoor"
        },
        courseRatings: [
            { userId: "demo-user-29", rating: 5 },
            { userId: "demo-user-30", rating: 4 }
        ],
        enrolledStudents: ["demo-student-29", "demo-student-30"],
        courseContent: [
            {
                chapterId: "js-adv-ch-1",
                chapterOrder: 1,
                chapterTitle: "Modern JavaScript Essentials",
                chapterContent: [
                    {
                        lectureId: "js-adv-lec-1",
                        lectureTitle: "Closures, Scope, and Higher-Order Functions",
                        lectureDuration: 42,
                        lectureUrl: "https://www.youtube.com/watch?v=mus_vwhTCq0",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "js-adv-lec-2",
                        lectureTitle: "Promises, Async Await, and Error Handling",
                        lectureDuration: 59,
                        lectureUrl: "https://www.youtube.com/watch?v=PoRJizFvM7s",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            },
            {
                chapterId: "js-adv-ch-2",
                chapterOrder: 2,
                chapterTitle: "Patterns for Real Projects",
                chapterContent: [
                    {
                        lectureId: "js-adv-lec-3",
                        lectureTitle: "Modules, Destructuring, and Clean Code Patterns",
                        lectureDuration: 46,
                        lectureUrl: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
                        isPreviewFree: true,
                        lectureOrder: 1
                    },
                    {
                        lectureId: "js-adv-lec-4",
                        lectureTitle: "Mini Project: Interactive Task Workflow App",
                        lectureDuration: 67,
                        lectureUrl: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
                        isPreviewFree: false,
                        lectureOrder: 2
                    }
                ]
            }
        ]
    }
]
