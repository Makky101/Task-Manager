# Task-Manager

A simple and efficient **Task Manager** web application built with **HTML, Vanilla JavaScript, and Tailwind CSS** on the frontend, and **Node.js, Express, and PostgreSQL** on the backend.

---

## 🌍 Live URLs

### **Frontend (GitHub Pages)**

https://makky101.github.io/Task-Manager/

## 🚀 Features

* Add tasks
* View all tasks
* Delete tasks
* Tasks saved permanently in a PostgreSQL database
* REST API backend
* Fully responsive UI

---

## 🛠 Tech Stack

### **Frontend**

* HTML
* Tailwind CSS
* Vanilla JavaScript

### **Backend**

* Node.js
* Express.js

### **Database**

* PostgreSQL (hosted on Render)


## 📡 API Endpoints

### **GET /load**

Returns all tasks.

### **POST /send**

Adds a task.

### **DELETE /delete/:id**

Deletes one task.

### **DELETE /delete**

Deletes all tasks.

---

## 🗄 Database Schema

```
CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    datetime TIME NOT NULL
);
```


