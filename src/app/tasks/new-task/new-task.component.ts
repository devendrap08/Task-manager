import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newtaskdata } from './new-task.model';
import { taskServie } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required:true}) userid!:string; 
  @Output() close = new EventEmitter<void>();
 // @Output() add = new EventEmitter<newtaskdata>();
  enteredtitle = '';
  enteredsummary = '';
  entereddate = '';
  private taskservice = inject(taskServie);

  oncancel() {
    this.close.emit();
  }
  onsubmit() {
    this.taskservice.addtask({
      title: this.enteredtitle,
      summary: this.enteredsummary,
      date: this.entereddate,
    },this.userid)
    this.close.emit();
    //....
    // this.add.emit({
    //   title: this.enteredtitle,
    //   summary: this.enteredsummary,
    //   date: this.entereddate,
    // });
  }
}
