import { Router } from 'express'
import { getName } from '../controllers/user.js'
import auth from '../middlewares/auth.js'

const userRouter = Router()

userRouter.get('/get-name', auth, getName)

export default userRouter
