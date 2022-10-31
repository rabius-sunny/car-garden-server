import { Router } from 'express'
import { getBrands, getCars } from '../controllers/suppliers.js'
import adminAuth from '../middlewares/adminAuth.js'

const supplierRouter = Router()

supplierRouter.get('/get-supplier-cars', adminAuth, getCars)
supplierRouter.get('/get-brands', getBrands)

export default supplierRouter
