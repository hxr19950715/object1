import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
// 调用包

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//调用ngmodel语法
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
