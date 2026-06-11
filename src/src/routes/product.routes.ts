import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Products API Working"
  });
});

export default router;
