import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: '',
    avatar: ''
  };
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
  onParentSubmit(formData: any){
    console.log('Form data', formData);
    const userIds = this.users.map(user => user.id).sort((a,b) => a - b);
    const newId = userIds[userIds.length -1];
    
    if(this.formValues.id === 0){
      this.users.push({
        ...formData,
        id: newId +1
      })
    }else{
      const idx = this.users.findIndex((user) => user.id == this.formValues.id)
      
      if(idx >= 0){
        
        this.users[idx] = {
          ...formData,
          id: this.formValues.id
        }
        
      }
    }
    
  }
  onRemove(userId: number){
    const check = confirm("Bạn muốn xóa không!")
    if(check){
    this.users = this.users.filter(user => user.id !== userId)

    }

  }
  onEdit(userId: number){
    // 1. Tìm xem đâu là user được chỉnh sửa
    const editUser = this.users.find(user => user.id === userId);

    if (editUser) {
      return this.formValues = {...editUser};
    }

    return alert('Không tìm thấy user đó!');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
