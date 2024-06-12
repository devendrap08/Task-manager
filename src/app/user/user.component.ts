import { Component ,Input,signal,computed, input, Output, EventEmitter,output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { CardComponent } from '../shared/card/card.component';
//const selected = Math.floor(Math.random()*DUMMY_USERS.length)
const randomindex = Math.floor(Math.random()*DUMMY_USERS.length)

// type User=  {
//   id:string;
//   name:string;
//   avatar:string;
// }

// interface User {
//   id:string;
//   name:string;
//   avatar:string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required : true}) avatar!: string;
  // @Input({required: true}) name!: string;
  
  // avatar = input.required<string>()
  // name= input.required<string>()
  // @Input({required:true}) id!: string;

    @Input({required:true}) selected!:boolean;
  @Input({required :true}) user!:{      //User type and Interface can be used here instead of object type
    id:string;
    name:string;
    avatar:string;
  }

  //@Output() select = new EventEmitter<string >();      //output using decorator
  select = output<string>()                     //output using function

 
  imagepath=computed(()=>{
    return 'assets/users/'+this.user.avatar ;
  })



  // selecteduser = signal(DUMMY_USERS[randomindex]);
  // imagepath = computed(()=> 'assets/users/'+this.selecteduser().avatar)

  // selecteduser = DUMMY_USERS[selected]

  // get imagepath(){
  //   return 'assets/users/'+this.selecteduser.avatar;
  // }
  onselect(){
    this.select.emit(this.user.id);

    // const randomindex = Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selecteduser.set(DUMMY_USERS[randomindex]);
    //console.log('Clicked')
  }
}
