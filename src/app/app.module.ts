import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Accordion, AccordionGroup} from './leftmenu/accordion';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { MenubarComponent } from './menubar/menubar.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    Accordion,
    AccordionGroup,
    LeftmenuComponent,
    MenubarComponent,
    UserdetailsComponent

  ],
  imports: [
    BrowserModule,
  //  AccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
