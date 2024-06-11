import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("desde api/veterinarios")
});

router.get("/login", (req, res) => {
  res.send("desde api/veterinarios/login")
})

export default router;