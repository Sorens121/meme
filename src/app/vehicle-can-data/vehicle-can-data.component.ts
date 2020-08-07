import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import{ VehicleCanDetails,canData,spnDat } from '../Models/VehicleCANDetails';
import { RowSpan, Span} from '../Models/RowSpan';

@Component({
  selector: 'app-vehicle-can-data',
  templateUrl: './vehicle-can-data.component.html',
  styleUrls: ['./vehicle-can-data.component.css']
})
export class VehicleCanDataComponent implements OnInit {

  ngOnInit(): void {}

  tableRows = [];
  objspnDat :spnDat[];
  canDataobj:canData[];
  rowSpans: Array<Span[]>;  
  rowSpanr :RowSpan;
  objVehicleCanDetails:VehicleCanDetails[]=[];

  tableColumns = [
    {
      name:'eventDateTime',
      displayText: 'eventDateTime'
    },
   
  ];
  public  apps: any[] = [];
  vechileDetails: any;
  dataSource: MatTableDataSource<VehicleCanDetails>;
  
  displayedColumns: string[] = ['srno', 'eventDateTime', 'spnName', 'spnUnit', 'spnNumber', 'spnValueDescription', 'spnValue','gpsLongitude'];
  displayedColumns2:string[] = [ 'spnName', 'spnUnit'];
  
  @ViewChild('TableVINPaginator', { static: true }) tableVINPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http: HttpClient) { 
    this.http.get<any>('/assets/JsonData.json').subscribe((data:any )=> {
      this.apps.push(data);
      this.vechileDetails=data["PROACC12091912303"];
      for(let i =0; i < this.vechileDetails.length;i++) {    
        for(let j =0; j <  this.vechileDetails[i]["spnDat"].length;j++) {
          this.vechileDetails[i]["spnDat"][j]["eventDateTime"]= this.vechileDetails[i].eventDateTime;
          this.vechileDetails[i]["spnDat"][j]["srno"]=j+1;
        }
      }
      this.dataSource  = new MatTableDataSource(this.vechileDetails[0]["spnDat"]);
      this.dataSource.paginator = this.tableVINPaginator;
      this.dataSource.sort = this.sort;
      }, error => console.error(error));
  }

  applyFilter(filterValue: string) {      
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
