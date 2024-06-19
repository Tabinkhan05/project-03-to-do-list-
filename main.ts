import inquirer from "inquirer";

let todolist = [ ];
let conditions = true;
console.log("welcome to your to do list");

while(conditions){
let addtask = await inquirer.prompt([
    {
name : "task",
type : "input",
message : " enter new task :",
    }

]);
todolist.push(addtask.task);
console.log(`${addtask} task added in todolist succesfully`) ;
let addmoretask = await inquirer.prompt([
    {
        name : "addmore",
        type : "confirm",
        message : "do you want to add more task ",
        default : "false",

    }
]);
conditions = addmoretask.addmore
}
console.log(`your updated todo-list : ${todolist}`);





