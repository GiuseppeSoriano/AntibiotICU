import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-enterobacterales',
  templateUrl: './enterobacterales.page.html',
  styleUrls: ['./enterobacterales.page.scss'],
})
export class EnterobacteralesPage implements OnInit {

  Database: SQLiteObject
  Enterobacterales = [];
  open_var = [];
  constructor(private sqlite: SQLite, private router:Router) { 
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
      this.fill_enterobacterales();
    })
  }

  ngOnInit() {
  }

  fill_enterobacterales(){
    let sql = "SELECT * FROM ivac_enterobacterales ORDER BY Name";

    this.Database.executeSql(sql, [])
      .then((result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i);
          this.Enterobacterales.push(item);
        }
      })
      .catch(e => console.log(e));
  }

  viewAntibacterials(e, item){      // MOD
    const navigationExtras: NavigationExtras = {
      state: {
        Codice: item.Codice,
        Name: item.Name
      }
    };
    this.router.navigate(['/antibiotics'], navigationExtras);
  }
  
  goHome(){
    this.router.navigate(['/home']);
  }
}
