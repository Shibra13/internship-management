const express = require("express");
const app = express();

app.use(express.json());

// Routes 
const studentRoutes = require("./src/routes/student.routes");
const courseRoutes = require("./src/routes/course.routes");
const trainerRoutes = require("./src/routes/trainer.routes");
const taskRoutes = require("./src/routes/task.routes");

// Register routes
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/tasks", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Server Running Successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});