SkillYatra - An EdTech Website 🚀

SkillYatra is a feature-rich, modern EdTech platform that allows users to create, consume, and rate educational content. Built using the MERN stack, it provides a seamless and interactive learning experience, empowering instructors to showcase expertise and learners to access high-quality content globally.

🌐 Live Demo: SkillYatra Website

---

Table of Contents 📖

Introduction

Key Features

System Architecture

Tech Stack

Installation & Setup

Screenshots

Future Enhancements

Contributing

License

---

Introduction

SkillYatra is a fully functional EdTech platform tailored for modern online education. It combines a modular frontend with robust backend integrations, enabling scalable and engaging learning applications. The project is designed to empower developers to create feature-rich educational platforms with ease.

Key Features ✨

Customizable UI Components: Reusable React components like Navbar, Footer, and Course Cards.

Secure Authentication & Profile Management: Role-based access, OTP verification, and password management.

Payment & Enrollment Workflows: Smooth course purchase, enrollment, and progress tracking.

API-Driven Backend: Well-structured routes and models for courses, categories, reviews, and user data.

State Management & Hooks: Efficient global state handling with Redux slices and custom hooks.

Cloud-based Media Management: Integration with Cloudinary for storing and serving media content.

Markdown Support: Course content is stored in Markdown for easy formatting and display.

Scalable Architecture: Clear separation of concerns with extensibility for future features.

---

System Architecture 🏗️

The platform follows a client-server architecture with three main components:

Front-end

ReactJS based frontend provides a responsive UI with pages for:

Students: Homepage, Course List, Wishlist, Cart & Checkout, Course Content, User Profile & Edit.

Instructors: Dashboard, Course Management, Insights, Profile Management.

Admin (Future Scope): Dashboard, Instructor Management, Analytics, and other management tools.

Back-end

NodeJS & Express backend handles:

User authentication & authorization with JWT and OTP verification.

Course management: CRUD operations for courses.

Payment integration via Razorpay for enrollment.

Cloud-based media management with Cloudinary.

Storing course content in Markdown for flexible rendering.

Database

MongoDB is used as a NoSQL database to store user data, courses, reviews, and payment records.

---

Tech Stack 🛠️

Frontend: ReactJS, Redux, Tailwind CSS

Backend: NodeJS, ExpressJS

Database: MongoDB

Authentication: JWT, OTP Verification

Payment Gateway: Razorpay

Media Storage: Cloudinary

Deployment: Vercel

---

Installation & Setup ⚡

Clone the repository:

git clone https://github.com/yourusername/skillyatra.git
cd skillyatra


Backend Setup:

cd backend
npm install
cp .env.example .env  # configure environment variables
npm run dev


Frontend Setup:

cd frontend
npm install
npm start


Access the app:
Open http://localhost:3000
 in your browser.

---


Future Enhancements 🚀

Real-time chat between students and instructors

AI-powered course recommendations

Multi-language support

Admin panel for enhanced analytics and management

---

Contributing 🤝

We welcome contributions!

Fork the repository

Create a branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request
