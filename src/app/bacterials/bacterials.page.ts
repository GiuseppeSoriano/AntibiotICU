import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-bacterials',
  templateUrl: './bacterials.page.html',
  styleUrls: ['./bacterials.page.scss'],
})
export class BacterialsPage implements OnInit {
  Database: SQLiteObject
  Bacterials = [];
  open_var = [];
  constructor(private sqlite: SQLite, private router:Router) { 
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
      this.fill_bacterials();
    })
  }

  ngOnInit() {
  }

  fill_bacterials(){
    let sql = "SELECT * FROM bacterials ORDER BY Name";

    this.Database.executeSql(sql, [])
      .then((result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i);
          this.Bacterials.push(item);
        }
      })
      .catch(e => console.log(e));
  }

  viewAntibacterials(e, item){
    const navigationExtras: NavigationExtras = {
      state: {
        Codice: item.Codice,
        Name: item.Name
      }
    };
    this.router.navigate(['/antibacterials-ordered'], navigationExtras);
  }
    
  goHome(){
    this.router.navigate(['/home']);
  }

}
