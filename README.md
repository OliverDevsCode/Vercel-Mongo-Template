# Backend API Documentation

This repository contains the backend API code for verifying game scores, leaderboard management, and user-related data.

> **Note:** All sensitive keys and secrets have been removed from the code. Be sure to configure environment variables before running the application.

---

## Table of Contents

- [Installation](#installation)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
  - [GET `/api/leaderboard`](#get-apileaderboard)
  - [POST `/api/enterScore`](#post-apienterscore)
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

# API Endpoints


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


## Database Models

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
- Leaderboard is updated dynamically based on new scores.

---

**Maintained by:** OliverDevsCode
**Last Updated:** February 2025

