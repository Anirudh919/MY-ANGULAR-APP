import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private count = new BehaviorSubject<number>(0);
  currentCount = this.count.asObservable();

  constructor(private Https:HttpClient) { }

  getData(){
    return this.Https.get('https://jsonplaceholder.typicode.com/posts');
  }

  updateCount(newCount: number) {
    this.count.next(newCount);
  }
}
