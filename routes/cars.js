import { Router } from 'express'

import { createCar, getCars, getSingleCar } from '../controllers/cars.js'
import adminAuth from '../middlewares/adminAuth.js'

const router = Router()

router.route('/cars').get(getCars).post(adminAuth, createCar)
router.route('/car/:id').get(getSingleCar)

export default router
