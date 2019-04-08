import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyBirthdayComponent } from './my-birthday/my-birthday.component';
import { MyExponentialComponent } from './my-exponential/my-exponential.component';
import {ExponentialStrengthPipe} from './my-exponential/exponential-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyBirthdayComponent,
    MyExponentialComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
