const express = require("express")
const router = express.Router()
const categorie = require('../models/categorie');

router.post("/", async(req, res) => {
    const { nomcategorie, imagecategorie } = req.body
    try {
        const cat1 = new Categorie({
            nomcategorie: nomcategorie,
            imagecategorie: imagecategorie
        })
        await cat1.save()
        res.status(200).json(cat1)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.get("/", async(req, res) => {
    try {
        const cat = await categorie.find();
        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
})
router.get("/:id", async(req, res) => {
    try {
        const cat = await categorie.findById(req.params.id);
        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 
)
router.delete('/:categorieId', async (req, res)=> {
    const id = req.params.categorieId;
await Categorie.findByIdAndDelete(id);
res.json({ message: "categorie deleted successfully." });
}
)
router.put("/:id", async (req,res)=>{
    try{
     const cat1 = await categorie.findByIdAndUpdate(
        {"id":req.params.id},
        {$set:req.body},
        {new:true}, 
     )
     res.status(200).json(cat1)
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})
module.exports = router