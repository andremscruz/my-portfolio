export const pages = [
    {
        id:1,
        text: "About",
        img: "about.png",
        whiteimg: "about-white.png"
    },
    {
        id:2,
        text: "Resume",
        img: "resume.png",
        whiteimg:"resume-white.png"
    },
    {
        id:3,
        text: "Projects",
        img:  "projects.png",
        whiteimg: "projects-white.png"
    },
    {
        id:4,
        text: "Contact",
        img: "contact.png",
        whiteimg: "contact-white.png" 
    }
]

export const experiences = [
    {
        position: "Web Developer",
        company: "Bmetric",
        location: "Remote from Portugal",
        timeFrame: "February 2024 - June 2025",
        description: "Bmetric is a remote-first, full-service B2B SaaS provider specializing in offering comprehensive technology, services, and expertise " + 
        "to help businesses establish and optimize their contact strategy, sales efficiency, lead gathering, customer experience, and cross-channel insights.",
        routine: [
            "Implemented new user journeys and setup flows on customer websites by developing responsive pop-ups and forms using HTML, CSS, and vanilla JavaScript.",
            "Edited and optimized existing user journeys and conversion setups to enhance performance and improve user engagement.",
            "Designed and updated content sections on Bmetric’s website using the custom HTML option in WordPress, applying clean, maintainable HTML and CSS for consistent branding and layout.",
            "Navigated and worked within the WordPress platform, including content management, theme customization, and plugin configuration.",
            "Collaborated closely with Account Managers to understand client goals and deliver customized website features that align with their expectations.",
            "Applied UI/UX best practices to ensure intuitive, visually appealing, and user-friendly interfaces across all customer-facing web elements."
        ]
    },
    {
        position: "Freelance Web Developer",
        company: "Freelance",
        location: "Remote from Portugal",
        timeFrame: "March 2022 - December 2023",
        description: "After a period of self-directed learning and building practical initiatives (some of which are featured in the Projects section), I secured two consecutive " + 
        "monthly contracts with the same employer, where I applied and expanded my skill set. During the first contract, I focused primarily on frontend development with some " 
        + "involvement in simpler backend tasks. In the second contract, I worked across the full stack—handling frontend, backend, and some NoSQL database operations.",
        routine: [
            "Built and styled responsive user interfaces using React, HTML, and CSS to deliver seamless, modern experiences across devices.",
            "Implemented dynamic components with state management and data fetching using Axios, enabling interactive and data-driven features.",
            "Ensured UI performance and code quality by adhering to best practices and using tools like ESLint for linting.",
            "Developed and maintained backend logic using Node.js and Express, handling routing, middleware, and API endpoints.",
            "Utilized Morgan for HTTP request logging and Postman for testing and debugging RESTful API integrations.",
            "Worked with MongoDB and Mongoose to design schemas, manage collections, and perform CRUD operations for dynamic data handling.",
        ]
    }
]

export const mainProjects = [
    {
        title: "Tenzies Game",
        description: "A fast-paced dice game built with React. Players roll dice to match all values, racing against the clock. "  + 
        "Includes a leaderboard, with player names, times and rolls saved through an API. " +
        "Created as a way to practice component-based UI, state management, and API integration.",
        stack: {
            "frontend": ["React", "JavaScript", "CSS", "HTML"],
            "backend": ["Node.js", "Express", "MongoDB", "Mongoose", "Axios", "Restful API"]
        },
        icon: "🎲",
        context:"Personal React project developed to practice game logic, state management, and backend integration.",
        challenge:"Build an interactive game where the user rolls dice until all show the same number. "  +
        "I added a ranking system to record best performances, which required saving player data (name, time, and number of rolls) " + 
        "to a persistent database.",
        solution: [
            "Structured the application in React components, using useState and useEffect to manage dice state and victory logic.",
            "Added visual feedback to distinguish between active and inactive dice.",
            "Created a ranking with two metrics (lowest time and fewest rolls), prompting the player for a name before starting the game.",
            "Connected the app to an API/backend to store and fetch leaderboard records, simulating a global ranking system." 
        ],
        result: "A functional React app featuring simple game mechanics, persistent data, hook-based game logic, " +
        "API-driven frontend-backend integration, clear UX with visual feedback, and competitive ranking.",
        link: "https://illustrious-starburst-0b7773.netlify.app/",
        gitLink: "https://github.com/andremscruz/tenzies-game",

    },
    {
        title: "Covid Survey App",
        description: "A survey platform where users answered multiple-choice questions related to COVID. " + 
        "At the end, they could see how their answers compared to others, with percentage breakdowns, " + 
        "Built to practice form handling, authentication, data validation, and dynamic result rendering.",
        stack: {
            "frontend": ["JavaScript", "CSS", "HTML"],
            "backend":[]
        },
        icon: "📝",
        context:"College project done in group to practice basic CRUD operations along with authentication and permissions.",
        challenge:"Develop a simple application that allows users to post, edit, and delete research-related " + 
        "content about COVID, while ensuring that each user could only modify their own posts.",
        solution:[
            "Created a backend with Express and MongoDB for handling posts and users.", 
            "Built logic to calculate and display aggregate results in real time after each submission.",
            "Implemented authentication and authorization to control user access.",
            "Collaborated using version control and task division to meet deadlines."
        ],
        result:"An engaging web app that demonstrates CRUD fundamentals with authentication and role-based access, backend data handling, " + 
        "dynamic frontend updates without frameworks and fullstack interaction between client and server. " +  
        "It also highlighted teamwork, version control, and web development best practices.",
        link: "https://surveycone.onrender.com/",
        gitLink: "https://github.com/comp229-group7/group-project",
    },
    {
        title: "Book Log",
        description: "A full-stack application for logging and managing books. Users can add, edit, and delete book entries. " +
        "Designed to practice CRUD operations while providing a clean, user-friendly interface.",
        stack: {
            "frontend": ["JavaScript", "CSS", "HTML"],
            "backend": ["Node.js", "Express", "MongoDB", "Mongoose", "Restful API"]
        },
        icon: "📚",
        context:"A solo project developed in college focused on implementing a complete CRUD system " + 
        "for managing books using Node.js, Express, and MongoDB, using vanilla JavaScript for the frontend.",
        challenge:"Build a simple, functional system where users could create, edit, and delete book records, " + 
        "ensuring clean code organization and a usable interface even with a vanilla frontend.",
        solution:[
            "Designed a RESTful backend using Node.js and Express.",
            "Set up MongoDB with Mongoose to define schemas and manage book data for persistent data storage.",
            "Built a custom frontend using vanilla JavaScript for form handling and dynamic updates.",
            "Focused on usability and a smooth flow for managing posts."
        ],
        result:"A complete fullstack CRUD project showcasing backend and database integration, while mantaining clean code structure. ",
        link: "https://book-log-cfzu.onrender.com/",
        gitLink: "https://github.com/andremscruz/BooksApp",
    },
    {
        title: "Contact List",
        description: "A contact manager that allows users to create, update, and remove entries. " +
        "Focused on connecting frontend and backend using REST principles to handle data efficiently.",
        stack: {
            "frontend": ["React", "JavaScript", "CSS", "HTML"],
            "backend": ["Node.js", "Express", "MongoDB", "Mongoose", "Restful API"]
        },
        icon: "📒",
        context:"Web app built with React as a practical CRUD (Create, Read, Update, Delete) exercise, connecting frontend and backend.",
        challenge:"Create a simple contact management system (name and phone number), " +  
        "with real-time editing and deletion, while keeping the UI intuitive and user-friendly.",
        solution:[
            "Structured React components for handling forms, listing, and editing contacts.",
            "Used Axios to connect the frontend to the API for data operations.",
            "Implemented visual feedback for adding, updating, and deleting contacts.",
            "Designed a responsive layout for both desktop and mobile devices."
        ],
        result:"A functional app showcasing full CRUD capabilities and fullstack integration. " + 
        "It strengthened skills in React Router, state management, and REST API handling, as well as code organization and best practices.",
        link: "https://phonebook-frontend-alpha.vercel.app/",
        gitLink: "https://github.com/andremscruz/phonebook-frontend",
    },
    
]

export const otherProjects = [
    {
        title: "Airbnb clone",
        link: "https://luxury-tarsier-eca883.netlify.app/",
        image: "airbnb.png",
        gitLink: "https://github.com/andremscruz/airbnb-clone",
    },
    {
        title: "Meme generator",
        link: "https://stunning-sorbet-5933c5.netlify.app/",
        image: "trollFace.png",
        gitLink: "https://github.com/andremscruz/meme-generator",
    },
    {
        title: "Bedtime stories",
        link: "https://flourishing-capybara-7b74f2.netlify.app/",
        image: "book.png",
        gitLink: "https://github.com/andremscruz/bedtime_stories",
    },
    {
        title: "Phonnect Social Media", 
        gitLink: "https://github.com/COMP231W21-G3/COMP231W21_G3_PHONNECT",
    }
]
    

                        
        

                       
       
