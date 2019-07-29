import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
}) 
export class CardsService {

  public url: string

  constructor(private _http: HttpClient) { 
    this.url = GLOBAL.url
  }
  getCards():Observable<any> {
    return this._http.get(this.url+'people')
  }
}
