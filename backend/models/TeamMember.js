import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  path: String,
});

export default mongoose.model("TeamMember", teamMemberSchema);
