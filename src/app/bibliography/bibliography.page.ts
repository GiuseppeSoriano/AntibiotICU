import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bibliography',
  templateUrl: './bibliography.page.html',
  styleUrls: ['./bibliography.page.scss'],
})
export class BibliographyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}
