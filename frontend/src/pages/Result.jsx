import { useEffect, useState } from "react"

export default function Result(){
    const [result,setresult]=useState("")
   useEffect(()=>{
    const stored=localStorage.getItem("mbti_result");
    if(stored){
        setresult(JSON.parse(stored))
    }
   },[])
    return(
        <div>
            <h1>
                MBTI RESULT:
            </h1>
            {result}
        </div>
    )
}