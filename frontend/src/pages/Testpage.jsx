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
return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-700 uppercase tracking-wide">
          MBTI Questions
        </h1>
      </div>

      <div className="space-y-6">
        {questions.map((q) => (
          <Questioncard
            key={q.id}
            question={q}
            onAnswer={(response) => handleresponse(q.id, response, q.mbti)}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);

}