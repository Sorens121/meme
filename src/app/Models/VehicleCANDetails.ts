export interface spnDat {
  
    spnName: string,
    spnUnit:string,
    spnNumber: number,
    spnValueDescription:string, 
    spnValue:number,
    eventDateTime:string,
    srno:number

 }
 
 export interface VehicleCanDetails    {
    eventDateTime: string
    spnDat:spnDat[] 
 
 }
 
 export interface canData {
    eventDateTime:string,
    gpsLongitude:number, 
    fuel:number,
    digitalIpStatus:number,
    gpsAccuracyAlt:number,
    gpsAltitude :number,
    speed :number,
    gpsDistance:number
    accelZ :number
    crankOn:boolean, 
    accelY :number
    accelX :number
    analogIp2:number
    analogIp1 :number
    gpsSignalQuality :number
    gpsLatitude :number
    odometer :number
    gpsCourseInDegrees :number
    packetStatus :number
    gpsFix :boolean,
    ignitionOn :boolean,
    gyroX :number
    gyroY :number
    gyroZ :number
    gpsAccuracyLat :number
    noOfSatForFix :number
    gpsAccuracyLong :number
 
 }
 
 