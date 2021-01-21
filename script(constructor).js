const task1 = new task(new Date("2021-01-20:08:00"), new Date("2021-01-20:19:00"), 10, 7, 'javaScript');
const task2 = new task(new Date("2021-01-21:09:00"), new Date("2021-01-21:20:00"), 15, 12, 'CSS');
const task3 = new task(new Date("2021-01-22:10:00"), new Date("2021-01-22:19:00"), 9, 7, 'javaScript');
const task4 = new task(new Date("2021-01-23:08:00"), new Date("2021-01-23:20:00"), 10, 5, 'CSS');
const task5 = new task(new Date("2021-01-24:11:00"), new Date("2021-01-24:19:00"), 20, 15, 'javaScript');
const task6 = new task(new Date("2021-01-25:12:00"), new Date("2021-01-25:20:00"), 16, 7, 'CSS');
const task7 = new task(new Date("2021-01-26:13:00"), new Date("2021-01-26:19:00"), 18, 17, 'CSS');
const task8 = new task(new Date("2021-01-27:09:00"), new Date("2021-01-27:20:00"), 16, 16, 'javaScript');
const task9 = new task(new Date("2021-01-28:09:00"), new Date("2021-01-28:19:00"), 8, 7, 'javaScript');
const task10 = new task(new Date("2021-01-29:10:00"), new Date("2021-01-29:19:00"), 10, 9, 'javaScript');

const header = ['Started At', 'Finished At', 'Total Time Spent', 'Task Given', 'Task Finished', '% Task Finished', 'Topic']

function task extend Object(startedAt, finishedAt, tasksGiven, tasksFinished, topic) {
    
    this.startedAt = function(){
        if(startedAt.getHours() < 10 && startedAt.getMinutes() < 10)
        this.startedAt = ("0"+startedAt.getHours()+":"+"0"+startedAt.getMinutes());
    };
    
    this.finishedAt = finishedAt;
    
    this.totalTime = (finishedAt.getHours()-startedAt.getHours());

    this.tasksGiven = tasksGiven;
    
    this.tasksFinished = tasksFinished;
    
    this.taskPercentage = Math.floor((this.tasksFinished/this.tasksGiven)*100);
    
    this.topic = topic;
    
}

console.log(task1)
const arrTask = [task1, task2, task3, task4, task3, task4, task5, task6, task7, task8, task9, task10];
console.log(header);
console.log(arrTask)
// ===================================//
// the html
document.write(`<table>`);
document.write(`<tr>`);
for(let string of header){
  document.write(`<th>${string} </th>`);  
document.write(`</tr>`);
}

    for (let task of arrTask) {
    //   document.write(`<th>${task}</th>`);
    document.write(`<tr>`);
      for (const prop in tasks) {
        document.write(`<th>${prop} </th>`);
    }
    document.write(`</tr>`);
    }
    
    document.write(`</table>`);
