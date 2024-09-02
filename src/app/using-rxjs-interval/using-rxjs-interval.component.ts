import { Component } from '@angular/core';
import { interval, take, throwError } from 'rxjs';

@Component({
  selector: 'app-using-rxjs-interval',
  templateUrl: './using-rxjs-interval.component.html',
  styleUrl: './using-rxjs-interval.component.css'
})
export class UsingRxjsIntervalComponent {

  constructor() {}

  ngOnInit(): void {
    const interval$ = interval(1000).pipe(
      take(5) 
    );
    const error$ = throwError(() => new Error('Something went wrong!'));
    interval$.subscribe({
      next: (value: number) => console.log(`Emitted value: ${value}, Timestamp: ${new Date().toLocaleTimeString()}`),
      error: (err) => console.log(`Error occurred: ${err.message}`), 
      complete: () => console.log('Interval completed, observable has emitted 5 values') 
    });
  }

}
