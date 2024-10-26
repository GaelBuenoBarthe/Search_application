# Search Application

## Overview
This project is a search application that allows users to search for starships using the Star Wars API (SWAPI). The application consists of a frontend and a backend.

## Setup

### Clone the repository

-git clone https://github.com/GaelBuenoBarthe/Search_application.git

### Prerequisites
- Java 11 or higher
- Maven
- Node.js and npm
- MongoDB

### Backend Setup
1. Navigate to the `backend` directory:
   ```sh
   cd backend
    ```
### Install dependencies and build the project: 
   ```sh
   mvn clean install
   ```
### Run the application:
    ```sh
    mvn spring-boot:run
    ```
### Frontend Setup
1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
    ```
### Install dependencies:
    ```sh
    npm install
    ```
### Run the application:
    ```sh
    npm start
    ```
### Directory Structure
- `backend`: Contains the backend code.
```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── diginamic/
│   │   │       └── m052024/
│   │   │           └── search_application/
│   │   │               ├── controller/
│   │   │               ├── model/
│   │   │               ├── repository/
│   │   │               └── service/
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
│           └── diginamic/
│               └── m052024/
│                   └── search_application/
├── pom.xml
└── README.md
```
- `frontend`: Contains the frontend code.
```
frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api/
│   │   └── api.js
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Running the Project

1. Start the backend application.
2. Start the frontend application.
3. Open your browser and navigate to http://localhost:3000 for the frontend.
4. The backend can be accessed at http://localhost:8080.

## MongoDB Logging
All search requests are logged in a MongoDB database. Each search request is stored with the query, timestamp, and additional metadata.
