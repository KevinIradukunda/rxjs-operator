import { Component } from '@angular/core';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-using-rxjs-of',
  templateUrl: './using-rxjs-of.component.html',
  styleUrl: './using-rxjs-of.component.css'
})
export class UsingRxjsOfComponent {


  constructor() {}

  ngOnInit(): void {
    
    const numbers$ = of(1, 2, 3, 4, 5);
    const error$ = throwError(() => new Error('Something went wrong!'));
    numbers$.subscribe({
      next: (value: number) => console.log(`Emitted value: ${value}`), 
      error: (err) => console.log(`Error occurred: ${err.message}`), 
      complete: () => console.log('Observable completed') 
    });
  }
}
