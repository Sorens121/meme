import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { teleData, tabledata } from '../Models/Telemetry';

@Component({
  selector: 'app-telemetry-data',
  templateUrl: './telemetry-data.component.html',
  styleUrls: ['./telemetry-data.component.css']
})
export class TelemetryDataComponent implements OnInit {
  
  ngOnInit(): void {}

  vehicleDetails: any;
  tdata: tabledata[];
  trow: tabledata;
  
  dataSource: MatTableDataSource<teleData>
  displayedColumns: string[] =['timestamp', 'gpsLongitude', 'fuel', 'digitalIpStatus', 'gpsAccuracyAlt','gpsAltitude','speed','gpsDistance','accelZ','crankOn','accelY','accelX','analogIp2','analogIp1','gpsSignalQuality','gpsLatitude','odometer','gpsCourseInDegrees','packetStatus','gpsFix','ignitionOn','gyroX','gyroY','gyroZ','gpsAccuracyLat','noOfSatForFix','gpsAccuracyLong']
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  tableRows = [];
  tableColumns = [
    {
      name: 'timestamp',
      displayedText: 'Timestamp'
    },
    {
      name: 'gpsLonitude',
      displayedText: 'Gps Longitude'
    }
  ];
  constructor(private http: HttpClient) {
    this.http.get<teleData>('/assets/TelemetryData.json').subscribe((data:teleData )=> { // need to change the url
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
       
          element.map((node:any) => {
            for(const nodeKey in node) {
              if (Object.prototype.hasOwnProperty.call(node, nodeKey)) {
                const innerElement = node[nodeKey];
                // console.log(innerElement)
                innerElement.timestamp = nodeKey;
                this.tableRows.push(innerElement);
              }
            }
          })
        }
      } 
   
      this.dataSource  = new MatTableDataSource(this.tableRows);
      debugger;
      }, error => console.error(error));
  }
   
  applyFilter(filterValue: string) {      
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
