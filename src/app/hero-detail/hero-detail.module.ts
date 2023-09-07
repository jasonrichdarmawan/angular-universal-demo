import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';



@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailRoutingModule
  ]
})
export class HeroDetailModule { }
