import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icu-antibiotics',
  templateUrl: './icu-antibiotics.page.html',
  styleUrls: ['./icu-antibiotics.page.scss'],
})
export class IcuAntibioticsPage implements OnInit {
  Database: SQLiteObject;
  activities;
  
  constructor(private sqlite: SQLite, private router:Router) { 
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
    })
  }

  ngOnInit() {
    this.activities = [
      {
        code: 0,
        name: 'IVAC',
        classe: 'visibile'
      },
      {
        code: 1,
        name: 'SEPSI',
        classe: 'opaco'
      },
      {
        code: 2,
        name: 'HAP',
        classe: 'opaco'
      },
      {
        code: 3,
        name: 'VAP',
        classe: 'opaco'
      }
    ]
  }

  goToActivity(e, item){
    switch(item.code){
      case 0: {
        this.router.navigate(['/enterobacterales']);
        break;
      }
      case 1: {
        //this.router.navigate(['/antibacterials']);
        break;
      }
      case 2: {
        //this.router.navigate(['/enterobacterales']);
        break;
      }
      case 3: {
        break;
      }
      default: break;
    }
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}
