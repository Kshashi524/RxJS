import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CombinationRoutingModule} from './combination-routing.module';
import {StartWithComponent} from './start-with/start-with.component';

@NgModule({
  declarations: [StartWithComponent],
  imports: [
    CommonModule,
    CombinationRoutingModule
  ]
})
export class CombinationModule {
}
