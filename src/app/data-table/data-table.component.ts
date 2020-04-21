import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
//import { DataTableDataSource, DataTableItem } from './data-table-datasource';

import {MatTableDataSource} from '@angular/material/table';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  RegNo: number;
  Dept: string;
  CGPA: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {RegNo: 2012338043, name: 'Khan', Dept: 'EEE', CGPA: 2.99},
  {RegNo: 2012338042, name: 'Proyash', Dept: 'EEE', CGPA: 3.05},
  {RegNo: 2012338041, name: 'Tuhin', Dept: 'EEE', CGPA: 2.99},
  {RegNo: 2012338040, name: 'Rahat', Dept: 'EEE', CGPA: 3.00},
  {RegNo: 2012232087, name: 'Anamika', Dept: 'Sociology', CGPA: 3.30},
  {RegNo: 2012134019, name: 'Nayeem', Dept: 'STAT', CGPA: 3.45},
  {RegNo: 2012731052, name: 'Nusrat', Dept: 'BBA', CGPA: 3.50},
  {RegNo: 2012431040, name: 'Sium', Dept: 'GEB', CGPA: 3.60},
  {RegNo: 2012431050, name: 'Wasif', Dept: 'GEB', CGPA: 3.60}
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableItem>;
  //dataSource: DataTableDataSource;
  dataSource = new MatTableDataSource(EXAMPLE_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['RegNo', 'name', 'Dept', 'CGPA', 'button'];

  ngOnInit() {
    //this.dataSource = new DataTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    //console.log('HaHa');
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyDelete(filterValue) {
    if(confirm("Are you sure?"))
    {
      console.log();
      console.log('HaHa '+ filterValue.RegNo);
      console.log('HoHo ' + this.dataSource.data.length + " => " + this.dataSource.filteredData.length);
  
      for(let i = 0 ; i<this.dataSource.data.length ; i++)
        if(this.dataSource.data[i].RegNo == filterValue.RegNo)
        {
          this.dataSource.data.splice(i,1);
          console.log('HiHi ' + i);
          break;
        }
        this.dataSource._updateChangeSubscription();
    }
  }
}