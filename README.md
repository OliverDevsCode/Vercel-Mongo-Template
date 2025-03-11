# Backend API Documentation

This repository contains the backend API code for verifying game scores, leaderboard management, and user-related data.

> **Note:** All sensitive keys and secrets have been removed from the code. Be sure to configure environment variables before running the application.

---

## Table of Contents

- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Directory Structure](#directory-structure)
- [API Endpoints](#api-endpoints)
  - [GET `/api/verifyscore`](#get-apiverifyscore)
  - [GET `/api/getScore`](#get-apigetscore)
  - [GET `/api/leaderboard`](#get-apileaderboard)
  - [POST `/api/enterScore`](#post-apienterscore)
  - [POST `/api/verifyLeaderboard`](#post-apiverifyleaderboard)
  - [GET `/api/database`](#get-apidatabase)
  - [GET `/api/getUsername`](#get-apigetusername)
- [Database Models](#database-models)
  - [DatabaseEntry](#databaseentry)
  - [LeaderboardEntry](#leaderboardentry)
- [Notes](#notes)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-backend-repo.git
   ```

2. **Install dependencies:**
   ```bash
   cd your-backend-repo
   npm install
   ```

3. **Configure Environment Variables:**
   - Set up your MongoDB connection string and any necessary API keys in a `.env` file.

---

## Running the Server

Start the server with:
```bash
npm start
```

For development with live reload:
```bash
npm run dev
```

---

## Directory Structure

```
/backend-repo
├── routes/
│   ├── api.js       # API endpoint routes
├── models/
│   ├── database.js  # Database models
├── server.js        # Main server entry point
├── .env             # Environment variables
├── package.json     # Dependencies & scripts
└── README.md        # API Documentation
```

---

# API Endpoints

## GET `/api/verifyscore`

**Description:**
Verifies a game score by ensuring the provided score is valid.

**Query Parameters:**
- `score` (number): The game score.
- `completed` (string): Should be `"true"`.

**Example Request:**
```bash
curl "http://localhost:3000/api/verifyscore?score=100&completed=true"
```

**Successful Response (200):**
```json
{
  "message": "valid",
  "score": "100",
  "completed": true,
  "hashValue": "<hash of score>"
}
```

---

## GET `/api/getScore`

**Description:**
Retrieves the last stored game score for the session.
WARNING DEPRECIATED

**Example Request:**
```bash
curl "http://localhost:3000/api/getScore"
```

**Successful Response (200):**
```json
{
  "score": 100,
  "hashValue": "<hash of score>"
}
```

---

## GET `/api/leaderboard`

**Description:**
Retrieves the top 15 scores from the leaderboard.

**Example Request:**
```bash
curl "http://localhost:3000/api/leaderboard"
```

**Successful Response (200) (Only top 4 shown for readability):**
```json
{
  "data": [
    {
      "username": "Test Developer",
      "score": 100,
      "subject": "Physics",
      "createdAt": "2025-02-12T20:26:39.750Z"
    },
    {
      "username": "MidnightAdventure_",
      "score": 10,
      "subject": "Computer Science",
      "createdAt": "2025-02-12T20:41:34.332Z"
    },
    {
      "username": "EchoNebula_",
      "score": 10,
      "subject": "Business Studies A-LEVEL",
      "createdAt": "2025-02-15T13:07:50.202Z"
    },
    {
      "username": "JazzPirate_",
      "score": 10,
      "subject": "Business Studies A-LEVEL",
      "createdAt": "2025-02-15T13:09:22.163Z"
    }
  ]
}
```

> **Note:** The API returns the **top 15** scores, but only 4 are shown here for clarity.

---

## POST `/api/enterScore`

**Description:**
Submits a new score to the leaderboard.

**Example Request:**
```bash
curl -X POST "http://localhost:3000/api/enterScore" \
     -H "Content-Type: application/json" \
     -d '{"username": "TestUser", "score": 50, "subject": "Math"}'
```

**Successful Response (201):**
```json
{
  "message": "Score successfully submitted!"
}
```

---

## POST `/api/verifyLeaderboard`

**Description:**
Verifies the integrity of leaderboard scores.

**Example Request:**
```bash
curl -X POST "http://localhost:3000/api/verifyLeaderboard"
```

**Successful Response (200):**
```json
{
  "message": "Leaderboard verified successfully."
}
```

---

## GET `/api/database`

**Description:**
Returns raw database entries for debugging purposes.

**Example Request:**
```bash
curl "http://localhost:3000/api/database"
```

**Successful Response (200):**
```json
{
  "data": [ ... ]
}
```

---

## GET `/api/getUsername`

**Description:**
Retrieves the username from random username API and returns the name and hash.

**Example Request:**
```bash
curl "http://localhost:3000/api/getUsername"
```

**Successful Response (200):**
```json
{
  "username": "TestUser",
  "hashValue": "<hash of username>"
}
```

---



## Database Models

### `DatabaseEntry`
```json
{
  "username": "Player1",
  "score": 1500,
  "timestamp": "2024-02-15T12:00:00Z"
}
```

### `LeaderboardEntry`
```json
{
  "rank": 1,
  "username": "Player1",
  "score": 1500
}
```

---

## Notes
- Ensure all API requests include the necessary authentication if required.
- Hash verification is used to maintain data integrity.
- Leaderboard is updated dynamically based on new scores.

---

**Maintained by:** OliverDevsCode
**Last Updated:** February 2025

