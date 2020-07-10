import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

connectDb()

export default async (req,res)=> {
    const { name, email, password } = req.body
    try{
        //validate name(3-10 characters), email and password
        if(!isLength(name, { min:3, max: 10})) {
            return res.status(422).send("Name must be 3-10 characters long")
        }else if(!isLength(password, { min:6 , max:15 })) {
            return res.status(522).send("Password length should be between 6-15 characters")
        }else if(!isEmail(email)) {
            return res.status(422).send("Email must be valid")
        }

        //check if user already exists
        const user = await User.findOne({ email })
        if(user) {
            return res.status(422).send(`user already exists with email ${email}`)
        }
        //if not- hash password
        const hash = await bcrypt.hash(password, 10)
        //create user
        const newUser = await new User({
            name,
            email,
            password: hash
        }).save()
        //console.log({newUser})
        //create token for new user
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })
        //send back token
        res.status(201).json(token)
    }catch (error) {
        console.error(error)
        res.status(500).send("Error in signing up. Please try again")
    }
}