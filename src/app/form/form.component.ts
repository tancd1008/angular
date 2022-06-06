import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'tuannda1',
      age: 30,
      email: 'tuannda1@gmail.com',
      sdt: "0346721947",
      avatar: 'https://picsum.photos/seed/picsum/50/50'
    },
    {
      id: 2,
      name: 'tuannda10',
      age: 30,
      email: 'tuannda10@gmail.com',
      sdt: "0346721947",
      avatar: 'https://picsum.photos/seed/picsum/50/50'
    }
  ];
  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: '',
    avatar: ''
  }

  onSubmit = (userForm: NgForm) => { // Nhận toàn bộ form
    // console.log(formData);
    // 1. Tìm ra id lớn nhất
    const userIds = this.users.map(user => user.id).sort((a,b) => a - b);
    const newId = userIds[userIds.length -1];
    // console.log(newId);
    
    // console.log(userIds);
    
    if(this.inputValues.id === 0) {
      //2.1 Thêm vào mảng
      this.users.push({
        ...userForm.value, // lấy ra object giá trị của form
        id: newId + 1
      });
      
    }else{
      //2.2 Sửa
      const idx = this.users.findIndex((user) => user.id == this.inputValues.id)
      
      if(idx >= 0){
        
        this.users[idx] = {
          ...userForm.value,
          id: this.inputValues.id
        }
        
      }
      
    }
    
    // 3. Cập nhật lại giá trị form ban đầu
    userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatar: ''
    })
    
  }
  onRemove = (userId: number) => {
    this.users = this.users.filter(user => user.id !== userId)
  }
  onEdit = (userId: number) => {
    const editUser = this.users.find(user => user.id === userId)
    console.log(editUser);
    if(editUser){
      this.inputValues = {...editUser}
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
