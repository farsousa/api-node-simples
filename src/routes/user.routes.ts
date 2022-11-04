import { Router, Request, Response } from 'express'
import { alterUser, createUser, deleteUser, getOneUser, getUsers } from '../controllers/user.controller'

const routes = Router()  

routes.post('/user', createUser)

routes.get('/user', getUsers)

routes.get('/user/:id', getOneUser)

routes.patch('/user/:id', alterUser)

routes.delete('/user/:id', deleteUser)

export default routes