import mysql from 'mysql2';
import { config } from 'dotenv';

config();

// Create DB connection
const db = mysql.createConnection({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
});

// Dummy data
const schools = [
    ['Green Valley School', '123 Main St, Springfield', 19.8765, 75.3456],
    ['Bluebell Academy', '45 Park Avenue, Shelbyville', 20.1234, 76.5432],
    ['Sunrise High', '789 River Rd, Ogdenville', 18.8764, 74.2134],
    [
        'Oceanview Elementary',
        '65 Seaside Blvd, North Haverbrook',
        21.4567,
        75.9999,
    ],
    ['Harmony Public School', '34 Harmony Ln, Capital City', 19.9876, 73.9876],
];

// Insert query
const insertQuery = `
  INSERT INTO school (name, address, latitude, longitude)
  VALUES ?
`;

// Deleted previous data if exist
db.query(`TRUNCATE school;`);

// Inser new data
db.query(insertQuery, [schools], (err, result) => {
    if (err) {
        console.error('Seeding error: ', err);
        return;
    }
    console.log(`Seeded ${result.affectedRows} schools successfully!`);
    db.end();
});
