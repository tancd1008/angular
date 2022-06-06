import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() users: any; // Nhận dữ liệu
  // @Input('users') teachers: any; // Nhận dữ liệu và gán 
  constructor() { }

  ngOnInit(): void {
  }

}
