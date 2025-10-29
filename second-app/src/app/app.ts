import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected remote1Message!:string;
 
  ngOnInit(): void {
    window.addEventListener('remote1Event', (event) => {
      
    })
  }
   ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
