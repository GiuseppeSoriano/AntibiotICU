import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-antibiotics',
  templateUrl: './antibiotics.page.html',
  styleUrls: ['./antibiotics.page.scss'],
})
export class AntibioticsPage implements OnInit {
  Antibiotics_simple = [];
  Antibiotics_double = [];
  Enterobacteral = {
    Codice: '',
    Name: ''
  };


  constructor(private Servizio:DatabaseService, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      Codice: string,
      Name: string
    };
    this.Enterobacteral.Codice = state.Codice;
    this.Enterobacteral.Name = state.Name;
  }

  ngOnInit(){
    console.log(this.Enterobacteral.Codice);
    let sql = "SELECT IA.Codice AS Codice, IA.Name AS Name, IA.Dosage AS Dosage FROM ivac_compatibile IC inner join ivac_antibiotics IA on IC.Treatment = IA.Codice WHERE IC.Entero = '" + this.Enterobacteral.Codice + "'";
    this.Servizio.database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibiotics_simple.push(item);
      }
    }).catch(e => console.log(e));

    sql = "SELECT IA1.Codice AS Codice1, IA1.Name AS Name1, IA1.Dosage AS Dosage1, IA2.Codice AS Codice2, IA2.Name AS Name2, IA2.Dosage AS Dosage2 FROM ivac_compatibile IC inner join ivac_compositions ICOMP on IC.Treatment = ICOMP.Codice inner join ivac_antibiotics IA1 on ICOMP.Entero1 = IA1.Codice inner join ivac_antibiotics IA2 on ICOMP.Entero2 = IA2.Codice WHERE IC.Entero = '" + this.Enterobacteral.Codice + "'";
    this.Servizio.database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibiotics_double.push(item);
      }
    }).catch(e => console.log(e));
  }

  goBack(){
    this.router.navigate(['/enterobacterales']);
  }
}
