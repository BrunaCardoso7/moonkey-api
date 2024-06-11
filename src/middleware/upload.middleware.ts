import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dcezopogd', 
  api_key: '554937882793472', 
  api_secret: 'ryTyn3wz0KxGrGQkuVehD5HMMIw' 
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => ({ 
        public_id: `uploads/${file.originalname}`, 
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
    })
});

const upload = multer({ storage: storage })

export default upload