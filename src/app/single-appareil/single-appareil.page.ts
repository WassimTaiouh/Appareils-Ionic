import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {
  appareil!: {
    isOn: any;
    name: string;
    description: string[];
  };

  state = false;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        let state = this.router.getCurrentNavigation()!.extras.state
        this.appareil = state!['appareil'];
        console.log(this.appareil);
      }
    });
   }

   onToggleAppareilOff(){
    console.log(this.state)

    if(this.state === true) {
      this.state = false
    }
    console.log(this.state)
    };
   onToggleAppareilOn(){
    console.log(this.state)

    if(this.state === false) {
      this.state = true
    }
    console.log(this.state)
    };

  ngOnInit() {
  }
   };

