import { Injectable } from "@angular/core";
import { type newtaskdata } from "./new-task/new-task.model";
@Injectable({providedIn:'root'})
export class taskServie{
    private tasks=[
        {
          id:'t1',
          userId:'u1',
          title: 'Master Angular',
          summary: "Learn all the basic and advanced features of angular and how to apply them.",
          dueDate:'2024-06-15'
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        }
      ];
       
      constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }
      getusertask(userid: string){
        return this.tasks.filter((task)=> task.userId ===userid)
      }
      addtask(taskdata: newtaskdata, userid: string){
        console.log(taskdata,55);
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId:userid,
            title:taskdata.title,
            summary:taskdata.summary,
            dueDate: taskdata.date
          })
          console.log( this.tasks,64);
          this.savetask();
        }
      removetask(id: string){
        this.tasks=this.tasks.filter((task)=> task.id !==id)
        this.savetask();
      }
      private savetask(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
      }
}