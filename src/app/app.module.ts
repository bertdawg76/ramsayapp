import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';

import 'hammerjs';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { CodeEthicsComponent } from './code-ethics/code-ethics.component';
import { AdditionalComponent } from './additional/additional.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpertiseComponent,
    FooterComponent,
    AboutMeComponent,
    NavComponent,
    ContactComponent,
    CarouselComponent,
    ModalComponent,
    CodeEthicsComponent,
    AdditionalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
      MaterialModule,
      BrowserAnimationsModule,
      NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
