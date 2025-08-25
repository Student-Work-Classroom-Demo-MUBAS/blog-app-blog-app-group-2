# Blog Post Web App

# Project Overview
 This web application is a blog app focusing on sharing machine learning insights. It allows users to create, edit, and manage blog posts with a user-friendly interface. It uses Bootstrap for styling, and consists of HTML, CSS, and JavaScript for frontend development.


# Individual Contributions

**Tatyana Chingeni**
- Homepage: Lists all posts with title snippets, shows success alerts, handles empty state, and provides Read More/Edit buttons.

- Edit & Delete: Edit posts with prefilled forms, validation errors, and a delete button with confirmation.

- Dark/Light Mode: Navbar toggle for themes, smooth transitions, and preference saved in localStorage.

- Styling Enhancements: Custom colors, button hover effects, and flexible form layout.




**Takondwa Mphande**
- Set up project structure and organized folders.

- Installed necessary dependencies and libraries. (express, nodemon, bootstrap)

- Wrote the README documentation.

- Created header.ejs for site-wide page headers.

- Created footer.ejs for consistent page footers.

- Added scripts.ejs for backup form validation.

- Built post.ejs to list all blog posts clearly.


**Ibrahim Sailesi**
- Created app server using express framework 

- Created ejs for creating posts

- Styled modified footer by adding contact details

- Added scroll-up button and defined it's properties in Javascript 

- Modified a container of the posts on the homepage using bootstrap 

- Added and customized the font-awesome icons

- Modified bootstrap framework css and js cdn for better deployment


# Features

- User-friendly navigation bar with links to Home and New Post pages and theme changing button
- Post creation form with validation to add new blog entries
- Responsive layout with Bootstrap components ensuring mobile compatibility
- List and view blog posts in an organized manner
- Easy navigation between interacting pages


# Technical Decisions

- Bootstrap CDN chosen for rapid UI development and responsive design
- HTML5 and CSS3 for markup and styling with a modular stylesheet
- JavaScript for interactivity and form handling on client side
- Use of custom CSS classes alongside Bootstrap for easier customization


# Installation and Running Instructions

1. Clone the repository
2. Navigate into the project directory
3. defined port number for running the web in app.js (using 3000)
4. with the help of nodemon installed, run the file using **nodemon app.js** for easy refresh after every change made

- Since the app uses only frontend files (HTML, CSS, JS), no backend/server setup is required.

# Future Enhancements

- User authentication for post ownership and editing
- Backend integration with database for persistent storage (in memory array currently in use)
- Additional features like comments, post categories, and search




