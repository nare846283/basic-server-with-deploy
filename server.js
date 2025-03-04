const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Default route
app.get("/", (req, res) => {
  res.send(`server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
