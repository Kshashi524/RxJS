import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransformationRoutingModule} from './transformation-routing.module';
import {MapComponent} from './map/map.component';
import {MapToComponent} from './map-to/map-to.component';
import {PluckComponent} from './pluck/pluck.component';

@NgModule({
  declarations: [MapComponent, MapToComponent, PluckComponent],
  imports: [
    CommonModule,
    TransformationRoutingModule
  ]
})
export class TransformationModule {
}
