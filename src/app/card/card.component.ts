import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardNumber!: any[];
  // data!:any[];
  constructor(private service:ServicesService) { }

  ngOnInit(): void {
     
  }

  addCount() {
    this.service.currentCount.subscribe(count => {
      this.service.updateCount(count + 1);
    });
  }

}
