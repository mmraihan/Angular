import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { FormsModule } from '@angular/forms';


const routes: Routes=[
  {path: 'about-us', component: AboutUsComponent},
  {path: 'how-it-works', component: HowItWorksComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HowItWorksComponent,
    ProductListComponent,
    ProductInfoComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
