import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateHelloWorldComponent } from './create-hello-world/create-hello-world.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent,
    CreateHelloWorldComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
