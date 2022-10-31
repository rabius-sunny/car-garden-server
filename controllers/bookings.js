import bookingSchema from '../models/bookings.js'
import reviewSchema from '../models/review.js'

export const addBooking = async (req, res) => {
  const id = req.id
  try {
    const response = await bookingSchema.create({ ...req.body, user: id })
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}

export const getBooking = async (req, res) => {
  const id = req.id
  try {
    const response = await bookingSchema
      .find({ user: id }, { _id: 0, __v: 0 })
      .populate('car', '-supplier -_id -__v -createdAt -updatedAt')
    res.status(200).json({ response })
  } catch (error) {
    res.status(404).json({ error, message: error.message })
  }
}

export const makeReview = async (req, res) => {
  const id = req.id
  try {
    const response = await reviewSchema.create({ ...req.body, user: id })
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}
