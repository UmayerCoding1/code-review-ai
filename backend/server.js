import dotenv from 'dotenv';
dotenv.config({path: './.env'});
import { app } from "./src/app.js";

app.listen(3000, () => {
  console.log('Server running port 3000');
})


