import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreationRoutingModule} from './creation-routing.module';
import {RangeComponent} from './range/range.component';
import {OfComponent} from './of/of.component';
import {FromComponent} from './from/from.component';
import {TimerComponent} from './timer/timer.component';
import {EmptyComponent} from './empty/empty.component';
import {CreateComponent} from './create/create.component';

@NgModule({
  declarations: [RangeComponent, OfComponent, FromComponent, TimerComponent, EmptyComponent, CreateComponent],
  imports: [
    CommonModule,
    CreationRoutingModule
  ]
})
export class CreationModule {
}
