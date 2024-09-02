import { Component } from '@angular/core';
import { from, throwError } from 'rxjs';

@Component({
  selector: 'app-using-rxjs-from',
  templateUrl: './using-rxjs-from.component.html',
  styleUrl: './using-rxjs-from.component.css'
})
export class UsingRxjsFromComponent {

  constructor() {}

  ngOnInit(): void {
  
    const favoriteColors = ['Red', 'Blue', 'Green', 'Purple', 'Yellow'];
    const colors$ = from(favoriteColors);
    const error$ = throwError(() => new Error('Something went wrong!'));
    colors$.subscribe({
      next: (color: string) => console.log(`Favorite Color: ${color}`), 
      error: (err) => console.log(`Error occurred: ${err.message}`),
      complete: () => console.log('All colors emitted, observable completed') 
    });
  }

}
