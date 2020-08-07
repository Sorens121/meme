import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EventDateTypeArray, EventData } from '../Models/EventDetails';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.component.html',
  styleUrls: ['./event-data.component.css']
})
export class EventDataComponent implements OnInit {

  ngOnInit(): void {
  }
  event_array: EventData[];
  objEventData: EventData[] = [];

  dataSource: MatTableDataSource<EventData>;
  TimestampdataSource: MatTableDataSource<any>;
  timestampArray: EventDateTypeArray[];

  displayedColumns: string[] = ['EventType', 'Count', 'ShowTimestamps'];
  displayedColumnsTimestamps: string[] = ['Timestamp'];

  @ViewChild('TableVINPaginator', {static: true}) tableVINPaginator: MatPaginator;
  @ViewChild('TimestampPaginator', {static: true}) TimestampPaginator: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true}) sort: MatSort;

  constructor(private http: HttpClient) { 
    this.http.get<any>('/assets/eventData.json').subscribe((data:any )=> {
      let tempEvent:EventData;
      
      var employees = {};
      employees["vinnumber" ] = Object.keys(data);
      employees["evetvalues"] = Object.values(data);
      employees["evetdataheader"] = Object.keys(employees["evetvalues"][0]);
      employees["evetdata" ] = Object.values(employees["evetvalues"][0]);
      this.event_array = [];
      for(let ii = 0;ii<employees["evetdataheader"].length;ii++)
      {
        if(ii%2==0){
        tempEvent ={
          VinNumber :employees["vinnumber" ],
          EventName: employees["evetdataheader"][ii],
          EventCount: employees["evetdata"][ii],
          EventDateType: employees["evetdata"][ii + 1]
        };
        this.event_array.push(tempEvent);
      }
    }
      this.dataSource  = new MatTableDataSource(this.event_array);    
      this.dataSource.paginator = this.tableVINPaginator;
      this.dataSource.sort = this.sort; 
      }, error => console.error(error));
    }
   
    ShowEventTimeStamps(vinnumber:string,eventName:string,timestamp:string[])
    {
      // let result: any = this.event_array.find(x => x.VinNumber === vinnumber && x.EventName==eventName select );
     debugger;
     this.timestampArray = [];
      let tempEventarray:EventDateTypeArray;
      for(let ii = 0;ii<timestamp.length;ii++)
      {
  
        tempEventarray = { 
          EventDateTime :timestamp[ii]
      };
       this.timestampArray.push(tempEventarray);
    }
      //console.log(this.timestampArray);
     // this.timestampArray.push(timestamp)
     this.TimestampdataSource  = new MatTableDataSource( this.timestampArray);    
     this.TimestampdataSource.paginator = this.tableVINPaginator;
     this.TimestampdataSource.sort = this.sort; 
  }
   
  applyFilter(filterValue: string) {      
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
