# Express MongoDB Starter

A simple Express.js backend with MongoDB (Mongoose) for user authentication.

## Features

- Express.js REST API
- MongoDB with Mongoose
- User registration with password hashing (bcrypt)
- CORS enabled
- Environment variables with dotenv

## Prerequisites

- Node.js (v14+)
- MongoDB instance (local or MongoDB Atlas)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sreenidhi-km/express-mongo-starter.git
cd express-mongo-starter
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the server:
```bash
npm start
```

## API Endpoints

| Method | Endpoint    | Description              |
|--------|-------------|--------------------------|
| GET    | `/`         | Server health check      |
| GET    | `/health`   | Database connection status |
| POST   | `/register` | Register a new user      |

## Project Structure

```
├── models/
│   └── User.js       # User model with password hashing
├── server.js         # Main application entry point
├── package.json      # Project dependencies
└── .env              # Environment variables (not tracked)
```

## License

ISC
