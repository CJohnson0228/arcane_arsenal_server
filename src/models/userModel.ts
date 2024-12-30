import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import validator from 'validator'

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    initials: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    statics: {
      async signup(
        displayName,
        firstName,
        lastName,
        initials,
        photoUrl,
        email,
        password
      ) {
        // validation
        if (
          !displayName ||
          !firstName ||
          !lastName ||
          !initials ||
          !email ||
          !password
        ) {
          throw Error('All fields are required')
        }
        if (!validator.isEmail(email)) {
          throw Error('E-mail is invalid')
        }
        if (!validator.isStrongPassword(password)) {
          throw Error('Password not strong enough')
        }
        const exists = await this.findOne({ email })
        if (exists) {
          throw Error('E-mail Already exists')
        }
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password, salt)
        const user = await this.create({
          displayName,
          firstName,
          lastName,
          initials,
          photoUrl,
          email,
          password: hash,
        })

        return user
      },
      async login(email, password) {
        if (!email || !password) {
          throw Error('All fields are required')
        }
        const user = await this.findOne({ email })
        if (!user) {
          throw Error('Incorrect e-mail')
        }
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
          throw Error('Incorrect password')
        }
        return user
      },
    },
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
