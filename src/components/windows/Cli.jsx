import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        letsgo: {
            description: 'List all available commands',
            fn: () => `Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  help        - Show this help message
  about       - Learn about me
  skills      - View my technical skills
  projects    - See my projects
  experience  - View my work experience
  education   - View my education
  contact     - Get my contact information
  social      - View my social media links
  resume      - Download my resume
  clear       - Clear the terminal
  echo <msg>  - Echo a message
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        },
        about: {
            description: 'Learn about me',
            fn: () => `
👋 Hi, I'm Aditya Borgaonkar!

I'm a passionate Full Stack Developer with a love for creating 
beautiful and functional web applications. I enjoy working with 
modern technologies and constantly learning new things.

Currently focused on React, Node.js, and cloud technologies.
Type 'skills' to see my technical expertise!`
        },
        skills: {
            description: 'View my technical skills',
            fn: () => `
🛠️  Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:     React, JavaScript, TypeScript, HTML5, CSS3, SCSS
Backend:      Node.js, Express, Python, Java
Database:     MongoDB, PostgreSQL, MySQL, Redis
Cloud:        AWS, Firebase, Vercel, Netlify
Tools:        Git, Docker, VS Code, Figma
Other:        REST APIs, GraphQL, Agile/Scrum`
        },
        projects: {
            description: 'See my projects',
            fn: () => `
🚀 Featured Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. macOS Portfolio
   A beautiful macOS-inspired portfolio website
   Tech: React, SCSS, Vite

2. E-Commerce Platform
   Full-stack online shopping platform
   Tech: React, Node.js, MongoDB

3. Task Management App
   Collaborative project management tool
   Tech: React, Firebase, Material-UI

Type 'social' to find links to my GitHub!`
        },
        experience: {
            description: 'View my work experience',
            fn: () => `
💼 Work Experience
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 Software Developer
   Company Name | 2023 - Present
   - Developed scalable web applications
   - Collaborated with cross-functional teams
   - Implemented CI/CD pipelines

🔹 Frontend Developer Intern
   Company Name | 2022 - 2023
   - Built responsive UI components
   - Optimized application performance`
        },
        education: {
            description: 'View my education',
            fn: () => `
🎓 Education
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Bachelor of Technology
   Computer Science & Engineering
   University Name | 2019 - 2023
   
   Relevant Coursework:
   • Data Structures & Algorithms
   • Database Management Systems
   • Web Development
   • Software Engineering`
        },
        contact: {
            description: 'Get my contact information',
            fn: () => `
📬 Contact Me
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email:    aditya@example.com
📱 Phone:    +91 XXXXX XXXXX
📍 Location: India

Feel free to reach out for collaborations or opportunities!`
        },
        social: {
            description: 'View my social media links',
            fn: () => `
🌐 Social Links
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GitHub:     github.com/adityaborgaonkar
LinkedIn:   linkedin.com/in/adityaborgaonkar
Twitter:    twitter.com/adityaborgaonkar
Portfolio:  adityaborgaonkar.dev`
        },
        resume: {
            description: 'Download my resume',
            fn: () => {
                window.open('/resume.pdf', '_blank')
                return '📄 Opening resume in a new tab...'
            }
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        hatado: {
            description: 'Clear the terminal',
            fn: () => ''
        }
    }

    const welcomeMessage = `
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   Welcome to Aditya's Terminal Portfolio! 🚀              ║
║                                                           ║
║   Type 'letsgo' to see all available commands               ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝

Available commands: help, about, skills, projects, experience, 
                    education, contact, social, resume, clear
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'adityaborgaonkar:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                    style={{
                        minHeight: '100%',
                        maxHeight: '100%'
                    }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli