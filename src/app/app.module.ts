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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HapFilterPipe } from './Pipes/hap-filter.pipe'
import { DatabaseService } from './database.service';

@NgModule({
  declarations: [AppComponent, FilterPipe, HapFilterPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, PdfViewerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite, SQLitePorter, SplashScreen, DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
