import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUIDNARY_CLOUD_NAME, 
  api_key: process.env.CLOUIDNARY_API_KEY, 
  api_secret: process.env.CLOUIDNARY_API_SECRET
});

const uploadOnClouidanry = async (localfilePath) =>{
    try {
        if (!localfilePath) return null
        //upload the file on cloudinary 
 
         const response = cloudinary.uploader.upload(localfilePath,{
            resource_type: "auto"
         })
         // file has been uploaded 
         console.log("file is uploaded on cloudinary ",response.url);
         return response;


    } catch (error) {
      fs.unlinkSync(localfilePath)
      return null;
        
    }
}


export {uploadOnClouidanry}