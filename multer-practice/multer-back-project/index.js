const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const PORT = 3000;

app.use(cors())
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        return cb(null,"./public/images");
    },
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({storage})

app.post("/upload",upload.single('file'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send({message:'successful adding'})
})

app.get("/files/:path",async(req,res)=>{
    const {path} = req.params;

   const file = await fs.readFileSync(`./public/images/${path}`)

    res.send(file);

})

app.listen(PORT, () => {
    console.log(`app listening on PORT:${PORT}`);
});