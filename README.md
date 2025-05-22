# School Management API

A Node.js + ExpressJs + MySQL based RESTful API to add and list schools based on their geolocation. The listing uses **Haversine formula** to sort schools by distance from a given latitude and longitude.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **express-validator**

---

## Features

- Add a school with name, address, latitude, and longitude.
- List all schools ordered by **proximity** to the user’s coordinates.
- Input validation using `express-validator`.
- Clean JSON responses with HTTP status codes.
- Modular project structure for scalability.

---

## Project Structure

```shell
├── config
│ └── mysql.connection.js
├── controller
│ └── school.controller.js
├── middlewares
│ └── validator.middleware.js
├── router
│ └── school.route.js
├── validators
│ ├── addschool.validator.js
│ └── listschool.validator.js
├── .env.sample
├── server.js
├── index.js
└── README.md
└── LICENSE
```

## 📄 API Endpoints

### 1. Add School

```http
POST /addSchool
```
```json
{
  "name": "Oxford International School",
  "address": "123 Park Avenue, NYC",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

### Validation
- Name: 3–200 chars, no special characters.

- Address: 10–150 chars, accepts common punctuation.

- Latitude: float between -90 and 90

- Longitude: float between -180 and 180

### 2. List Schools by Proximity

```http
GET /listSchool?latitude=40.7128&longitude=-74.0060
```
### Query Parameters

- `latitude`: required

- `longitude`: required

### Response
```json
{
    "status": 200,
    "message": "School found",
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Oxford International School",
            "address": "123 Park Avenue, NYC",
            "latitude": 40.7128,
            "longitude": -74.006,
            "distance": 0
        }
        ...
    ]
    "errors": null
},

```

## Setup Instructions

1. Clone the repo
    ```bash
    git clone https://github.com/IsmailBinMujeeb/school-management-api.git
    cd school-api
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Create .env file
    ```env
    PORT=3000
    MYSQL_DB_HOST=localhost
    MYSQL_DB_USER=root
    MYSQL_DB_PASSWORD=yourpassword
    MYSQL_DB_NAME=yourdbname
    MYSQL_DB_PORT=3306
    ```

4. Create MySQL table
    ```sql
    CREATE TABLE school (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    address VARCHAR(150),
    latitude FLOAT,
    longitude FLOAT
    );
    ```

5. Run the server
    ```bash
    npm run dev
    ```