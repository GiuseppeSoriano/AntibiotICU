import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-sepsi-antibiotics',
  templateUrl: './sepsi-antibiotics.page.html',
  styleUrls: ['./sepsi-antibiotics.page.scss'],
})
export class SepsiAntibioticsPage implements OnInit {
  Antibiotics = [];
  Focus = {
    Codice: '',
    Name: ''
  };
  RiskFactor= 0;
  Setting = 0;


  constructor(private Servizio: DatabaseService, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      RiskFactor: number,
      Codice: string,
      Name: string,
      Setting: number
    };
    // ASSEGNA
    this.Focus.Codice = state.Codice;
    this.Focus.Name = state.Name;
    this.RiskFactor = state.RiskFactor;
    this.Setting = state.Setting;
  }

  ngOnInit(){
    let sql;
    if(this.RiskFactor == 0)
      sql = "SELECT SC.*, SA1.Name AS AntibioticName1, SA1.Dosage AS AntibioticDosage1, SA2.Name AS AntibioticName2, SA2.Dosage AS AntibioticDosage2, SA3.Name AS AntibioticName3, SA3.Dosage AS AntibioticDosage3, SA4.Name AS AntibioticName4, SA4.Dosage AS AntibioticDosage4, SA5.Name AS AntibioticName5, SA5.Dosage AS AntibioticDosage5 FROM sepsi_compatibile SC inner join sepsi_antibiotics SA1 on SC.Antibiotic1 = SA1.Codice left outer join sepsi_antibiotics SA2 on SC.Antibiotic2 = SA2.Codice left outer join sepsi_antibiotics SA3 on SC.Antibiotic3 = SA3.Codice left outer join sepsi_antibiotics SA4 on SC.Antibiotic4 = SA4.Codice left outer join sepsi_antibiotics SA5 on SC.Antibiotic5 = SA5.Codice WHERE SC.Focus = '" + this.Focus.Codice + "' AND SC.Risk = 0 AND SC.Setting = "  + this.Setting;
    else
      sql = "SELECT SC.*, SA1.Name AS AntibioticName1, SA1.Dosage AS AntibioticDosage1, SA2.Name AS AntibioticName2, SA2.Dosage AS AntibioticDosage2, SA3.Name AS AntibioticName3, SA3.Dosage AS AntibioticDosage3, SA4.Name AS AntibioticName4, SA4.Dosage AS AntibioticDosage4, SA5.Name AS AntibioticName5, SA5.Dosage AS AntibioticDosage5 FROM sepsi_compatibile SC inner join sepsi_antibiotics SA1 on SC.Antibiotic1 = SA1.Codice left outer join sepsi_antibiotics SA2 on SC.Antibiotic2 = SA2.Codice left outer join sepsi_antibiotics SA3 on SC.Antibiotic3 = SA3.Codice left outer join sepsi_antibiotics SA4 on SC.Antibiotic4 = SA4.Codice left outer join sepsi_antibiotics SA5 on SC.Antibiotic5 = SA5.Codice WHERE SC.Focus = '" + this.Focus.Codice + "' AND SC.Risk = 1 AND SC.Setting = "  + this.Setting;
    
    this.Servizio.database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibiotics.push(item);
      }
    }).catch(e => console.log(e));

  }

  goBack(){
    this.router.navigate(['/sepsi-riskfactor']);
  }
}
