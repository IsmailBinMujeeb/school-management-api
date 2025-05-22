import { Router } from 'express';
import validatorMiddleware from '../middlewares/validator.middleware.js';
import addSchoolValidator from '../validators/addschool.validator.js';
import listSchoolValidator from '../validators/listschool.validator.js';
import {
    addSchoolController,
    listSchoolController,
} from '../controller/school.controller.js';

const router = Router();

router.get(
    '/listSchool',
    listSchoolValidator(),
    validatorMiddleware,
    listSchoolController,
);
router.post(
    '/addSchool',
    addSchoolValidator(),
    validatorMiddleware,
    addSchoolController,
);

export default router;
