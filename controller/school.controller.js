import db from "../config/mysql.connection.js";

export const addSchoolController = (req, res) => {

    const { name, address, latitude, longitude } = req.body;

    const query = `INSERT INTO school (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;

    db.query(query, [name, address, latitude, longitude], (error, result) => {
        if (error) {

            return res.status(500).json({ status: 500, message: error.cause || "insert failed", success: false, data: null, errors: error.cause || "insert failed" });
        }

        db.query(`SELECT * FROM school WHERE id = ?`, [result.insertId], (error, rows) => {
            if (error) return res.status(500).json({ status: 500, message: error.cause || "select failed", success: false, data: null, errors: error.cause || "select failed" });

            return res.status(201).json({ status: 201, message: "school created", success: true, data: rows[0] || {}, errors: null })
        })
    });
};

export const listSchoolController = (req, res) => {
    const { latitude, longitude } = req.query;

    // Selects all fields with distance and order by distance
    const query = `SELECT *, 
                            (6371 * ACOS(
                                COS(RADIANS(?)) * COS(RADIANS(latitude)) * COS(RADIANS(longitude) - RADIANS(?)) + 
                                SIN(RADIANS(?)) * SIN(RADIANS(latitude))
                            )) AS distance
                    FROM school
                    ORDER BY distance ASC;
                    `

    db.query(query, [latitude, longitude, latitude], (error, result) => {
        if (error) return res.status(500).json({ status: 500, message: "select failed", success: false, data: null, errors: error.cause || "select failed" });

        return res.status(200).json({ status: 200, message: "school found", success: true, data: result, errors: null })
    })
}