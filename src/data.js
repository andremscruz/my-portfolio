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
        challange:"Build an interactive game where the user rolls dice until all show the same number. Beyond the core mechanic, "  +
        "I wanted to add a ranking system to record best performances, which required saving player data (name, time, and number of rolls) " + 
        "to a persistent database.",
        solution: [
            "Structured the application in React components, using useState and useEffect to manage dice state and victory logic.",
            "Implemented a “hold” feature so players can lock specific dice.",
            "Added visual feedback to distinguish between active and inactive dice.",
            "Created a ranking with two metrics (lowest time and fewest rolls), prompting the player for a name before starting the game.",
            "Connected the app to an API/backend to store and fetch leaderboard records, simulating a global ranking system." 
        ],
        result: "A functional app combining simple game mechanics with persistent data. The project demonstrates state management in React, " +
        "game logic built with hooks, frontend-backend integration via API, and clear UX with visual feedback and competitive ranking."
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
        context:"Solo college project focused on a complete CRUD for books, with basic authentication and permission control.",
        challange:"Allow users to create, edit, and delete books, ensuring only the author of each entry could modify or remove their own records.",
        solution:[
            "Developed RESTful routes with Node.js and Express to handle CRUD operations.",
            "Set up MongoDB with Mongoose to define schemas and manage book data for persistent data storage.",
            "Built a custom frontend using vanilla JavaScript for form handling and dynamic updates.",
            "Implemented simple authentication to differentiate users and enforce permissions.",
        ],
        result:"A complete application demonstrating hands-on experience with fullstack CRUD, user authentication and permissions."
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
        challange:"Create a simple contact management system (name and phone number), " +  
        "with real-time editing and deletion, while keeping the UI intuitive and user-friendly.",
        solution:[
            "Structured React components for handling forms, listing, and editing contacts.",
            "Used Axios to connect the frontend to the API for data operations.",
            "Implemented visual feedback for adding, updating, and deleting contacts.",
            "Designed a responsive layout for both desktop and mobile devices."
        ],
        result:"A functional app showcasing full CRUD capabilities and fullstack integration. " + 
        "It strengthened skills in React Router, state management, and REST API handling, as well as code organization and best practices."
    },
    {
        title: "Covid Survey App",
        description: "A survey platform where users answered multiple-choice questions related to COVID. " + 
        "At the end, they could see how their answers compared to others, with percentage breakdowns. " +
        "Built to practice form handling, data validation, and dynamic result rendering.",
        stack: {
            "frontend": ["JavaScript", "CSS", "HTML"],
            "backend":[]
        },
        icon: "📝",
        context:"College project done in group to practice basic CRUD operations with posts.",
        challange:"Build a simple application where users could create, edit, and delete posts related to COVID research.",
        solution:[
            "Built the backend with Node.js, Express, and MongoDB to store user responses.", 
            "Created a lightweight frontend with vanilla JavaScript for form rendering and dynamic updates.",
            "Implemented logic to calculate and display aggregate results in real time after each submission.",
            "Focused on simple, responsive UI with clear feedback.",
            "Collaborated using version control and task division to meet deadlines."
        ],
        result:"An engaging web app that demonstrates CRUD fundamentals, backend data handling, " + 
        "dynamic frontend updates without frameworks and fullstack interaction between client and server." +  
        "It also highlighted teamwork, version control, and web development best practices."
    }
]

export const otherProjects = [
    {
        title: "Airbnb clone",
        link: "https://luxury-tarsier-eca883.netlify.app/",
        image: "airbnb.png",
        gitLink: "https://github.com/andremscruz/airbnb-clone",
        gitImage: "gitHub-white.png", 
    },
    {
        title: "Meme generator",
        link: "https://stunning-sorbet-5933c5.netlify.app/",
        image: "trollFace.png",
        gitLink: "https://github.com/andremscruz/meme-generator",
        gitImage: "gitHub-white.png",   
    },
    {
        title: "Bedtime stories",
        link: "https://flourishing-capybara-7b74f2.netlify.app/",
        image: "book.png",
        gitLink: "https://github.com/andremscruz/bedtime_stories",
        gitImage: "gitHub-white.png"   
    },
    {
        title: "Phonnect Social Media", 
        gitLink: "https://github.com/COMP231W21-G3/COMP231W21_G3_PHONNECT",
        gitImage: "gitHub-white.png"
    }
]
    

                        
        

                       
       
