import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sepsi-focus',
  templateUrl: './sepsi-focus.page.html',
  styleUrls: ['./sepsi-focus.page.scss'],
})
export class SepsiFocusPage implements OnInit {
  Database: SQLiteObject
  Focus = [];
  constructor(private sqlite: SQLite, private router:Router) { 
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
      this.fill_focus();
    })
  }

  ngOnInit() {
  }

  fill_focus(){
    let sql = "SELECT * FROM sepsi_focus ORDER BY Name";

    this.Database.executeSql(sql, [])
      .then((result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i);
          this.Focus.push(item);
        }
      })
      .catch(e => console.log(e));
  }
  goRiskFactor(e, item){
    const navigationExtras: NavigationExtras = {
      state: {
        Codice: item.Codice,
        Name: item.Name
      }
    };
    this.router.navigate(['/sepsi-riskfactor'], navigationExtras);
  }
    
  goBack(){
    this.router.navigate(['/icu-antibiotics']);
  }

}
