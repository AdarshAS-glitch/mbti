import { useEffect, useState } from "react";
import axios from "axios";
import Questioncard from "../components/Questioncard";
import { useNavigate } from "react-router";
export default function Testpage(){
    const[questions,setquestions]=useState([]);
    const [responses, setResponses] = useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3000/questions").then((res)=>{
            setquestions(res.data)
        })
    },[]);
 const handleresponse = (qid, response, trait) => {
  const updated = responses.filter(r => r.id !== qid);
  setResponses([...updated, { id: qid, response, mbti: trait }]);
};
    const handleSubmit = () => {
 
const formatted = Object.entries(responses).map(([qid, { response, mbti }]) => ({
  id: Number(qid),   // Include question ID
  mbti,
  response
}));
console.log(formatted)
    axios.post("http://localhost:3000/questions", formatted)
    .then((res)=>{
        localStorage.setItem("mbti_result",JSON.stringify(res.data));
        navigate('/result')

    })
}
return(
    <div>
        {
            questions.map((q)=>(<Questioncard
            key={q.id}
            question={q}
            onAnswer={(response)=>handleresponse(q.id,response,q.mbti)}
            ></Questioncard>
            ))
            
        }
        <button onClick={handleSubmit}>
            SUBMIT
        </button>
    </div>
)
}