# 🍃 MongoDB Lookup Playground

> A comprehensive collection of **30 real-world MongoDB `$lookup` aggregation scenarios** built with **Node.js, Express.js, and MongoDB**. This project demonstrates how MongoDB joins collections to generate business reports, analytics dashboards, and production-ready data pipelines.

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,javascript,vscode,git,github,postman" />
</p>

---

# 📌 Project Overview

MongoDB Lookup Playground is a practical backend project focused on mastering MongoDB's **`$lookup` aggregation stage**.

Unlike SQL databases that use JOIN operations, MongoDB uses **Aggregation Pipelines** with `$lookup` to combine data across multiple collections.

This project demonstrates **30 enterprise-level scenarios** commonly used in e-commerce, HR systems, blogging platforms, student management systems, inventory systems, and analytics dashboards.

---

# 🎯 Why This Project?

Modern applications often store related data in different collections.

Examples include:

- Users & Orders
- Products & Categories
- Students & Courses
- Employees & Departments
- Posts & Comments
- Vendors & Products

Retrieving meaningful reports requires joining this data efficiently.

This project shows how to build these reports using MongoDB's `$lookup` stage instead of SQL JOINs.

---

# ✨ Features

## 🔗 MongoDB Collection Joins

- One-to-One Relationships
- One-to-Many Relationships
- Multiple Collection Joins
- Nested Lookup Pipelines

---

## 📊 Business Analytics

Generate reports such as

- Customer Purchase Reports
- Employee Reports
- Department Analytics
- Product Reports
- Vendor Revenue Reports
- Inventory Reports
- Student Analytics
- Blogging Statistics

---

## 🚀 Dashboard Reports

Includes production-style dashboard queries like

- Total Revenue
- Top Customers
- Top Selling Products
- Monthly Sales
- Vendor Revenue
- Department Statistics

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### API Testing

- Postman

### Development Tools

- Git
- GitHub
- VS Code

---

# 📂 Project Structure

```text
MongoDBLookupPlayground
│
├── app
│   ├── config
│   │   └── db.js
│   │
│   ├── controller
│   │   ├── lookup.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware
│   │
│   ├── model
│   │   ├── user.db.js
│   │   ├── order.db.js
│   │   ├── product.db.js
│   │   ├── category.db.js
│   │   ├── department.db.js
│   │   ├── emp.db.js
│   │   ├── student.db.js
│   │   ├── course.db.js
│   │   ├── post.db.js
│   │   ├── comment.db.js
│   │   ├── vendor.db.js
│   │   ├── warehouse.db.js
│   │   ├── productVendor.db.js
│   │   ├── orderVendor.db.js
│   │   └── inventoryProduct.db.js
│   │
│   ├── routes
│   │   └── lookup.routes.js
│   │
│   └── utils
│       └── httpStatusCode.js
│
├── public
├── uploads
├── views
│
├── app.js
├── package.json
└── .env
```

---

# 📁 Folder Description

### 📂 config

Database configuration.

---

### 📂 controller

Contains all `$lookup` aggregation pipelines.

---

### 📂 model

Contains MongoDB schemas used across different scenarios.

---

### 📂 routes

REST API endpoints for all lookup queries.

---

### 📂 utils

Reusable helper utilities.

---

# 📚 Lookup Scenarios Covered

## 👤 User & Orders

- Show users with orders
- Users without orders
- Total purchase amount
- Top customers

---

## 👨‍💼 Employee & Department

- Employee with department
- Department-wise employee count
- Average salary
- Highest employee count

---

## 📦 Product Catalog

- Products with category
- Category statistics
- Product count
- Average product price

---

## 🛒 E-Commerce Sales

- Monthly revenue
- Monthly order count
- Highest revenue month
- Average order value

---

## 🎓 Student Management

- Students with courses
- Course-wise student count
- Maximum enrollments
- Average marks

---

## ✍ Blogging Platform

- Posts with authors
- Author statistics
- Comments per post

---

## 📦 Inventory Management

- Stock by category
- Warehouse analytics
- Lowest stock category

---

## 🏭 Multi-Lookup Production Cases

- Order Dashboard
- Vendor Sales Analysis
- Admin Analytics Dashboard

---

# 📋 Practice Summary

| Scenario | Questions |
|-----------|----------:|
| User & Orders | 4 |
| Employee & Department | 4 |
| Product Catalog | 4 |
| E-Commerce Sales | 4 |
| Student Management | 4 |
| Blogging System | 4 |
| Inventory Management | 3 |
| Multi-Lookup Production | 3 |

### ✅ Total Scenarios Implemented: **30**

---

# 🌐 API Modules

## CRUD APIs

- Users
- Products
- Orders
- Departments
- Students
- Courses
- Vendors
- Warehouses
- Blogs

---

## Lookup APIs

- User Reports
- Employee Reports
- Product Reports
- Sales Reports
- Student Reports
- Blogging Reports
- Inventory Reports
- Dashboard Analytics

---

# 💼 Skills Demonstrated

- MongoDB `$lookup`
- Multi-Collection Joins
- Aggregation Framework
- Business Analytics
- Dashboard Reporting
- REST API Development
- Express.js
- Mongoose
- MVC Architecture
- MongoDB Relationships

---

# 📖 Learning Outcomes

Building this project helped me understand:

- MongoDB `$lookup`
- Collection Relationships
- SQL JOIN vs MongoDB Lookup
- Multi-Level Aggregation
- Dashboard Analytics
- Enterprise Reporting
- Backend API Design

---

# 🚀 Future Improvements

- JWT Authentication
- Role-Based Access Control (RBAC)
- Search & Filtering
- Pagination
- Swagger Documentation
- Docker Deployment
- Unit Testing
- Redis Caching

---

# ▶ Installation

Clone the repository

```bash
git clone https://github.com/your-username/mongodb-lookup-playground.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Run the server

```bash
npm run dev
```

---

# 👨‍💻 Author

## Raktim Bhattacharya

Backend Developer

### 💻 Tech Stack

Node.js • Express.js • MongoDB • JavaScript • REST APIs

---

## ⭐ Support

If this project helped you understand MongoDB `$lookup` and aggregation pipelines, consider giving it a ⭐ Star on GitHub.
