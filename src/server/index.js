import dotenv from "dotenv"
dotenv.config()

import app from "./server.js"; 

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}).on('error', (e) => {
  console.error('Error starting server:', e);
});

