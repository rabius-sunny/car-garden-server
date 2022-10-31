import { Router } from 'express'
import {
  createSupplier,
  createUser,
  getUser,
  loginSupplier,
  loginUser
} from '../controllers/auth.js'
import { createCar } from '../controllers/cars.js'
import adminAuth from '../middlewares/adminAuth.js'
import auth from '../middlewares/auth.js'

const router = Router()

router.post('/signup-supplier', createSupplier)
router.post('/login-supplier', loginSupplier)
router.post('/signup-user', createUser)
router.post('/login-user', loginUser)

router.get('/get-user', auth, getUser)

export default router
