import { query } from "express-validator";

export default () => {
    return [
        query("latitude").notEmpty().withMessage("latitude is required").isFloat({ min: -90, max: 90 }).withMessage("latitude must be a float and between -90 and 90"),
        query("longitude").notEmpty().withMessage("longitude is required").isFloat({ min: -180, max: 180 }).withMessage("longitude must be a float and between -180 and 180"),
    ]
}