import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-bacterials',
  templateUrl: './bacterials.page.html',
  styleUrls: ['./bacterials.page.scss'],
})
export class BacterialsPage implements OnInit {
  Bacterials = [];
  open_var = [];
  constructor(private Servizio:DatabaseService, private router:Router) { 
  }

  ngOnInit(){
    let sql = "SELECT * FROM bacterials ORDER BY Name";

    this.Servizio.database.executeSql(sql, [])
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
