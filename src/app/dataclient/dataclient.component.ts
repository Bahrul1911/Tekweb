import { Component, OnInit } from '@angular/core';
import {Pelanggan} from '../model/pelanggan.model';
import {PelangganService} from '../services/pelanggan.service';

@Component({
  selector: 'app-dataclient',
  templateUrl: './dataclient.component.html',
  styleUrls: ['./dataclient.component.css']
})
export class DataclientComponent implements OnInit {
  pelanggans: any;
  constructor( private service: PelangganService) { }

  ngOnInit(): void {
    this.getPelanggan();
  }
  // tslint:disable-next-line:typedef
  getPelanggan(){
    this.service.onGet().subscribe(data => {
     console.log(data);
    });
  }


}
