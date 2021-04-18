import { Component } from '@angular/core';
import {ListhotelService} from './listhotel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-app';
  constructor(private list:ListhotelService){

    this.list.getData().subscribe(data=>{
      console.warn(data);
    })
  }
}
