import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hap-antibiotics',
  templateUrl: './hap-antibiotics.page.html',
  styleUrls: ['./hap-antibiotics.page.scss'],
})
export class HapAntibioticsPage implements OnInit {
  Database: SQLiteObject
  Antibiotics = [];
  Focus = {
    Codice: '',
    Name: ''
  };
  Risk_A= 0;
  Risk_B= 0;
  Risk_C= 0;
  Setting = 0;


  constructor(private sqlite: SQLite, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      Risk_A: number,
      Risk_B: number,
      Risk_C: number
    };
    // ASSEGNA
    this.Risk_A = state.Risk_A;
    this.Risk_B = state.Risk_B;
    this.Risk_C = state.Risk_C;
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
      this.fill_antibiotics();
    })
  }

  ngOnInit() {
  }

  fill_antibiotics(){
    let sql;
    if(this.Risk_A > 0)
      sql = "SELECT HC.*, HA1.Name AS AntibioticName1, HA1.Dosage AS AntibioticDosage1, HA2.Name AS AntibioticName2, HA2.Dosage AS AntibioticDosage2, HA3.Name AS AntibioticName3, HA3.Dosage AS AntibioticDosage3 FROM hap_compatibile3 HC inner join hap_antibiotics HA1 on HC.Antibiotic1 = HA1.Codice inner join hap_antibiotics HA2 on HC.Antibiotic2 = HA2.Codice inner join hap_antibiotics HA3 on HC.Antibiotic3 = HA3.Codice";
    else
      if(this.Risk_B > 0 || this.Risk_C > 0)
        sql = "SELECT HC.*, HA1.Name AS AntibioticName1, HA1.Dosage AS AntibioticDosage1, HA2.Name AS AntibioticName2, HA2.Dosage AS AntibioticDosage2 FROM hap_compatibile2 HC inner join hap_antibiotics HA1 on HC.Antibiotic1 = HA1.Codice inner join hap_antibiotics HA2 on HC.Antibiotic2 = HA2.Codice";
      else
        sql = "SELECT HC.*, HA1.Name AS AntibioticName1, HA1.Dosage AS AntibioticDosage1 FROM hap_compatibile1 HC inner join hap_antibiotics HA1 on HC.Antibiotic1 = HA1.Codice";
    
    this.Database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibiotics.push(item);
      }
    }).catch(e => console.log(e));

  }

  goBack(){
    this.router.navigate(['/hap-riskfactors']);
  }
}