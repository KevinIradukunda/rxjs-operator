import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingRxjsOfComponent } from './using-rxjs-of/using-rxjs-of.component';
import { UsingRxjsFromComponent } from './using-rxjs-from/using-rxjs-from.component';
import { UsingRxjsIntervalComponent } from './using-rxjs-interval/using-rxjs-interval.component';
import { CombineOperatorsComponent } from './combine-operators/combine-operators.component';
import { AdvancedErrorHandlingComponent } from './advanced-error-handling/advanced-error-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingRxjsOfComponent,
    UsingRxjsFromComponent,
    UsingRxjsIntervalComponent,
    CombineOperatorsComponent,
    AdvancedErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
