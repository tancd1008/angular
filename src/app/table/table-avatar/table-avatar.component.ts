import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-avatar',
  templateUrl: './table-avatar.component.html',
  styleUrls: ['./table-avatar.component.css']
})
export class TableAvatarComponent implements OnInit {
  @Input() avatar: string;
  @Input() age: number;
  constructor() {
    this.avatar ="";
    this.age = 0;
   }

  ngOnInit(): void {
  }

}
