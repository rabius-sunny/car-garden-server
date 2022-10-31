import { Router } from 'express'
import { addBooking, getBooking, makeReview } from '../controllers/bookings.js'
import auth from '../middlewares/auth.js'

const bookingRouter = Router()

bookingRouter.route('/booking').post(auth, addBooking).get(auth, getBooking)
bookingRouter.route('/review').post(auth, makeReview).get(auth)

export default bookingRouter
