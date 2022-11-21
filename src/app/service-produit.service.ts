import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { catchError, Observable, of, tap } from 'rxjs';
import { SHOES } from './shoes/shoes/SHOES';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {

  constructor(private http : HttpClient) { }
  
    headers = new HttpHeaders( {
      'X-RapidAPI-Key': 'f434d9079fmsh26186d8bddfa207p1ee508jsnb3e06fdfa02b',
      'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
    })

 
  getShoes():Observable<SHOES[]>{
    return this.http.get<SHOES[]>("https://shoes-collections.p.rapidapi.com/shoes",{headers : this.headers}).pipe(
      tap((response)=>{console.table(response)}),
      catchError((err) => {return of([])})
      )
  }
}
