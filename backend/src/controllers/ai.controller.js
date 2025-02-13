import { generateContent } from "../services/ai.service.js";

const getReview = async (req,res) => {
   try {
    const code = req.body.code;
  console.log(code);
    if (!code) {
      return res.status(400).send('Prompt is requried');
    }
 
    const response = await generateContent(code);
   console.log(response);
    res.send(response);
   } catch (error) {
    console.log(error);
   }
}


export {
  getReview
}