import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RangeComponent} from "./range/range.component";
import {OfComponent} from "./of/of.component";

const routes: Routes = [
  {path: 'range', component: RangeComponent},
  {path: 'of', component: OfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationRoutingModule {
}
