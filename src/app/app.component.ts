import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304';
  // Phần logic, định nghĩa giá trị biến sử dụng ở html
  name = 'Tancd';
  // Kiểu dữ liệu mảng
  students = [

    {
      id: "Ph1",
      name: "Tan",
      status: 0
    },
    {
      id: "Ph2",
      name: "Tan2",
      status: 1
    }
  ];
  teachers = [
    {
      id: 1,
      name: "tuandna1",
      age: 27,
      gender: 1,
      avatar: "https://picsum.photos/seed/picsum/50/50" ,
      status: 0
    },
    {
      id: 2,
      name: "tuandna2",
      age: 31,
      gender: 1,
      avatar: "https://picsum.photos/seed/picsum/50/50" ,
      status: 0
    },
    {
      id: 3,
      name: "tuandna3",
      age: 27,
      gender: 0,
      avatar: "https://picsum.photos/seed/picsum/50/50" ,
      status: 1
    }
  ]
  schoolName = '';
  // Định nghĩa hàm khi click vào thẻ H1
  clickH1 = () => {
    console.log("Da click vao H1");
    this.schoolName = 'Poly'
  }
  // Định nghĩa hàm khi click ẩn hiện
  showStatus = true;
  changeTableStatus = () => {
    this.showStatus = !this.showStatus;
  }
  // Định nghĩa hàm khi thay đổi nội dung input
  inputValue = 'tancd1008';
  changeInput = (event : any) => {
    this.inputValue = event.target.value;    
  }
  // Định nghĩa để nhận giá trị form
  inputValues = {
    name: '',
    age: '',
    gender: '0',
    avatar: '',
    status: '0'
  }
  
  // onInputName = (event: any, info: string) => {
  //   // console.log(info,event.target.value);
  //   this.inputValues.name = event.target.value;
    
  // }
  // onInputAge = (event : any, info: string) => {
  //   // console.log(info,event.target.value);
  //   this.inputValues.age = event.target.value;
  // }
  // key: 'name'|'age' => key chỉ có giá trị 'name' hoặc 'age'
  onInput = (event: any,key: 'name'|'age'|'gender'|'avatar'|'status') => {
    this.inputValues[key] = event.target.value;
  }
  // sự kiện click vào nút submit
  onSubmit() {
    console.log(this.inputValues);
    // Thêm dữ liệu vào mảng teachers
    // this.teachers.push({
    //   ...this.inputValues,
    //   age:+this.inputValues.age,
    //   id:this.teachers.length + 1
    // })

    this.teachers.push({
      ...this.inputValues,
      age:+this.inputValues.age,
      gender: +this.inputValues.gender,
      status: +this.inputValues.status,
      id: this.teachers.length +1
    });
    // Cập nhật lại giá trị input ở form
    this.inputValues = {
      name: '',
      age: '',
      gender: '0',
      avatar: '',
      status: '0'
    }
  }
}
