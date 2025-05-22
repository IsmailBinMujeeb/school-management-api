import { validationResult } from 'express-validator';

export default (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const extractedErrors = [];
            errors
                .array()
                .map((e) => extractedErrors.push({ [e.path]: e.msg }));

            return res.status(422).json({
                status: 422,
                message: 'Unprocessable entities',
                success: false,
                data: null,
                errors: extractedErrors,
            });
        }

        next();
    } catch (error) {
        return res.status(error.status || 500).json({
            status: error.status || 500,
            message: error.message || 'Internal server error',
            success: false,
            data: null,
            errors: error,
        });
    }
};
