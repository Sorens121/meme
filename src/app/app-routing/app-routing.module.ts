import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDataComponent } from '../event-data/event-data.component';
import { VehicleCanDataComponent } from '../vehicle-can-data/vehicle-can-data.component';
import { TelemetryDataComponent } from '../telemetry-data/telemetry-data.component';

const routes: Routes = [
  {path: 'eventdata', component: EventDataComponent},
  {path:'telemetrydata', component: TelemetryDataComponent},
  {path:'vehiclecandata', component: VehicleCanDataComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EventDataComponent, TelemetryDataComponent, VehicleCanDataComponent]
