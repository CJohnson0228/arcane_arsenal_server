import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'GET all characters' })
})

router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: 'GET a single character' })
})

router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'POST a new character' })
})

router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: 'DELETE a character' })
})

router.patch('/:id', (req: Request, res: Response) => {
  res.json({ message: 'UPDATE a character' })
})

export default router
