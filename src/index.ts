import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { AppDataSource } from './app-data-source'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

AppDataSource.initialize()
    .then(() => {
        console.clear()
        console.log('****************************************')
        console.log('Sucesso ao conectar com a base de dados!')
        const app = express()
        const PORT = 3000

        app.use(express.json())
        app.use(morgan('dev'))
        app.use(cors())
        app.use('/api/v1/user', userRoutes)
        app.use('/api/v1/auth', authRoutes)

        app.get('/', (req, res) => {
            return res.json({message: "Seja bem vindo a nossa API!"})
        })

        app.listen(PORT, () => {
            console.log('API rodando em http://localhost:3000')
            console.log('****************************************')            
        })
    })
    .catch((err) => {
        console.log('Erro ao conectar com a base de dados! ' + err.message)
        console.log('****************************************')
    })


