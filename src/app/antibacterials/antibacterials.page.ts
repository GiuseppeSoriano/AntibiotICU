import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-antibacterials',
  templateUrl: './antibacterials.page.html',
  styleUrls: ['./antibacterials.page.scss'],
})
export class AntibacterialsPage implements OnInit {
  Database: SQLiteObject
  Antibacterials = [];
  open_var = [];
  filteredString: string = '';
  constructor(private sqlite: SQLite, private router:Router) { 
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
      this.fill_antibacterials();
    })
  }

  ngOnInit() {
  }


  fill_antibacterials(){
    let sql = "SELECT M.Codice, M.Name, M.Cod_button, M.A_Oral, M.A_Parenteral, M.A_Serious, M.P_Oral, M.P_Parenteral, M.Renal FROM medicines M";
    this.Database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.open_var[result.rows.item(i).Cod_button] = false;
        this.Antibacterials.push(item);
      }
    }).catch(e => console.log(e));
  }

  goDosage(e, item){
    const navigationExtras: NavigationExtras = {
      state: {
        Page: 0,
        Codice: item.Codice,
        Name: item.Name,
        A_Oral: item.A_Oral,
        A_Parenteral: item.A_Parenteral,
        A_Serious: item.A_Serious,
        P_Oral: item.P_Oral,
        P_Parenteral: item.P_Parenteral,
        Renal: item.Renal
      }
    };
    this.router.navigate(['/dosage'], navigationExtras);
  }
  
  goHome(){
    this.router.navigate(['/home']);
  }

}
