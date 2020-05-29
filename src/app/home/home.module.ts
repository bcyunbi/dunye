import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule} from '../home/home-routing.module'
import { HomeComponent } from './component/home/home.component';
import { UiCustomizeModule } from '../ui-customize/ui-customize.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UiCustomizeModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
