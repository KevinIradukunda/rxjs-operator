import { Component } from '@angular/core';
import { concat, from, of, throwError } from 'rxjs';

@Component({
  selector: 'app-combine-operators',
  templateUrl: './combine-operators.component.html',
  styleUrl: './combine-operators.component.css'
})
export class CombineOperatorsComponent {

  constructor() {}

  ngOnInit(): void {
    const numbers$ = of(10, 20, 30);
    const colors$ = from(['Red', 'Green', 'Blue']);
    const error$ = throwError(() => new Error('Something went wrong!'));

    const combined$ = concat(numbers$, colors$, error$);

    combined$.subscribe({
      next: (value) => console.log(`Emitted value: ${value}`), 
      error: (err) => console.log(`Error occurred: ${err.message}`),
      complete: () => console.log('All values emitted, combined observable completed')
    });
  }

}
