# Task-Manager

THE SERVER.JS FILE IN THE BACKEND FOLDER ONLY RUN ON YOU LOCAL MACHINE!!!

A simple and efficient **Task Manager** web application built with **Vanilla JS, HTML, Tailwind CSS** on the frontend, and **Node.js, Express, PostgreSQL** on the backend.

---

## Features

- Add, view, and delete tasks
- Track task counts dynamically
- Fully responsive design with Tailwind CSS
- Persistent data storage with PostgreSQL
- Simple REST API powered by Express

---

## Tech Stack

- **Frontend:** HTML, Vanilla JavaScript, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** PostgreSQL  

---

## Prerequisites

Before running this project locally, make sure you have:

- [Node.js](https://nodejs.org/) installed  
- [PostgreSQL](https://www.postgresql.org/) installed and running  
- A PostgreSQL user with a database ready for the app  

---

## Setup Instructions

1. **Clone the repository**

git clone <your-repo-url>
cd <your-repo-folder>

2. **Install dependencies**
npm install

3. **Configure PostgreSQL**
Create a new database (e.g., taskmanager)
Create a .env file in the project root with your database credentials:
    DB_USER=<your-postgres-username>
    DB_PASSWORD=<your-postgres-password>
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=<your-database-name>
    PORT=3000

4. **Run the server**
node index.js
The server should start on http://localhost:3000

Make sure PostgreSQL is running

5. **Access the frontend**
Open your browser and go to http://localhost:3000

DATABASE SCHEMA 
    CREATE TABLE tasks (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        created_at DATE NOT NULL
    );

Notes

This project is API-driven: frontend interacts with backend through REST endpoints.

If you want to deploy the frontend separately (e.g., GitHub Pages), you’ll need to update the fetch URLs to point to the live backend.

Make sure your backend server is running before trying to use the app

