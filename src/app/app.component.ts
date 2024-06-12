
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headercomponent } from './header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [Headercomponent, RouterOutlet, UserComponent, TasksComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  selecteduserid ?:string;


  get selecteduser(){
    return this.users.find((user)=> user.id ===this.selecteduserid)!;
  }
  
  onselectuser(id:string){
    this.selecteduserid=id;
  }
  
}
