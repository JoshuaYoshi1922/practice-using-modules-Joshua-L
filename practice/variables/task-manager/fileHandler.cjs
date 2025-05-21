const fs = require("fs");

function saveTasks(filePath, tasksArray){
    let jsonTasks = JSON.stringify(tasksArray);
    fs.writeFileSync(filePath, jsonTasks);
    console.log('Saved')
}

function loadTask(filePath){
    if (fs.existsSync(filePath)){
        console.log('Exist');
        
        const jsonData = fs.readFileSync(filePath, 'utf-8')
        let jsData = JSON.parse(jsonData);
            return jsData;
    }
    else {
        return [];
    }
    
}

module.exports = { saveTasks, loadTask };