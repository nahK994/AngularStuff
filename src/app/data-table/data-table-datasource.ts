import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


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

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      //return data;
      return data.sort((a, b) => {
        if(a.Dept < b.Dept)
          return -1;
        else if(a.Dept == b.Dept)
        {
          if(a.CGPA > b.CGPA)
            return -1;
          else if(a.CGPA == b.CGPA)
          {
            if(a.RegNo < b.RegNo)
              return -1;
            else
              return 1;
          }
          else
            return 1;
        }
        else
          return 1;
      });
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'RegNo': return compare(a.RegNo, b.RegNo, isAsc);
        case 'Dept': return compare(a.Dept, b.Dept, isAsc);
        case 'CGPA': return compare(a.Dept, b.Dept, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}