# Enterprise User Management System

A responsive full-stack User & Role Management System built using Spring Boot, JavaScript, Bootstrap, and H2 Database.

This project demonstrates role-based authentication, admin management features, dynamic frontend rendering, asynchronous API handling, and modern enterprise dashboard UI practices.

---

# Project Overview

The application provides:

- Secure Login System
- Role-Based Access Control
- Admin Dashboard
- User Dashboard
- User CRUD Operations
- Dynamic Data Rendering
- Session Management
- Responsive UI Design

The system supports two types of users:

## 1. ADMIN
Admins can:
- View all users
- Add new users
- Delete users
- Manage system roles
- Access admin dashboard

## 2. GENERAL_USER
General users can:
- Login securely
- View assigned records/resources
- Access personal dashboard

---

# Technologies Used

## Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- H2 Database
- Maven

## Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla JS)

---

# Key Features Implemented

## Authentication & Authorization
- Role-based login system
- SessionStorage-based authentication
- Route protection for unauthorized access
- Admin access restriction

## Admin Functionalities
- Add User
- Delete User
- Duplicate Username Validation
- Self-delete protection for admin
- Dynamic user table rendering

## User Dashboard
- Dynamic records table
- Access level display
- Empty state handling

---

# Future Enhancements

The following major improvements can be implemented in future versions:

## Security Improvements
- Spring Security Integration
- JWT Authentication & Authorization
- Password Encryption using BCrypt
- Role-based API security
- CSRF Protection

## Advanced Backend Features
- MySQL/PostgreSQL Integration
- Pagination & Sorting
- Search & Filter APIs
- Exception Handling using GlobalExceptionHandler
- DTO Layer Implementation
- Logging Framework Integration

## Advanced Frontend Features
- Angular Frontend Migration
- Reusable Components
- State Management
- Real-time Notifications
- Dashboard Analytics
- Dark/Light Theme Toggle

## Deployment Enhancements
- Docker Support
- CI/CD Pipeline
- Cloud Deployment (AWS / Render / Railway)

---

# Why Vanilla JavaScript Instead of Angular?

Currently, I am actively learning Angular and modern frontend architecture.

To focus on backend integration, API handling, and core frontend logic, this project frontend was implemented using Vanilla JavaScript along with Bootstrap.

In future iterations, the frontend can be fully migrated to Angular with component-based architecture and advanced state management.

---

# How To Run The Project

## Backend
1. Open backend project in STS/IntelliJ
2. Run:
   AssignmentBackendApplication.java
3. Backend starts on:
   http://localhost:8080

## Frontend
1. Open frontend project in VS Code
2. Open:
   login.html
3. Run using Live Server

---

# Project Structure

## Backend
- Controller Layer
- Service Layer
- Repository Layer
- Entity Layer

## Frontend
- Pages
- CSS
- JavaScript
- Assets

---

# Author

Deepanshu Kaushik

Aspiring Full Stack Java Developer currently focusing on:
- Spring Boot
- REST APIs
- JavaScript
- Angular
- Enterprise Application Development
