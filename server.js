const app=require('./app');
const  cloudinary = require('cloudinary');
const { connectDatabse } = require('./config/database');
connectDatabse();


cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
  
//Deployed Link  
// https://social-media-backend-leud.onrender.com/
// https://social-media-backend-leud.onrender.com/api/v1/me