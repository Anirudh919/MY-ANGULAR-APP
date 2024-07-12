import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //  data !: any[];

  constructor(private service:ServicesService){

  }

  cards: any[] = [];

  addCard(): void {
    const newCard = this.cards.length + 1;
    this.cards.push(newCard);
  }

  deleteCard(): void {
    this.cards.pop();
  }

  ngOnInit(): void {
    //   this.service.getData().subscribe((data:any)=>{
    //     console.log(data);
    //     this.data=data; 
    //   },
    
    // )
  }

}
