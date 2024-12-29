import express, { Request, Response } from 'express'

const router = express.Router()

// edit these for creating and login users
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: 'GET a user' })
})

router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'POST a new user' })
})

router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: 'DELETE a user' })
})

router.patch('/:id', (req: Request, res: Response) => {
  res.json({ message: 'UPDATE a user' })
})

export default router
