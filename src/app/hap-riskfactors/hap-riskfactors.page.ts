import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hap-riskfactors',
  templateUrl: './hap-riskfactors.page.html',
  styleUrls: ['./hap-riskfactors.page.scss'],
})
export class HapRiskfactorsPage implements OnInit {
  GeneralRiskFactor = [0,0,0];
  PossibleRiskFactors = [
    {
      value: 0,
      Name: 'Need for ventilatory support due to pneumonia',
      classe: 'visibile',
      type: 0
    },
    {
      value: 1,
      Name: 'Septic shock',
      classe: 'visibile',
      type: 0
    },
    {
      value: 2,
      Name: 'Intravenous antibiotic treatment during the prior 90 days ',
      classe: 'visibile',
      type: 1
    },
    {
      value: 3,
      Name: 'Treatment in a unit where the prevalence of MRSA among S. aureus isolates is not known',
      classe: 'visibile',
      type: 1
    },
    {
      value: 4,
      Name: 'Treatment in a unit where the prevalence of MRSA among S. aureus isolates is >20%',
      classe: 'visibile',
      type: 1
    },
    {
      value: 5,
      Name: 'Factors increasing the likelihood of gram-negative infection',
      classe: 'visibile',
      type: 2
    },
    {
      value: 6,
      Name: 'Patient with structural lung disease',
      classe: 'visibile',
      type: 2
    }
  ];
  RiskFactors = [];
  constructor(private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
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
      this.GeneralRiskFactor[item.type]++;
    }
    else{
      this.RiskFactors.forEach((value,index)=>{
        if(value.value==item.value) this.RiskFactors.splice(index,1);
      });
      item.classe = "visibile";
      this.GeneralRiskFactor[item.type]--;
    }
    this.RiskFactors.forEach((value,index)=>{
      console.log(value.Name);
    });
  }
    
  goNext(){
    const navigationExtras: NavigationExtras = {
      state: {
        Risk_A: this.GeneralRiskFactor[0],
        Risk_B: this.GeneralRiskFactor[1],
        Risk_C: this.GeneralRiskFactor[2]
      }
    };
    this.router.navigate(['/hap-antibiotics'], navigationExtras);
  }
    
  goBack(){
    this.router.navigate(['/icu-antibiotics']);
  }


}
