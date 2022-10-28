import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dosage',
  templateUrl: './dosage.page.html',
  styleUrls: ['./dosage.page.scss'],
})
export class DosagePage implements OnInit {
  Database: SQLiteObject
  Antibacterial = {
    Codice: '',
    Name: '',
    A_Oral: '',
    A_Parenteral: '',
    A_Serious: '',
    P_Oral: '',
    P_Parenteral: '',
    Renal: ''
  };
  Page = 0;
  
  constructor(private sqlite: SQLite, private router:Router) { 
    
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      Page: number,
      Codice: string,
      Name: string,
      A_Oral: string, 
      A_Parenteral: string,
      A_Serious: string,
      P_Oral: string,
      P_Parenteral: string,
      Renal: string
    };
    this.Page = state.Page;
    this.Antibacterial.Codice = state.Codice;
    this.Antibacterial.Name = state.Name;
    this.Antibacterial.A_Oral = state.A_Oral;
    this.Antibacterial.A_Parenteral = state.A_Parenteral;
    this.Antibacterial.A_Serious = state.A_Serious;
    this.Antibacterial.P_Oral = state.P_Oral;
    this.Antibacterial.P_Parenteral = state.P_Parenteral;
    this.Antibacterial.Renal = state.Renal;
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
    })
  }

  ngOnInit() {
  }

  goBack(){
    if(this.Page == 0)
      this.router.navigate(['/antibacterials']);
    if(this.Page == 1)
      this.router.navigate(['/antibacterials-ordered']);
  }
}
