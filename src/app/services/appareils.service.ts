import { Appareil } from './../models/appareil';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  appareilsList!: Appareil[];


  constructor(private http: HttpClient) { }

  getAppareils(){
    return this.http.get<Appareil[]>('assets/data/appareils.json');
  }
}
