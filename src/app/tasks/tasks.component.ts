import { Component,Input } from '@angular/core';
import { Task } from 'zone.js/lib/zone-impl';
import { TaskComponent } from "./task/task.component";
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type newtaskdata } from './new-task/new-task.model';
import { taskServie } from './tasks.service';
@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required:true}) name!:string; 
  @Input({required:true}) userid!:string;
  isaddingtask = false; 
  // tasks=[
  //   {
  //     id:'t1',
  //     userId:'u1',
  //     title: 'Master Angular',
  //     summary: "Learn all the basic and advanced features of angular and how to apply them.",
  //     dueDate:'2024-06-15'
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary:
  //       'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   }
  // ];
  

  constructor(private taskservice: taskServie){}
  // ngOnInit(){
  //   const taskData = this.taskservie.getusertask(this.userid)
  //   console.log(taskData,'task');
    
  // }

  get selectedusertasks(){
    //return this.tasks.filter((task)=> task.userId ===this.userid)
    return this.taskservice.getusertask(this.userid);
  }
oncompletetask(id:string){
  //this.tasks=this.tasks.filter((task)=> task.id !==id);
  this.taskservice.removetask(id);
}
onaddtast(){
  this.isaddingtask=true;
}
oncloseaddtask(){
  this.isaddingtask = false;
}
onaddtask(taskdata: newtaskdata){
// console.log(taskdata,55);
//  this.tasks.push({
//   id: new Date().getTime().toString(),
//   userId:this.userid,
//   title:taskdata.title,
//   summary:taskdata.summary,
//   dueDate: taskdata.date
// })
// console.log( this.tasks,64);
  this.taskservice.addtask(taskdata,this.userid);
  this.isaddingtask=false;
}
}
