console.clear();
import inquirer from "inquirer";

let eng = await inquirer.prompt([{
    name : "eng_num",
    type : "number",
    message : "Enter Your English Number :"}
]);
let urdu = await inquirer.prompt([{
    name : "urdu_num",
    type : "number",
    message : "Enter Your Urdu Number :"}
]);
let math = await inquirer.prompt([{
    name : "math_num",
    type : "number",
    message : "Enter Your Mathematics Number :"}
]);
let ps = await inquirer.prompt([{
    name : "ps_num",
    type : "number",
    message : "Enter Your Pakstudy Number :"}
]);
let chem = await inquirer.prompt([{
    name : "chem_num",
    type : "number",
    message : "Enter Your Chemistry Number :"}
]);

console.log("English marks = " + (eng.eng_num));
console.log("Urdu marks = " + (urdu.urdu_num));
console.log("Mathematics marks = " + (math.math_num));
console.log("PakStudy marks = " + (ps.ps_num));
console.log("Chemistry marks = " + (chem.chem_num));
let obtainMarks = eng.eng_num+urdu.urdu_num+math.math_num+ps.ps_num+chem.chem_num;
let total = 500;
let percentage = obtainMarks/total*100;
console.log("Total Marks = 500");
console.log("Obtained Marks = ",obtainMarks);
console.log("Percentage = ",percentage,"%");

if (percentage>=80&&percentage < 100) {
    console.log("Grade A+");
}else if(percentage>=70&&percentage < 80){
    console.log("Grade A");
}else if(percentage>=60&&percentage < 70){
    console.log("Grade B");
}else if(percentage>=50&&percentage < 60){
    console.log("Grade C");
}else if(percentage>=40&&percentage < 50){
    console.log("Grade D");
}else{
    console.log("Fail");
}