import express from 'express';

const router = express.Router();
// higher order function

// will call controller function
router.post('/create-academic-semester');

export const AcademicSemesterRoutes = router;
