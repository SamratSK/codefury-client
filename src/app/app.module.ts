import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { GlideService } from './services/glide.service';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent], // Declare your components here
  imports: [BrowserModule],
  providers: [GlideService, provideHttpClient()], // Add your services here
  bootstrap: [AppComponent], // Bootstrap the root component
})
export class AppModule {}
