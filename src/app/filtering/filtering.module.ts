import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TakeComponent} from './take/take.component';
import {FilterComponent} from './filter/filter.component';
import {FirstComponent} from './first/first.component';

@NgModule({
  declarations: [TakeComponent, FilterComponent, FirstComponent],
  imports: [
    CommonModule
  ]
})
export class FilteringModule {
}
