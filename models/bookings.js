import mongoose from 'mongoose'
const { Schema, model } = mongoose

const bookingSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  cardHolderName: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  cvc: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  expiryDate: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  flightNumber: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  fromdate: {
    type: String,
    required: true
  },
  todate: {
    type: String,
    required: true
  },
  picuptime: {
    type: String,
    required: true
  },
  dropofftime: {
    type: String,
    required: true
  },
  days: {
    type: String,
    required: true
  },
  cover: {
    type: Boolean,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  car: {
    type: Schema.Types.ObjectId,
    ref: 'car'
  }
})

export default model('booking', bookingSchema)
