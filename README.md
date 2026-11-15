# 📚 Blog Portfolio

A full-stack **MERN** blog application with a personal portfolio landing page. Visitors can read blogs and like them after logging in, while an admin can publish new blogs from a dedicated admin view.

> 🔗 Repository: https://github.com/gomathi07-cyber/Blog_application

---

## 📸 Screenshots

| Sign Up Page | Login Page |
|--------------|------------|
| ![Signup](screenshots/Signup_Page.png) | ![Login](screenshots/Login_Page.png) |

| Home Page | Home Page (Footer) |
|-----------|--------------------|
| ![Home](screenshots/Home_Page1.png) | ![Home 2](screenshots/Home_Page2.png) |

| Admin Blog Page | User Blog Page |
|-----------------|----------------|
| ![Admin Blogs](screenshots/Admin_blog_page.png) | ![User Blogs](screenshots/User_Blog_page.png) |


---

## ✨ Features

- 🏠 **Portfolio home page** – hero section, skills icons (HTML, CSS, JavaScript, React, MongoDB, Node.js), "Hire Me" and "Read My Blogs" buttons with Resume
- 🔐 **Authentication** – user registration (email, password, confirm password) and login using Firebase Authentication
- 📝 **Blog listing** – view the latest blogs with title, date and description
- ❤️ **Like system** – like blogs and see the live like count
- 👩‍💼 **Admin panel** – admin can add new blogs using a title and content form
- 🚪 **Logout** – the navbar switches between Login / Logout based on session
- 📱 Clean, responsive UI with an orange-themed design

---

## 🛠️ Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | React.js, HTML5, CSS3, Tailwind CSS, JavaScript  |
| Backend   | Node.js, Express.js                |
| Database  | MongoDB                            |
| Authentication| Firebase                     |
| Tools     | VS Code, Git, GitHub, MongoDB Compass |

---

## 📁 Project Structure

```
Blog_application/
├── blog-project-frontend/        # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/               # Images and icons
│   │   ├── components/
│   │   │   └── common/           # Shared components
│   │   │       ├── Footer.jsx
│   │   │       ├── Navbar.css
│   │   │       └── Navbar.jsx
│   │   ├── config/               # App configuration
│   │   ├── Blogs.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
├── blog-project-backend/         # Node + Express backend
│   ├── index.js
│   └── package.json
├── screenshots/                  # README screenshots
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/) (local installation or Atlas)
- Git



## 🧭 Application Routes

| Route       | Description                          |
|-------------|--------------------------------------|
| `/home`     | Portfolio landing page               |
| `/login`    | User login                           |
| `/signup`   | New user registration                |
| `/blogs`    | List of blogs (like option for users; add-blog form for admin) |

---
## 🔌 API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint                 | Description                          |
|--------|--------------------------|--------------------------------------|
| GET    | `/api/blogs`             | Fetch all blogs                      |
| POST   | `/api/blogs`             | Add a new blog (used by admin)       |
| PATCH  | `/api/blogs/like/:id`    | Increase the like count of a blog    |

### Blog Schema

| Field        | Type   | Description              |
|--------------|--------|--------------------------|
| `newTitle`   | String | Blog title               |
| `newContent` | String | Blog content             |
| `date`       | String | Date the blog was added  |
| `likes`      | Number | Number of likes          |

---

## 👤 How to Use
> **Note:** This application is currently configured to run on a local development environment (`localhost`) only. It has not been deployed. Screenshots of all pages are included in the `screenshots/` folder and in the Screenshots section above.

1. Open the **Home** page and click **Read My Blogs**.
2. **Register** with your email and password, then **Login**.
3. Browse blogs on the **Blogs** page and click **Like** on any post.
4. Log in as **admin** to see the *Add Blog* form and publish new posts.
5. Click **Logout** to end your session.



## 📬 Contact

**Gomathi** – Full Stack Developer
📧 Email: *gomathisivagnanam07@gmail.com*
📍 Location: Cuddalore, India

---

## 📄 License

This project is created for learning and task-submission purposes.

© 2026 Blog Portfolio. All rights reserved.
