import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Character from '../models/characterModel'

// get all user characters
const getAllUserCharacters = async (req: Request, res: Response) => {
  const { id } = req.params
  Character.find({ playerID: id })
    .sort({ createdAt: -1 })
    .then((characters) => {
      if (characters) {
        res.status(200).json(characters)
      }
    })
}

// get a single character
const getCharacter = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'invalid ID' })
    return
  }

  Character.findById(id)
    .then((character) => {
      if (character === null) {
        res.status(404).json({ error: 'No such character exists' })
      } else {
        res.status(200).json(character)
      }
    })
    .catch((error) => {
      res.status(404).json(error.message)
    })
}

// create a character
const createCharacter = async (req: Request, res: Response) => {
  Character.create(req.body)
    .then((character) => {
      if (character) {
        res.status(200).json(character)
      }
    })
    .catch((error) => {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      } else {
        res.status(400).json({ error: 'An unknown error occurred' })
      }
    })
}

// delete a character
const deleteCharacter = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'invalid ID' })
    return
  }

  Character.findOneAndDelete({ _id: id })
    .then((character) => {
      if (character === null) {
        res.status(404).json({ error: 'No such character exists' })
      } else {
        res.status(200).json(character)
      }
    })
    .catch((error) => {
      res.status(404).json(error.message)
    })
}

// update a character
const updateCharacter = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'invalid ID' })
    return
  }

  Character.findOneAndUpdate({ _id: id }, { ...req.body })
    .then((character) => {
      if (character === null) {
        res.status(404).json({ error: 'No such character exists' })
      } else {
        res.status(200).json(character)
      }
    })
    .catch((error) => {
      res.status(404).json(error.message)
    })
}

export {
  createCharacter,
  deleteCharacter,
  getAllUserCharacters,
  getCharacter,
  updateCharacter,
}
