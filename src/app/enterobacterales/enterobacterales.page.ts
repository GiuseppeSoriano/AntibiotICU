import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-enterobacterales',
  templateUrl: './enterobacterales.page.html',
  styleUrls: ['./enterobacterales.page.scss'],
})
export class EnterobacteralesPage implements OnInit {
  Enterobacterales = [];
  open_var = [];
  constructor(private Servizio:DatabaseService, private router:Router) { 

  }

  ngOnInit(){
    let sql = "SELECT * FROM ivac_enterobacterales ORDER BY Name";

    this.Servizio.database.executeSql(sql, [])
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
  
  goBack(){
    this.router.navigate(['/icu-antibiotics']);
  }
}
