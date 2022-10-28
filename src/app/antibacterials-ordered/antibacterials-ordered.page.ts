import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-antibacterials-ordered',
  templateUrl: './antibacterials-ordered.page.html',
  styleUrls: ['./antibacterials-ordered.page.scss'],
})
export class AntibacterialsOrderedPage implements OnInit {

  Database: SQLiteObject
  Antibacterials5 = [];
  Antibacterials4 = [];
  Antibacterials3 = [];
  Antibacterials2 = [];
  Antibacterials1 = [];
  Antibacterials0 = [];
  Bacterial = {
    Codice: '',
    Name: ''
  };
  IdSpecs = 6;
  Specs = [
    {
      Title: 'INSUFFICIENT DATA',
      Details: 'Insufficient data to recommend use.',
      Classe: 'color_effective_0'
    },
    {
      Title: 'NOT APPLICABLE',
      Details: 'Agent has no activity against this pathogen.',
      Classe: 'color_effective_1'
    },
    {
      Title: 'NOT RECOMMENDED',
      Details: 'Agent is a poor alternative to other agents because resistance to likely to be present or occur, due to poor drug penetration to site of infection or an unfavorable toxicity profile, or limited or anecdotal clinical data to support effectiveness.',
      Classe: 'color_effective_2'
    },
    {
      Title: 'VARIABLE',
      Details: 'Variable activity such that the agent, although clinically effective in some settings or types of infections is not reliably effective in others, or should be used in combination with another agent, and/or its efficacy is limited by resistance which has been associated with treatment failure.',
      Classe: 'color_effective_3'
    },
    {
      Title: 'ACTIVE',
      Details: 'Agent is a potential alternative agent (active in vitro, possesses class activity comparable to known effective agents or a therapeutically interchangeable agents and hence likely to be clinically effective, but second line due to overly broad spectrum, toxicity, limited clinical experience, or paucity of direct evidence of effectiveness).',
      Classe: 'color_effective_4'
    },
    {
      Title: 'RECOMMENDED',
      Details: 'Agent is a first line therapy: reliably active in vitro, clinically effective, guideline recommended, recommended as a first-line agent or acceptable alternative agent in the Sanford Guide.',
      Classe: 'color_effective_5'
    },
    {
      Title: 'EFFICACY',
      Details: 'title',
      Classe: 'color_title'
    }
  ];

  Page = 0;
  filteredString: string = '';
  openPopup = false;
  constructor(private sqlite: SQLite, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      Codice: string,
      Name: string
    };
    this.Bacterial.Codice = state.Codice;
    this.Bacterial.Name = state.Name;
    this.sqlite.create({name: 'myapp.db', location: 'default'}).then((db: SQLiteObject) => {
      this.Database = db;
      this.fill_antibacterials();
    })
  }

  ngOnInit() {
  }

  async showInfo(isOpen: boolean){
    this.openPopup = isOpen;
  }

  fill_antibacterials(){
    let sql = "SELECT M.Codice, M.Name, M.A_Oral, M.A_Parenteral, M.A_Serious, M.P_Oral, M.P_Parenteral, M.Renal FROM effectiveness E inner join medicines M on E.Antibacterial = M.Codice WHERE E.Bacterial = '" + this.Bacterial.Codice + "' AND E.Effective=5 ORDER BY E.Effective DESC";
    this.Database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibacterials5.push(item);
      }
    }).catch(e => console.log(e));
    sql = "SELECT M.Codice, M.Name, M.A_Oral, M.A_Parenteral, M.A_Serious, M.P_Oral, M.P_Parenteral, M.Renal FROM effectiveness E inner join medicines M on E.Antibacterial = M.Codice WHERE E.Bacterial = '" + this.Bacterial.Codice + "' AND E.Effective=4 ORDER BY E.Effective DESC";
    this.Database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibacterials4.push(item);
      }
    }).catch(e => console.log(e));
    sql = "SELECT M.Codice, M.Name, M.A_Oral, M.A_Parenteral, M.A_Serious, M.P_Oral, M.P_Parenteral, M.Renal FROM effectiveness E inner join medicines M on E.Antibacterial = M.Codice WHERE E.Bacterial = '" + this.Bacterial.Codice + "' AND E.Effective=3 ORDER BY E.Effective DESC";
    this.Database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibacterials3.push(item);
      }
    }).catch(e => console.log(e));
    sql = "SELECT M.Codice, M.Name, M.A_Oral, M.A_Parenteral, M.A_Serious, M.P_Oral, M.P_Parenteral, M.Renal FROM effectiveness E inner join medicines M on E.Antibacterial = M.Codice WHERE E.Bacterial = '" + this.Bacterial.Codice + "' AND E.Effective=2 ORDER BY E.Effective DESC";
    this.Database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibacterials2.push(item);
      }
    }).catch(e => console.log(e));
    sql = "SELECT M.Codice, M.Name, M.A_Oral, M.A_Parenteral, M.A_Serious, M.P_Oral, M.P_Parenteral, M.Renal FROM effectiveness E inner join medicines M on E.Antibacterial = M.Codice WHERE E.Bacterial = '" + this.Bacterial.Codice + "' AND E.Effective=1 ORDER BY E.Effective DESC";
    this.Database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibacterials1.push(item);
      }
    }).catch(e => console.log(e));
    sql = "SELECT M.Codice, M.Name, M.A_Oral, M.A_Parenteral, M.A_Serious, M.P_Oral, M.P_Parenteral, M.Renal FROM effectiveness E inner join medicines M on E.Antibacterial = M.Codice WHERE E.Bacterial = '" + this.Bacterial.Codice + "' AND E.Effective=0 ORDER BY E.Effective DESC";
    this.Database.executeSql(sql, []).then((result) => {
      for (let i = 0; i < result.rows.length; i++) {
        let item = result.rows.item(i);
        this.Antibacterials0.push(item);
      }
    }).catch(e => console.log(e));
  }

  goDosage(e, item){
    const navigationExtras: NavigationExtras = {
      state: {
        Page: 1,
        Codice: item.Codice,
        Name: item.Name,
        A_Oral: item.A_Oral,
        A_Parenteral: item.A_Parenteral,
        A_Serious: item.A_Serious,
        P_Oral: item.P_Oral,
        P_Parenteral: item.P_Parenteral,
        Renal: item.Renal
      }
    };
    this.router.navigate(['/dosage'], navigationExtras);
  }
  
  goBack(){
    this.router.navigate(['/bacterials']);
  }

  showPopupDetails(id: number){
    this.IdSpecs = id;
    document.getElementById('table').classList.add('hidden');
    document.getElementById('close_btn').classList.add('hidden');
    document.getElementById('close_btn').classList.remove('popup-btn');
    document.getElementById('info_popup').classList.remove('hidden');
    document.getElementById('back_btn').classList.remove('hidden');
    document.getElementById('back_btn').classList.add('popup-btn');
    document.getElementById('popup_header').classList.remove(this.Specs[6].Classe);
    document.getElementById('popup_header').classList.add(this.Specs[this.IdSpecs].Classe);
  }

  hidePopupDetails(){
    document.getElementById('table').classList.remove('hidden');
    document.getElementById('close_btn').classList.remove('hidden');
    document.getElementById('close_btn').classList.add('popup-btn');
    document.getElementById('info_popup').classList.add('hidden');
    document.getElementById('back_btn').classList.add('hidden');
    document.getElementById('back_btn').classList.remove('popup-btn');
    document.getElementById('popup_header').classList.remove(this.Specs[this.IdSpecs].Classe);
    document.getElementById('popup_header').classList.add(this.Specs[6].Classe);
    this.IdSpecs = 6;
  }

}
