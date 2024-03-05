const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const categorieRouter=require("./routes/categorie.route")
const articlesRouter=require("./routes/article.route")

const app=express()
app.use(express.json())
dotenv.config()

app.get("/",(req,res)=>{
    res.send("Hello World")
})

mongoose.connect(process.env.DATABASECLOUD)
.then(()=> console.log("Database Connected"))
.catch((err)=>{console.log("erreur de connexion a la base de donnes",err);
process.exit()
})
app.use("/api/categories",categorieRouter)
app.use("/api/articles",articlesRouter)

app.listen(process.env.PORT,()=>{
console.log(`Server Started on port ${process.env.PORT}`) })