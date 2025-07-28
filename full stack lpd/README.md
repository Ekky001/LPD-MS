# LPD Management System (PostgreSQL Deployment Ready)

This is a fullstack Node.js + Express backend with static frontend and PostgreSQL integration.

## Features
- User login and registration using PostgreSQL
- Disease and Vet listings using static data
- Frontend served from `public/index.html`

## PostgreSQL Setup
Create this table in your PostgreSQL database (e.g., Render):

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
```

## Deployment (Render)
- Push code to GitHub
- Create a new **Web Service** in [https://render.com](https://render.com)
- Set:
  - **Build Command:** `npm install`
  - **Start Command:** `npm start`
  - **Environment Variable:** `DATABASE_URL=your_postgres_connection_string`
