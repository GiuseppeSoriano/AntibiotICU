import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-sepsi-focus',
  templateUrl: './sepsi-focus.page.html',
  styleUrls: ['./sepsi-focus.page.scss'],
})
export class SepsiFocusPage implements OnInit {
  Focus = [];
  constructor(private Servizio: DatabaseService, private router:Router) { 

  }

  ngOnInit(){
    let sql = "SELECT * FROM sepsi_focus ORDER BY Name";

    this.Servizio.database.executeSql(sql, [])
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
