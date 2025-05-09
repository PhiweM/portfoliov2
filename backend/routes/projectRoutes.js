import express from "express";
import Project from "../models/Project.js";


const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      console.error(" Error fetching projects from DB:", error);
      res.status(500).json({ message: error.message });
    }
  });
  
// Add a new project
router.post("/", async (req, res) => {
  const project = new Project(req.body);
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const projectRoutes = router;
export default projectRoutes;
