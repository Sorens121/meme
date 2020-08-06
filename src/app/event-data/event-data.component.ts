import { Component, OnInit, ViewChild } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
