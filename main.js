"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todolist = [];
var conditions = true;
console.log("welcome to your to do list");
while (conditions) {
    var addtask = await inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: " enter new task :",
        }
    ]);
    todolist.push(addtask.task);
    console.log("".concat(addtask, " task added in todolist succesfully"));
    var addmoretask = await inquirer_1.default.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more task ",
            default: "false",
        }
    ]);
    conditions = addmoretask.addmore;
}
console.log("your updated todo-list : ".concat(todolist));
