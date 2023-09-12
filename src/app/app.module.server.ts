import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    // Add server-only providers here.
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
