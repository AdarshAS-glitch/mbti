import { useEffect, useState } from "react"

export default function Result(){
    const [result,setresult]=useState("")
    var details=""

   useEffect(()=>{
    const stored=localStorage.getItem("mbti_result");
    if(stored){
        setresult(JSON.parse(stored))
    }
   },[])
   if(result=="INFJ"){
    details="Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people and are insightful about others. Conscientious and committed to their firm values. Develop a clear vision about how best to serve the common good. Organized and decisive in implementing their vision.";
   }
   else if(result=="ENFP"){
    details="Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support. Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency."
   }
   else if(result=="INFP"){
    details="Idealistic, loyal to their values and to people who are important to them. Want to live a life that is congruent with their values. Curious, quick to see possibilities, can be catalysts for implementing ideas. Seek to understand people and to help them fulfill their potential. Adaptable, flexible, and accepting unless a value is threatened."
   }
   else if(result=="INTP"){
    details="Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. Have unusual ability to focus in depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical."
   }
   else if(result=="INTJ"){
    details="Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives. When committed, organize a job and carry it through. Skeptical and independent, have high standards of competence and performance—for themselves and others."
   }
   else if(result=="ENTJ"){
    details="Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. Enjoy long-term planning and goal setting. Usually well informed, well read, enjoy expanding their knowledge and passing it on to others. Forceful in presenting their ideas."
   }
   else if(result=="ENTP"){
    details="Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities and then analyzing them strategically. Good at reading other people. Bored by routine, will seldom do the same thing the same way, apt to turn to one new interest after another."
   }
   else if(result=="ENFJ"){
    details="Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential. May act as catalysts for individual and group growth. Loyal, responsive to praise and criticism. Sociable, facilitate others in a group, and provide inspiring leadership."
   }
   else if(result=="ISFP"){
    details="Quiet, friendly, sensitive, and kind. Enjoy the present moment, what's going on around them. Like to have their own space and to work within their own time frame. Loyal and committed to their values and to people who are important to them. Dislike disagreements and conflicts; don't force their opinions or values on others."
   }
   else if(result=="ISTP"){
    details="Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. Interested in cause and effect, organize facts using logical principles, value efficiency"
   }
   
   else if(result=="ESFP"){
    details="Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen. Bring common sense and a realistic approach to their work and make work fun. Flexible and spontaneous, adapt readily to new people and environments. Learn best by trying a new skill with other people."
   }
   else if(result=="ESTP"){
    details="Flexible and tolerant, take a pragmatic approach focused on immediate results. Bored by theories and conceptual explanations; want to act energetically to solve the problem. Focus on the here and now, spontaneous, enjoy each moment they can be active with others. Enjoy material comforts and style. Learn best through doing."
   }
   else if(result=="ISFJ"){
    details="Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their obligations. Thorough, painstaking, and accurate. Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel. Strive to create an orderly and harmonious environment at work and at home."
   }
   else if(result=="ISTJ"){
    details="Quiet, serious, earn success by being thorough and dependable. Practical, matter-of-fact, realistic, and responsible. Decide logically what should be done and work toward it steadily, regardless of distractions. Take pleasure in making everything orderly and organized—their work, their home, their life. Value traditions and loyalty."
   }
   
   else if(result=="ESFJ"){
    details="Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-to-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute."
   }
   else if(result=="ESTJ"){
    details="Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible. Take care of routine details. Have a clear set of logical standards, systematically follow them and want others to also. Forceful in implementing their plans."
   }

   return (
  <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-6">
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10 text-center">
      <h1 className="text-4xl font-bold text-indigo-700">
        Your MBTI Result: <span className="text-gray-800">{result}</span>
      </h1>
    </div>

    {/* Centered text with controlled width and even side margins */}
    <div className="max-w-screen-md mx-auto mt-6 px-4 text-center">
      <div className="flex justify-center flex-wrap text-lg font-medium text-gray-700">
        {details}
      </div>
    </div>
  </div>
);

}