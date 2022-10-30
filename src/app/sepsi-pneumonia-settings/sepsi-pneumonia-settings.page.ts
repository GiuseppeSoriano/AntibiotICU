import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sepsi-pneumonia-settings',
  templateUrl: './sepsi-pneumonia-settings.page.html',
  styleUrls: ['./sepsi-pneumonia-settings.page.scss'],
})
export class SepsiPneumoniaSettingsPage implements OnInit {
  Database: SQLiteObject
  Settings = [];
  Focus ={
    Codice: '',
    Name: ''
  };
  Riskfactor: number;
  constructor(private sqlite: SQLite, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      RiskFactor: number,
      Codice: string,
      Name: string
    };
    this.Riskfactor = state.RiskFactor;
    this.Focus.Codice = state.Codice;
    this.Focus.Name = state.Name;
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
    })
    if(this.Focus.Name == "Pneumonia"){
    this.Settings = [{
        value: 0,
        Name: "Community/Emergency Room"
      },
      {
        value: 1,
        Name: "Hospital/Nosocomial"
      },
      {
        value: 2,
        Name: "ICU"
      }];
    } else{
      this.Settings = [{
        value: 0,
        Name: "Sepsis related Spontaneus bacterial peritonitis"
      },
      {
        value: 1,
        Name: "Sepsis related Secondary peritonitis"
      },
      {
        value: 2,
        Name: "Sepsis related Tertiary peritonitis"
      }];
    }
  
  }

  ngOnInit() {
  }

  viewAntibiotics($event, item){
    const navigationExtras: NavigationExtras = {
      state: {
        RiskFactor: this.Riskfactor,
        Codice: this.Focus.Codice,
        Name: this.Focus.Name,
        Setting: item.value
      }
    };
    this.router.navigate(['/sepsi-antibiotics'], navigationExtras);
  }
    
  goBack(){
    this.router.navigate(['/sepsi-riskfactor']);
  }


}
