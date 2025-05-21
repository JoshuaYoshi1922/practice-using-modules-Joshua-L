const path = require('path');
const taskManager = require('./taskManager.cjs');
const fileHandler = require('./fileHandler.cjs')
const fs = require('fs');



const filepath = path.join(__dirname, 'task.json');


let allTasksArray = fileHandler.loadTask(filepath)
console.log(allTasksArray)

taskManager.addTask(allTasksArray, 'I chose you, Pikachu.');
taskManager.addTask(allTasksArray, 'I`m Batman.');
taskManager.addTask(allTasksArray, 'Thomas the Train.');

taskManager.listTasks(allTasksArray);

fileHandler.saveTasks(filepath, allTasksArray);





// let whatThe = ["batman", "thomas","pikachu"];
// whatThe.push('Switch')
// console.log(whatThe)