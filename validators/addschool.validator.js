import { body } from 'express-validator';

export default () => {
    return [
        body('name')
            .trim()
            .notEmpty()
            .withMessage('name is required')
            .matches(/^[A-Za-z0-9 .,'\-&()]+$/)
            .withMessage('name contains invalid characters')
            .isLength({ min: 3, max: 200 })
            .withMessage('name must be between 3 and 200 characters'),
        body('address')
            .trim()
            .notEmpty()
            .withMessage('Address is required')
            .matches(/^[A-Za-z0-9\s,'\-#.&()]+$/)
            .withMessage('Address contains invalid characters')
            .isLength({ min: 10, max: 150 })
            .withMessage('Address must be between 10 and 150 characters'),
        body('latitude')
            .notEmpty()
            .withMessage('latitude is required')
            .isFloat({ min: -90, max: 90 })
            .withMessage('latitude must be a float and between -90 and 90'),
        body('longitude')
            .notEmpty()
            .withMessage('longitude is required')
            .isFloat({ min: -180, max: 180 })
            .withMessage('longitude must be a float and between -180 and 180'),
    ];
};
