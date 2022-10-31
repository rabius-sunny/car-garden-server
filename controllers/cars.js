import carModel from '../models/cars.js'

export const createCar = async (req, res) => {
  try {
    const {
      name,
      seats,
      largeBags,
      smallBags,
      doors,
      type,
      gear,
      image,
      charge,
      ac
    } = req.body
    const id = req.id
    const response = await carModel.create({
      name,
      seats,
      largeBags,
      smallBags,
      doors,
      type,
      gear,
      image,
      charge,
      ac,
      supplier: id
    })
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}

export const getCars = async (req, res) => {
  try {
    const response = await carModel
      .find(
        {},
        {
          createdAt: 0,
          updatedAt: 0,
          __v: 0
        }
      )
      .sort({ updatedAt: -1 })
      .populate('supplier', 'name -_id')
    res.status(200).json({ response })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}
export const getSingleCar = async (req, res) => {
  try {
    const response = await carModel
      .findById(req.params.id, {
        createdAt: 0,
        updatedAt: 0,
        __v: 0
      })
      .populate('supplier', 'name -_id')
    res.status(200).json({ response })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}
