import Profile from "../../models/Profile";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json(profiles);
};
