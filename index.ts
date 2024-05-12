#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

//making a variable to save our list
let todos = [];

//condition to run loop
let condition = true

//we'll add loop, so that users can add more than 1 item
while(condition){

//asking user to addItems in todos
let askToAdd = await inquirer.prompt([
    {
        name: "items",
        type: "input",
        message: "Please enter item to add in the list",
        validate: function(value) {
            if(value.trim() !== "") {return true}
            }
    },
    //now we'll make an object which will ask whether to add more items or not
    {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more items?",
        default: "true"
    }
]);

//we'll put all the entered items in our variable, which we made earlier
todos.push(askToAdd.items);

//we'll hook the loop to the user's answer when we ask to addMore
condition = askToAdd.addMore;

//we'll print the items as they added
console.log(chalk.green.bold(todos));
}