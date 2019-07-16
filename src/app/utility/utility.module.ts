import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UtilityRoutingModule} from './utility-routing.module';
import {TapComponent} from './tap/tap.component';

@NgModule({
  declarations: [TapComponent],
  imports: [
    CommonModule,
    UtilityRoutingModule
  ]
})
export class UtilityModule {
}
