function task(startedAt, finishedAt, tasksGiven, tasksFinished, topic) {
    this.startedAt = startedAt;
    
    this.finishedAt = finishedAt;
    
    this.tasksGiven = tasksGiven;
    
    this.tasksFinished = tasksFinished;
    
    this.topic = topic;
}

//The total time the task took 
function totalTime(start, finish){
    return totalTime = start.getHours() - finish.getHours();
}

 //Percentage of tasks finished
function tasksFinishedPercentage(numGiven, numDone){
    return tasksFinishedPercentage = Math.floor((numDone/numGiven)*100);
}

const task1 = new task(new Date("2021-01-20:13:00"), new Date("2021-01-20:19:00"), 10, 7, 'javaScript');
const task2 = new task(new Date("2021-01-21:13:00"), new Date("2021-01-21:19:00"), 15, 12, 'javaScript');
const task3 = new task(new Date("2021-01-22:13:00"), new Date("2021-01-22:19:00"), 9, 7, 'javaScript');
const task4 = new task(new Date("2021-01-23:13:00"), new Date("2021-01-23:19:00"), 13, 5, 'javaScript');
const task5 = new task(new Date("2021-01-24:13:00"), new Date("2021-01-24:19:00"), 20, 15, 'javaScript');
const task6 = new task(new Date("2021-01-25:13:00"), new Date("2021-01-25:19:00"), 16, 7, 'javaScript');
const task7 = new task(new Date("2021-01-26:13:00"), new Date("2021-01-26:19:00"), 18, 17, 'javaScript');
const task8 = new task(new Date("2021-01-27:13:00"), new Date("2021-01-27:19:00"), 16, 16, 'javaScript');
const task9 = new task(new Date("2021-01-28:13:00"), new Date("2021-01-28:19:00"), 8, 7, 'javaScript');
const task10 = new task(new Date("2021-01-29:13:00"), new Date("2021-01-29:19:00"), 10, 9, 'javaScript');

const arrTask = [task1, task2, task3, task4, task3, task4, task5, task6, task7, task8, task9, task10];

//=============================================================//
// the html

document.write("<hr/>");
document.write("<table>");
for(let i=0; i<arrTask.length; i++){
    document.write("<tr>");
}
