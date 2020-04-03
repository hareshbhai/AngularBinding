import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.css']
})
export class IntroFormComponent implements OnInit {

  userName = '';
  disabledAddButton =true;
  constructor() { }

  ngOnInit() {
  }

  onUpdateSetUserName(event:Event){
    console.log("Inside onUpdateSetUserName");
    var user = (event.target as HTMLInputElement).value;
    if (user.length == 0) {
      this.disabledAddButton = true;
    }
    else {
      this.disabledAddButton = false;
    } 
    this.userName = user;   
  }

  onAddUserName(userName:string){
    console.log("Inside onAddUserName : " +userName);
    this.userName = userName;
  }

  onResetUserName(){
    console.log("Inside onResetUserName");
    this.userName = '';
  }
}
