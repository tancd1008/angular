import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-name',
  templateUrl: './table-name.component.html',
  styleUrls: ['./table-name.component.css']
})
export class TableNameComponent implements OnInit {
  @Input() name: string;
  constructor() {
    this.name = '';
   }

  ngOnInit(): void {
  }

}
