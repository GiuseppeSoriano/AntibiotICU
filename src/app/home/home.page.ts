import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  viewProviders: []
})
export class HomePage {
  activities;
  bacterials = [];
  selected_bacterial: null;
  openPopup = false;
  showBibliography = false;
  openDisclaimer: boolean = true;

  constructor(private Servizio: DatabaseService, private router:Router) {

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
        name: 'EFFICACY'
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
        this.router.navigate(['/effectiveness']);
        break;
      }
      default: break;
    }
  }

  go_Bibliography(){
    this.router.navigate(['/bibliography']);
  }

  populateBacterials(){
    let sql = "SELECT * FROM bacterials ORDER BY Name";

    this.Servizio.database.executeSql(sql, [])
      .then((result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i);
          this.bacterials.push(item);
        }
      })
      .catch(e => console.log(e));
  }

}
