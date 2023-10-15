import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-effectiveness',
  templateUrl: './effectiveness.page.html',
  styleUrls: ['./effectiveness.page.scss'],
})
export class EffectivenessPage implements OnInit {
  Antibacterials = [];
  open_var = [];
  constructor(private Servizio:DatabaseService, private router:Router) { 

  }

  ngOnInit(){
    let sql = "SELECT * FROM medicines ORDER BY Name";

    this.Servizio.database.executeSql(sql, [])
      .then((result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i);
          this.Antibacterials.push(item);
        }
      })
      .catch(e => console.log(e));
  }

  viewBacterials(e, item){
    const navigationExtras: NavigationExtras = {
      state: {
        Codice: item.Codice,
        Name: item.Name
      }
    };
    this.router.navigate(['/bacterials-ordered'], navigationExtras);
  }
    
  goHome(){
    this.router.navigate(['/home']);
  }


}
