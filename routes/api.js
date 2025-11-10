const router = require("express").Router();

// Ping API
router.get("/ping", (req, res) => {
  const now = new Date();
  res.json({
    message: "API is working 🚀",
    time: now.toISOString(),
  });
});

module.exports = router;
