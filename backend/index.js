const axios=require("axios")
const cors=require("cors")
const z=require("zod")
const jwt=require("jsonwebtoken")
const express=require("express")
const {PrismaClient} =require("@prisma/client")
const questions=require("./questions.json")
const app=express()
const prisma=new PrismaClient()
const {computepersonality}=require('./compute')
app.use(cors())
app.use(express.json())


app.get('/questions',async (req,res)=>{
try{
const questions=await prisma.question.findMany();
const shuffled=questions.sort(()=>0.5-Math.random())   
const qstns=shuffled.slice(0,50) 
res.json(qstns)
}catch(err){
    console.error("❌ Error fetching questions:", err);
    res.status(500).json({ error: "Something went wrong" });
}

})
app.post('/questions',async (req,res)=>{
    const answers=req.body;
    const counts={
        "E":0,"F":0,
        "I":0,"T":0,
        "N":0,"P":0,
        "S":0,"J":0

    }
    for(const q of answers){
        const trait=q.mbti;
        const response=q.response;
        counts[trait]=counts[trait]+response;
    }
   const personality= computepersonality(counts);
res.json(personality)

})


app.listen(3000,()=>{
    console.log("server running...")
})