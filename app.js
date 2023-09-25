// install the cloudinary package
// require the cloudinary version 2 and configure 
const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: 'dhkukpljn', 
    api_key: '238547828597956', 
    api_secret: "dHA4ECKqYt1jy5BQhFoXLLZHK9c" 
  });

  // create a variablle to hold the file(s) to be uploaded
  const uploadImage = "./pic.jpg"

  // create the asynchronous Function to upload file
  const uploadFile = async()=>{
    try{
    const res = await cloudinary.uploader.upload(uploadImage)
    console.log(res);
  }catch(err){
    console.log(err)
}
  }
  
// call the function
  uploadFile()