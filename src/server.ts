import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import characterRoutes from './routes/characters'
import userRoutes from './routes/user'

dotenv.config()

// express app
const app: Express = express()
const port = process.env.PORT || 3000

//middleware
app.use((req: Request, res: Response, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(cors())
app.use(cookieParser())
app.use(express.json())

//routes
app.use('/api/characters', characterRoutes)
app.use('/api/user', userRoutes)

// connect to db
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('connected to mongoDB Database')
      // listen for requests
      app.listen(port, () => {
        console.log(
          `Arcane Arsenal server is listening at http://localhost:${port}`
        )
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
