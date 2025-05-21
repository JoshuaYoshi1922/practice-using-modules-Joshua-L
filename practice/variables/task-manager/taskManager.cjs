

function addTask(tasks, task){
    tasks.push(task);
    console.log(`The "${task}" added.`)
}

function listTasks(tasks){
    console.log("\n THE CURRENT TASK!");
    tasks.forEach((task, index) => console.log(`${index + 1}, ${task}`));
}

module.exports = { addTask, listTasks };