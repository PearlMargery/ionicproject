import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageItemPageRoutingModule } from './page-item-routing.module';

import { PageItemPage } from './page-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageItemPageRoutingModule
  ],
  declarations: [PageItemPage]
})
export class PageItemPageModule {}
