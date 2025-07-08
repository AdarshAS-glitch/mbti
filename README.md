# <p align="center">MBTI Personality Quiz</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
  <a href="#"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"></a>
  <a href="#"><img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma"></a>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="#"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
</p>

## Introduction

This project is a web application designed to determine a user's MBTI (Myers-Briggs Type Indicator) personality type through an interactive quiz. It utilizes a React frontend to present questions and capture user responses, and an Express backend with Prisma ORM to process the data and calculate the resulting personality type. This application is intended for users interested in understanding their personality traits based on the MBTI model.

## Table of Contents

1.  [Key Features](#key-features)
2.  [Installation Guide](#installation-guide)
3.  [Usage](#usage)
4.  [Environment Variables](#environment-variables)
5.  [Project Structure](#project-structure)
6.  [Technologies Used](#technologies-used)
7.  [License](#license)

## Key Features

*   **Interactive Quiz:** A user-friendly interface built with React for taking the MBTI personality quiz.
*   **Dynamic Questions:** Questions are fetched from the backend and presented to the user dynamically.
*   **Real-time Response Handling:**  User responses are captured and processed as they answer each question.
*   **MBTI Calculation:** An algorithm accurately computes the personality type based on the user's responses.
*   **Result Display:** Presents the user with their MBTI type and a detailed description of that personality.
*   **Backend API:** An Express API handles question retrieval and personality calculation.
*   **Database Persistence:** Prisma ORM is used to interact with a database to store and retrieve questions.

## Installation Guide

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

4.  **Set up the `.env` file:**

    Create `.env` files in both the `backend` directories. Add the following environment variables to the backend `.env` file:

    ```
    DATABASE_URL="your_database_connection_string"
    ```
    (replace `your_database_connection_string` with your actual database URL).

5.  **Run Prisma migrations:**

    ```bash
    cd backend
    npx prisma migrate dev --name init
    ```

6.  **Seed the database (optional):**

    ```bash
    npm run seed
    ```

7.  **Start the backend server:**

    ```bash
    npm run dev
    ```

8.  **Start the frontend development server:**

    ```bash
    cd ../frontend
    npm run dev
    ```

    The frontend will typically be available at `http://localhost:5173`.  The backend will typically be available at `http://localhost:3000`.

## Usage

1.  **Access the application:** Open your web browser and navigate to the frontend URL (e.g., `http://localhost:5173`).
2.  **Take the quiz:** Answer the questions presented on the test page (`/questions`).  Use the range input to indicate your response to each question.
3.  **Submit your answers:**  Click the "Submit" button after answering all questions.
4.  **View your result:**  The application will redirect you to the results page (`/result`), where your MBTI personality type and a description will be displayed.

## Environment Variables

*   `DATABASE_URL`: The connection string for the PostgreSQL database, used by Prisma.

## Project Structure

```
/
├── frontend/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── components/
│   │   │   └── Questioncard.jsx
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── pages/
│   │   │   ├── Testpage.jsx
│   │   │   └── Result.jsx
│   └── README.md
├── backend/
│   ├── questions.json
│   ├── package.json
│   ├── seed.js
│   ├── index.js
│   ├── compute.js
│   ├── package-lock.json
│   ├── prisma/
│   │   ├── migrations/
│   │   │   ├── migration_lock.toml
│   │   │   ├── 20250707194127_details/
│   │   │   │   └── migration.sql
│   │   │   ├── 20250707104150_new1/
│   │   │   │   └── migration.sql
│   │   │   ├── 20250706121830_personality/
│   │   │   │   └── migration.sql
│   │   │   ├── 20250706062604_init/
│   │   │   │   └── migration.sql
│   │   │   └── 20250706130116_add_selected_questions/
│   │   │       └── migration.sql
│   ├── json/
│   │   ├── questions.json
│   │   └── details.json
├── package.json
└── package-lock.json
```

## Technologies Used

<p align="left">
  <a href="#"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
  <a href="#"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"></a>
  <a href="#"><img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma"></a>
    <a href="#"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"></a>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="#"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
  <a href="#"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFBA33" alt="Vite"></a>
</p>

*   **Frontend:** React, Tailwind CSS, Vite
*   **Backend:** Express.js, Node.js
*   **Database:** PostgreSQL (via Prisma)
*   **ORM:** Prisma
*   **HTTP Client:** Axios

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
