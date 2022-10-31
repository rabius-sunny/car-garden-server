import cars from '../models/cars.js'
import suppliers from '../models/suppliers.js'

export const getCars = async (req, res) => {
  const id = req.id
  try {
    const response = await cars.find({ supplier: id }, { __v: 0, updatedAt: 0 })
    res.status(200).json({ response })
  } catch (error) {
    res.status(404).json({ error, message: error.message })
  }
}

export const getBrands = async (req, res) => {
  try {
    const response = await suppliers.find({}, { brand: 1, _id: 0 })
    res.status(200).json({ response })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}
