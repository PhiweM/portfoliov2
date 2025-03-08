const mongoose = require("mongoose");

// Explicitly set the collection name to 'projects'
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  techStack: [{ type: String }],
  image: { type: String },
  projectLink: { type: String },
  gitHubLink: { type: String },
  status: { type: String, enum: ["completed", "in-progress"], default: "in-progress" },
  createdAt: { type: Date, default: Date.now }
});

// 🔥 Explicitly link to the 'projects' collection
module.exports = mongoose.model("Project", projectSchema, "projects");
