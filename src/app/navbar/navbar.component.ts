import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count: number = 0;

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.service.currentCount.subscribe(count => this.count = count);
  }

  @Output() addCard = new EventEmitter<void>();
  @Output() deleteCard = new EventEmitter<void>();

  onAddCard(): void {
    this.addCard.emit();
  }

  onDeleteCard(): void {
    this.deleteCard.emit();
  }

  

}
