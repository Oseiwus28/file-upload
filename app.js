const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: 'dhkukpljn', 
    api_key: '238547828597956', 
    api_secret: "dHA4ECKqYt1jy5BQhFoXLLZHK9c" 
  });

  const uploadImage = "./pic.jpg"
  const uploadFile = async()=>{
    try{
    const res = await cloudinary.uploader.upload(uploadImage)
    console.log(res);
  }catch(err){
    console.log(err)
}
  }
  
  uploadFile()