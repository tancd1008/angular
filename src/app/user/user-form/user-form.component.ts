import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: {
    id: number,
    name: string,
    age: number,
    email: string,
    sdt: string,
    avatar: string
  };
  //1. Định nghĩa sự kiện để bắn dữ liệu ngược lại
  @Output() handleSubmit: EventEmitter<any>;
  constructor() {
    //2. Khai báo giá trị defaut
    this.handleSubmit = new EventEmitter;
    this.inputValues = {
      id: 0,
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatar: ''
    }
   }
  ngOnInit(): void {
  }
  
  onSubmit = (userForm: NgForm) => {
    
    //3. Gửi dữ liệu đi
    this.handleSubmit.emit(userForm.value)
    // Reset form
    userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatar: ''
    })
    
  }
 

  

}
