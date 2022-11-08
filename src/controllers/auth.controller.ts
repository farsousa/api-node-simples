import { Request, Response } from 'express'
import { User } from '../entities/user.entity'
import bcript from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function authenticate(request: Request, response: Response) {

    const { email, password } = request.body

    const user = await User.findOne({
        where: {
            email
        }
    })

    if (!user) return response.sendStatus(401)

    const isValidPassword = await bcript.compare(password, user.password)

    if (!isValidPassword) return response.sendStatus(401)

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' } )

    response.json({ token })

}