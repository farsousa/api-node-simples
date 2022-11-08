import { Router } from 'express'
import { alterUser, createUser, deleteUser, getOneUser, getUsers } from '../controllers/user.controller'
import authMiddleware from '../middlewares/auth.middleware'

const routes = Router()  

routes.post('/', createUser)

routes.get('/', authMiddleware, getUsers)

routes.get('/:id', authMiddleware, getOneUser)

routes.patch('/:id', authMiddleware, alterUser)

routes.delete('/:id', authMiddleware, deleteUser)

export default routes