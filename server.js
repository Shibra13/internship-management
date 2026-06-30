const express = require("express");
const app = express();

app.use(express.json());


// middleware first
// global middleware
const logger = require("./src/middleware/logger.middleware");
app.use(logger);


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


// error middleware
const errorHandler = require("./src/middleware/error.middleware");
app.use(errorHandler);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});