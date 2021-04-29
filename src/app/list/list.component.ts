import { Component, OnInit } from '@angular/core';
import { ListhotelService } from '../listhotel.service';
import { ReviewService } from '../review.service';

import { MatAccordion } from '@angular/material/expansion';
import { from } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  hotelList: any;
  reviewServicelist: any;
  errorLoadingHotels: boolean = false;
  constructor(public listhotelService: ListhotelService, public reviewService: ReviewService) {
   }



  ngOnInit(): void {
  }
  getData() {
    this.listhotelService.getData()
      .subscribe(data => {
        console.log(data);
        this.errorLoadingHotels = false;
        this.hotelList = data.slice(0, 5);
        this.hotelList.forEach(element => {
          element.reviewOpen = false;
          element.reviews = [];
        });
      },
        error => {
          console.log(error);
          this.errorLoadingHotels = true;
        });

  }

  getReview(hotel) {
    if( !hotel.reviewOpen ){
      hotel.reviewOpen = !hotel.reviewOpen;
      return;
    }
    this.reviewService.getReview(hotel.id)
      .subscribe(data => {
        hotel.reviews = data;
        hotel.reviewOpen = !hotel.reviewOpen;
      },
        error => {
          console.log(error);
        });

  }

}
