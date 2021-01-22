const task1 = {
    startedAt : new Date("2021-01-20:08:00"),

    finishedAt : new Date("2021-01-20:19:00"),

    totalTime : '',

    tasksGiven : 10,

    tasksFinished : 7,

    taskPercentage : '',

    topic : 'JAVASCRIPT'
    }
const task2 = {
    startedAt : new Date("2021-01-21:09:00"),
    
    finishedAt : new Date("2021-01-21:20:00"),
    
    totalTime : '',
    
    tasksGiven : 15,
    
    tasksFinished : 12,
    
    taskPercentage : Math.floor((this.tasksFinished/this.tasksGiven)*100),
    
    topic : 'GIT'
    }
const task3 = {
    startedAt : new Date("2021-01-22:10:00"),
    
    finishedAt : new Date("2021-01-22:19:00"),
    
    totalTime : '',
    
    tasksGiven : 9,
    
    tasksFinished : 7,
    
    taskPercentage : '',
    
    topic : 'JAVASCRIPT'
    }
const task4 = {
    startedAt : new Date("2021-01-23:08:00"),
    
    finishedAt : new Date("2021-01-23:09:00"),
    
    totalTime : '',
    
    tasksGiven : 10,
    
    tasksFinished : 5,
    
    taskPercentage : '',
    
    topic : 'CSS'
    }
const task5 = {
    startedAt : new Date("2021-01-24:13:00"),
    
    finishedAt : new Date("2021-01-24:19:00"),
    
    totalTime : '',
    
    tasksGiven : 20,
    
    tasksFinished : 15,
    
    taskPercentage : '',
    
    topic : 'JAVASCRIPT'
    }
const task6 = {
    startedAt : new Date("2021-01-25:12:00"),
    
    finishedAt : new Date("2021-01-25:15:00"),
    
    totalTime : '',
    
    tasksGiven : 16,
    
    tasksFinished : 7,
    
    taskPercentage : '',
    
    topic : 'PYTHON'
    }
const task7 = {
    startedAt : new Date("2021-01-26:13:00"),
    
    finishedAt : new Date("2021-01-26:17:00"),
    
    totalTime : '',
    
    tasksGiven : 18,
    
    tasksFinished : 17,
    
    taskPercentage : '',
    
    topic : 'CSS'
    }
const task8 = {
    startedAt : new Date("2021-01-27:09:00"),
    
    finishedAt : new Date("2021-01-27:20:00"),
    
    totalTime : '',
    
    tasksGiven : 16,
    
    tasksFinished : 16,
    
    taskPercentage : '',
    
    topic : 'FCC'
    }
const task9 = {
    startedAt : new Date("2021-01-28:09:00"),
    
    finishedAt : new Date("2021-01-28:10:00"),
    
    totalTime : '',
    
    tasksGiven : 8,
    
    tasksFinished : 7,
    
    taskPercentage : '',
    
    topic : 'FCC'
    }
const task10 = {
    startedAt : new Date("2021-01-29:10:00"),
    
    finishedAt : new Date("2021-01-29:15:00"),
    
    totalTime : '',
    
    tasksGiven : 10,
    
    tasksFinished : 9,
    
    taskPercentage : '',
    
    topic : 'GIT'
    }

const arrTask = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10];

const header = ['Started At', 'Finished At', 'Total Time Spent', 'Task Given', 'Task Finished', '%Task Finished', 'Topic'];
// doing some order in the total time, percentage,dates
for(let tasks of arrTask){
    tasks.totalTime = totalTime(tasks);
    tasks.taskPercentage = taskPercentage(tasks);
}
// clearing the dates
for(let tasks of arrTask){
    tasks.startedAt = clearHours(tasks.startedAt);
    tasks.finishedAt = clearHours(tasks.finishedAt);
}

// opening the table
document.write(`<table>`);

// printing the headers
document.write(`<tr>`);
for(let string of header){
  document.write(`<th>${string} </th>`);  
}
document.write(`</tr>`);

//printing the value of the tasks final with the functions
let tdClass;
let index = 0 ;
    for (let task of arrTask) {
    document.write(`<tr>`);
      for (const prop in task) {
          if(index === 2){
              tdClass = totalTimePaint(task[prop]);
          }
          if(index === 5){
              tdClass = tasksFinishedPercentPaint(task[prop]);
              document.write(`<td class="${tdClass}" >${task[prop]}%</td>`);
              tdClass = '';
          }
          else{
          document.write(`<td class="${tdClass}" >${task[prop]} </td>`);
          tdClass = '';
          }
          index++;
       }
    document.write(`</tr>`);
    index = 0;
    }
    
    document.write(`</table>`);

function totalTime(object){
    return (object.finishedAt.getHours()-object.startedAt.getHours());
}

function taskPercentage(object){ 
    return Math.floor((object.tasksFinished/object.tasksGiven)*100)
}

function clearHours(date){
    if ((date.getHours() < 10) && (date.getMinutes() < 10)) {
    return ("0"+date.getHours()+":"+"0"+date.getMinutes());
    } 
    else if(date.getHours() < 10){
        return ("0"+date.getHours()+":"+date.getMinutes())
    } 
    else if(date.getMinutes() < 10){
        return (date.getHours()+":"+"0"+date.getMinutes())
    }
    return (date.getHours()+":"+date.getMinutes());
}

function totalTimePaint(totalTime){
    if(totalTime <= 3){
        return 'greenTotal';
    }
    if(totalTime <= 6){
        return 'orangeTotal';
    }
    if(totalTime > 6){
        return 'redTime';
    }
}

function tasksFinishedPercentPaint(finishPercent){
    if(finishPercent <= 50){
        return 'lightGreen';
    }
    if(finishPercent > 50 && finishPercent <= 75 ){
        return 'green';
    }
    if(finishPercent > 75){
        return 'deepGreen';
    }
}
