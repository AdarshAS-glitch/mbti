import { useEffect, useState } from "react";
import {descriptions,title} from "../data/data";

export default function Result() {
  const [result, setResult] = useState("");
  const [details, setDetails] = useState("");
  const [name,setName]=useState("")

  useEffect(() => {
    const stored = localStorage.getItem("mbti_result");
    if (stored) {
      const parsed = JSON.parse(stored);
      setResult(parsed);
      setDetails(descriptions[parsed] || "No description found.");
      setName(title[parsed] || "No name found.")
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10 text-center">
        <h1 className="text-4xl font-bold text-indigo-700">
          Your MBTI Result: <span className="text-gray-800">{result}</span>
        </h1>
      </div>

      <div className="max-w-screen-md mx-auto mt-6 px-4 text-center">
        <h1>
          <p className="text-3xl font-bold">
          {name}
          </p>
        </h1>
        <div className="flex justify-center flex-wrap mt-8 text-lg font-medium text-gray-700">
          {details}
        </div>
      </div>
    </div>
  );
}
