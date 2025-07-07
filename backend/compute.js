function computepersonality(counts){
const energy=counts.I-counts.E;
const percieve=counts.N-counts.S;
const judgement=counts.F-counts.T;
const type=counts.J-counts.P;
let persona=""
if(energy<0){
persona=persona+"E";
}
else{
    persona=persona+"I"
}
if(percieve<0){
persona=persona+"S";
}
else{
    persona=persona+"N"
}
if(judgement<0){
persona=persona+"T";
}
else{
    persona=persona+"F"
}
if(type<0){
persona=persona+"P";
}
else{
    persona=persona+"J"
}
return persona
}
module.exports={computepersonality}