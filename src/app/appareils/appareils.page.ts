import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Appareil } from '../models/appareil';
import { AppareilsService } from '../services/appareils.service';
@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {
  appareilsList! : Appareil[];

  constructor(private router: Router,
    private appareilsService: AppareilsService) { }

  ngOnInit() {
    this.appareilsService.getAppareils().subscribe(res => {
      this.appareilsList = res
      console.log(this.appareilsList);
    },
    err => {
      console.log("error")
    }
    );
  }

  onLoadAppareil(appareil: {name: string, description: string[]}) {
    let navigationExtras: NavigationExtras = {
      state: {
        appareil:appareil
      }
    };
    this.router.navigate(['/single-appareil'], navigationExtras);
  };
}
