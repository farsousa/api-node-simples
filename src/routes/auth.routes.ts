import { Router } from 'express'
import { authenticate } from '../controllers/auth.controller'

const routes = Router()  

routes.post('/', authenticate)

export default routes