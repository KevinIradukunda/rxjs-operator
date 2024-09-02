import { Component } from '@angular/core';
import { catchError, concat, of, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-advanced-error-handling',
  templateUrl: './advanced-error-handling.component.html',
  styleUrl: './advanced-error-handling.component.css'
})
export class AdvancedErrorHandlingComponent {

  constructor() {}

  ngOnInit(): void {
    
    const values$ = of(1, 2, 3);
    const error$ = throwError(() => new Error('Simulated error occurred!'));
    const combined$ = concat(values$, error$).pipe(
      retry(2),
      catchError((err) => {
        console.log(`Error occurred after retries: ${err.message}`);
        return of('Recovered Value'); 
      })
    );

    combined$.subscribe({
      next: (value) => console.log(`Emitted value: ${value}`),
      complete: () => console.log('Observable completed with error recovery')
    });
  }

}
