import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  isBrowser: boolean

  heroes: Hero[] = [];

  constructor(
    @Inject(PLATFORM_ID) platformID: string,
    private heroService: HeroService) {
      this.isBrowser = isPlatformBrowser(platformID);
    }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
