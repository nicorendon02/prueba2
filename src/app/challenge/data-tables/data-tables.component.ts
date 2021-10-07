import { Component, OnInit } from '@angular/core';

const data: any = require('../../shared/data/company.json');

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})

export class DataTablesComponent implements OnInit {
  rows = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];

  constructor() { 
    this.rows = data;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  ngOnInit(): void {
  }

}
