import Profile from '../../models/Profile'
import connectDb from '../../utils/connectDb'

connectDb();

export default async (req,res)=>{
    switch(req.method) {
        case "GET":
            await handleGetRequest(req,res)
            break;
        case "POST":
            await handlePostRequest(req,res)
            break;
        case "DELETE":
            await handleDeleteRequest(req,res)
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

async function handleGetRequest(req,res) {
    const { _id } = req.query
    const profile = await Profile.findOne({ _id})
    res.status(200).json(profile)
}

async function handleDeleteRequest(req,res) {
    const { _id } = req.query
    await Profile.findOneAndDelete({_id})
    res.status(204).json({});
}

async function handlePostRequest(req,res) {
    const { name, age, description, mediaUrl} = req.body
    try{
        if(!name || !age || !description|| !mediaUrl){
            return res.status(422).send('Data missing in one or more fields')
        }
        const profile = await new Profile({
            name,
            age,
            description,
            mediaUrl
        }).save()
        res.status(201).json(profile)
    }catch(error){
        console.error(error)
        res.status(500).send("Server error in creating profile")
    }
}