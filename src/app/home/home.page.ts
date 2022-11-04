import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  viewProviders: []
})
export class HomePage {
  objecDB: SQLiteObject
  activities;
  bacterials = [];
  selected_bacterial: null;
  openPopup = false;
  showBibliography = false;
  constructor(private sqlite: SQLite, private router:Router, private httpClient: HttpClient, private sqlitePorter: SQLitePorter) {
    this.init_db();
  }

  async soonAvailable(isOpen: boolean){
    this.openPopup = isOpen;
  }

  ngOnInit() {
    this.activities = [
      {
        code: 0,
        img: 'assets/imgs/icon1.png', 
        name: 'BACTERIALS'
      },
      {
        code: 1,
        img: 'assets/imgs/icon2.png', 
        name: 'ANTIBACTERIALS'
      },
      {
        code: 2,
        img: 'assets/imgs/icon3.png', 
        name: 'ICU ANTIBIOTICS'
      },
      {
        code: 3,
        img: 'assets/imgs/icon4.png', 
        name: 'PATHOLOGIES'
      }
    ]
  }
  
  goToActivity(e, item){
    switch(item.code){
      case 0: {
        this.router.navigate(['/bacterials']);
        break;
      }
      case 1: {
        this.router.navigate(['/antibacterials']);
        break;
      }
      case 2: {
        this.router.navigate(['/icu-antibiotics']);
        break;
      }
      case 3: {
        this.soonAvailable(true);
        break;
      }
      default: break;
    }
  }

  go_Bibliography(){
    this.router.navigate(['/bibliography']);
  }

  private init_db() {
    this.httpClient.get('assets/db/myapp.sql', {responseType: 'text'})
        .subscribe(data => { 
          this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
            this.objecDB = db;
          this.sqlitePorter.importSqlToDb(db, data).then(f => this.populateBacterials());
          }).catch(e => {
            console.log(e)});
        });
  }

  populateBacterials(){
    let sql = "SELECT * FROM bacterials ORDER BY Name";

    this.objecDB.executeSql(sql, [])
      .then((result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i);
          this.bacterials.push(item);
        }
      })
      .catch(e => console.log(e));
  }

}
