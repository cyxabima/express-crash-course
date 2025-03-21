# 🚀 Express Crash Course
"A beginner-friendly crash course on Express.js, focusing on backend fundamentals, MVC structure, CRUD operations, middleware, and routing using an in-memory database."

## Overview
This repository is a crash course on **Express.js**, where I focused on learning the basics of building backend systems without the complexity of databases. Instead of using a full-fledged database, a simple **in-memory database (array of objects)** is used to understand fundamental backend concepts.

## What I Learned
- Setting up an **Express.js** server
- Understanding the **MVC (Model-View-Controller)** pattern
  - **Routes** and **Controllers** are separated for better structure
- Implementing **CRUD operations**:
  - **GET** - Retrieve data
  - **POST** - Add new data
  - **PUT** - Update existing data
  - **DELETE** - Remove data
- Handling **HTTP responses** effectively
- Using **middleware** for request handling
- Understanding **routing mechanisms**
- Exploring various **Express.js features**

## Project Structure
```
express-crash-course/
│── controllers/    # Contains logic for handling requests
│── routes/         # Defines API routes
│── models/         # Data structure (if required)
│── middleware/     # Custom middleware functions
│── server.js       # Entry point for the Express app
```

## How to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/cyxabima/express-crash-course.git
   cd express-crash-course
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. Access the API at `http://localhost:3000` (or the configured port)

## Technologies Used
- **Node.js**
- **Express.js**
- **JavaScript**

## Future Improvements
- Implementing a proper database (MongoDB, PostgreSQL, etc.)
- Adding authentication & authorization
- Improving error handling
- Writing test cases

Feel free to explore and improve upon this project! 🚀

