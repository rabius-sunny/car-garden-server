import mongoose from 'mongoose'
const { Schema, model } = mongoose

const carSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    seats: {
      type: Number,
      required: true
    },
    largeBags: {
      type: Number,
      required: true
    },
    smallBags: {
      type: Number,
      required: true
    },
    doors: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    gear: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    charge: {
      type: Number,
      required: true
    },
    ac: {
      type: Boolean,
      required: true
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: 'supplier'
    }
  },
  { timestamps: true }
)

export default model('car', carSchema)
