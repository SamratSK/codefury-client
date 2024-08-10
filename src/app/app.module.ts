import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent], // Declare your components here
  imports: [BrowserModule, MainModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent], // Bootstrap the root component
})
export class AppModule {}
