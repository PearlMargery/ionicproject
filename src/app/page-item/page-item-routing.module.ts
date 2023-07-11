import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageItemPage } from './page-item.page';

const routes: Routes = [
  {
    path: '',
    component: PageItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageItemPageRoutingModule {}
