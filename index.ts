import inquirer from 'inquirer'
type ansType={
userGuess:number
};
const systemGeneratedNo = Math.floor(Math.random()*10)
const answers:ansType=await inquirer.prompt([
    {
    type:"number",
    name:"userGuess",
    message:"Write your Guess, b/w 1 to 10:"
}
])
 const {userGuess}=answers;
    console.log("User Guess: ",userGuess, "SYS ramdum No." ,systemGeneratedNo)
 if(userGuess===systemGeneratedNo){
    console.log("Yes, your guess is correct \n you win!")
}else console.log("Please try again \n better luck next time!") 

