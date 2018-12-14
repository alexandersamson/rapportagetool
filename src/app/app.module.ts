import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
