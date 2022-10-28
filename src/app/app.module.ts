import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './Pipes/filter.pipe';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';


@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite, SQLitePorter, SplashScreen],
  bootstrap: [AppComponent],
})
export class AppModule {}
