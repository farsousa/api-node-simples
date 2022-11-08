import { Request, Response } from 'express'
import { User } from '../entities/user.entity'

export async function createUser(request: Request, response: Response) {
    const { email, password } = request.body
    
    const user = new User()
    user.email = email
    user.password = password
    user.hashPassword()

    try {
        await user.save()
    } catch(err) {
        return response.status(409).send()
    }

    return response.status(201).json(user)
}

export async function getUsers(request: Request, response: Response) {
    const users = await User.find()
    return response.json(users)
}

export async function getOneUser(request: Request, response: Response) {
    const { id } = request.params

    const user = await User.findOne({
        where: {
            id
        }
    })

    if (!user) return response.status(404).json()

    return response.json(user)
}

export async function alterUser(request: Request, response: Response) {
    const { email, password } = request.body
    const { id } = request.params

    const user = await User.findOne({
        where: {
            id
        }
    })

    if (!user) return response.status(404).json()

    user.updatedAt = new Date()
    if (email) user.email = email
    if (password) {
        user.password = password
        user.hashPassword()
    } 
    
    user.save()

    return response.json(user)
}

export async function deleteUser(request: Request, response: Response) {
    const { id } = request.params

    const user = await User.findOne({
        where: {
            id
        }
    })

    if (!user) return response.status(404).json()

    await user?.remove()
    return response.json()
}