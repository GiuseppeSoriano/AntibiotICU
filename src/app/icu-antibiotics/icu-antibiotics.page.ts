import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-icu-antibiotics',
  templateUrl: './icu-antibiotics.page.html',
  styleUrls: ['./icu-antibiotics.page.scss'],
})
export class IcuAntibioticsPage implements OnInit {
  Database: SQLiteObject;
  activities;
  openPopup = false;
  
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
        name: 'SEPSIS',
        classe: 'visibile'
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
        this.router.navigate(['/sepsi-focus']);
        break;
      }
      case 2: {
        this.openPopup = true;
        break;
      }
      case 3: {
        this.openPopup = true;
        break;
      }
      default: break;
    }
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}
