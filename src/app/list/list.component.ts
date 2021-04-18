import { Component, OnInit } from '@angular/core';
import { ListhotelService } from '../listhotel.service';
import { MatAccordion } from '@angular/material/expansion';
import { from } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listhotelServicelist: any;
  errorLoadingHotels: boolean = false;
  constructor(public listhotelService: ListhotelService) {
   }



  ngOnInit(): void {
  }
  getData() {
    this.listhotelService.getData()
      .subscribe(data => {
        this.listhotelServicelist = data.slice(0, 5);
        this.listhotelServicelist.forEach(element => {
          element.reviewOpen = false;
        });
      },
        error => {
          this.errorLoadingHotels = true;
        });

  }



}
