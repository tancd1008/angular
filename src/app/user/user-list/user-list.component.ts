import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // dữ liệu sẽ nhận từ component cha
  @Input() users: any;
  @Output() handleRemove: EventEmitter<number>;
  @Output() handleEdit: EventEmitter<number>;
  onEdit = (userId: number) => {
    this.handleEdit.emit(userId)
  }
  onRemove = (userId: number) => {
    this.handleRemove.emit(userId)
  }
  constructor() {
    this.handleRemove = new EventEmitter;
    this.handleEdit = new EventEmitter;
   }

  ngOnInit(): void {
  }

}
