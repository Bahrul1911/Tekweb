import { Injectable } from '@angular/core';
import {Pelanggan} from '../model/pelanggan.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:2526/pelanggan';

  onGet(){
    return this.http.get<Pelanggan[]>(this.baseUrl);
  }
}
