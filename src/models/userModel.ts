import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  displayName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  initials: { type: String, required: true },
  photoUrl: { type: String, required: false },
  email: { type: String, required: true },
  emailVerified: { type: Boolean, required: false },
  uid: { type: String, required: true },
})

export default mongoose.model('User', userSchema)
