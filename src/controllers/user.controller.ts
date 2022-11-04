import { Request, Response } from 'express'
import { User } from '../entities/user.entity'

export async function createUser(request: Request, response: Response) {
    const { name, age, weight } = request.body
    
    const user = new User()
    user.name = name
    user.age = age
    user.weight = weight

    await user.save()

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
    const { id } = request.params
    const { name, age, weight } = request.body

    const user = await User.findOne({
        where: {
            id
        }
    })

    if (!user) return response.status(404).json()

    if (name) user.name = name
    if (age) user.age = age
    if (weight) user.weight = weight
    
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