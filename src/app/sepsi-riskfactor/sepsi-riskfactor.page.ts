import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sepsi-riskfactor',
  templateUrl: './sepsi-riskfactor.page.html',
  styleUrls: ['./sepsi-riskfactor.page.scss'],
})
export class SepsiRiskfactorPage implements OnInit {
  Focus ={
      Codice: '',
      Name: ''
    };
  GeneralRiskFactor = 0;
  PossibleRiskFactors = [
    {
      value: 0,
      Name: 'Hospitalization > 5 days in last 3 months',
      classe: 'visibile'
    },
    {
      value: 1,
      Name: 'Institutionalization',
      classe: 'visibile'
    },
    {
      value: 2,
      Name: 'Known MDR colonization or infection',
      classe: 'visibile'
    },
    {
      value: 3,
      Name: 'Antibiotic therapy> 7 days in the previous month',
      classe: 'visibile'
    },
    {
      value: 4,
      Name: 'Renal failure on hemodialysis or peritoneal dialysis',
      classe: 'visibile'
    },
    {
      value: 5,
      Name: 'Comorbidity associated with high incidence of colonization or infection with MDR (cystic fibrosis, brochiectasis, chronic ulcers)',
      classe: 'visibile'
    }
  ];
  RiskFactors = [];
  constructor(private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      Codice: string,
      Name: string
    };
    this.Focus.Codice = state.Codice;
    this.Focus.Name = state.Name;
  }

  ngOnInit() {
  }

  onEditClick(value){
    console.log(value);
  }

  manageRiskFactor(e, item){
    if(item.classe == "visibile"){
      item.classe = "opaco";
      this.RiskFactors.push(item);
      this.GeneralRiskFactor++;
    }
    else{
      this.RiskFactors.forEach((value,index)=>{
        if(value.value==item.value) this.RiskFactors.splice(index,1);
      });
      item.classe = "visibile";
      this.GeneralRiskFactor--;
    }
    this.RiskFactors.forEach((value,index)=>{
      console.log(value.Name);
    });
  }
    
  goNext(){
    if(this.Focus.Name == "Pneumonia" || this.Focus.Name == "Intra-abdominal infections"){
      const navigationExtras: NavigationExtras = {
        state: {
          RiskFactor: this.GeneralRiskFactor,
          Codice: this.Focus.Codice,
          Name: this.Focus.Name
        }
      };
      this.router.navigate(['/sepsi-pneumonia-settings'], navigationExtras);
    }
    else{
        const navigationExtras: NavigationExtras = {
          state: {
            RiskFactor: this.GeneralRiskFactor,
            Codice: this.Focus.Codice,
            Name: this.Focus.Name,
            Setting: 0
          }
        };
        this.router.navigate(['/sepsi-antibiotics'], navigationExtras);
    }
  }
    
  goBack(){
    this.router.navigate(['/sepsi-focus']);
  }

}
