import userModel from '../models/user.js'

export const getName = async (req, res) => {
  const id = req.id
  try {
    const response = await userModel.findById(id, { password: 0 })
    res.status(200).json({ response })
  } catch (error) {
    res.status(404).json({ error, message: error.message })
  }
}
