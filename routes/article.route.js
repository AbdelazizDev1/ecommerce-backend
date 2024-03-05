const express = require("express")
const router =express.Router()
const article = require("../models/article");
const article = require("../models/article");

router.post("/", async(req, res) => {
    const { reference, designation, prix, marque, qtestock, imageart, scategorieID } = req.body

    try {
        const newart = new article({
            reference: reference,
            designation: designation,
            prix: prix,
            marque: marque,
            qtestock: qtestock,
            imageart: imageart,
            scategorieID: scategorieID
        })
        await newart.save();
        res.status(200).json(newart)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.get("/", async(req, res) => {
    try {
        const arti = await arti.find();
        res.status(200).json(arti)
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
})
module.exports=router
