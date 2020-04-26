import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef, MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { ContactService } from '../service/contact.service';
import { ContactComponent } from '../contact/contact.component';
import { filter } from 'rxjs/operators';

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

  isPopupOpened = false;

  constructor(
    private dialog?: MatDialog,
    private _contactService?: ContactService
    ) { }

  dataSource = new MatTableDataSource(EXAMPLE_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['RegNo', 'name', 'Dept', 'CGPA', 'btnEdit', 'btnDel'];

  applyAdd()
  {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ContactComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;

      let index:number = this._contactService._contactList.length-1;
      let RegNo:number = this._contactService._contactList[index].RegNo;
      let name:string = this._contactService._contactList[index].name;
      let Dept:string = this._contactService._contactList[index].Dept;
      let CGPA:number = this._contactService._contactList[index].CGPA;
      // console.log(RegNo, name, Dept, CGPA);

      if(!(RegNo.toString.length == 0 || CGPA.toString.length == 0 || Dept.length == 0 || name.length == 0))
      {
        this.dataSource.data.push({RegNo, name, Dept, CGPA});
        this.dataSource._updateChangeSubscription();
      }
      // console.log("End");
      this._contactService._contactList.splice(0, this._contactService._contactList.length);
    });
  }

  applyEdit(filterValue) {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ContactComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      // console.log(this._contactService._contactList[0]);
      //console.log(filterValue);

      let lastIndex = this._contactService._contactList.length-1;
      let RegNo:number = this._contactService._contactList[lastIndex].RegNo;
      let name:string = this._contactService._contactList[lastIndex].name;
      let Dept:string = this._contactService._contactList[lastIndex].Dept;
      let CGPA:number = this._contactService._contactList[lastIndex].CGPA;

      if(!(RegNo.toString.length == 0 || CGPA.toString.length == 0 || Dept.length == 0 || name.length == 0))
      {
        let index:number = -1;
        for(let i = 0 ; i<this.dataSource.data.length ; i++)
          if(this.dataSource.data[i].RegNo == filterValue.RegNo)
          {
            index = i;
            break;
          }
        this.dataSource.data[index].RegNo = RegNo;
        this.dataSource.data[index].name = name;
        this.dataSource.data[index].Dept = Dept;
        this.dataSource.data[index].CGPA = CGPA;
  
        this.dataSource._updateChangeSubscription();
      }
      // console.log("End");

      this._contactService._contactList.splice(0, this._contactService._contactList.length);
    });
  }

  ngOnInit() {
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
      for(let i = 0 ; i<this.dataSource.data.length ; i++)
        if(this.dataSource.data[i].RegNo == filterValue.RegNo)
        {
          this.dataSource.data.splice(i,1);
          break;
        }
        this.dataSource._updateChangeSubscription();
    }
  }
}