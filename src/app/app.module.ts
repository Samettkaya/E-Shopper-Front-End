import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandComponent } from './components/brand/brand.component';
import { CategoryComponent } from './components/category/category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MegaNavbarComponent } from './components/navbar/mega-navbar/mega-navbar.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { SloganComponent } from './components/slogan/slogan.component';
import { HerouselComponent } from './components/herousel/herousel.component';
import { NextDirective } from './directive/next.directive';
import { PrevDirective } from './directive/prev.directive';
import { CargoComponent } from './components/cargo/cargo.component';
import { LowPricedProductsComponent } from './components/low-priced-products/low-priced-products.component';
import { NextProductDirective } from './directive/next-product.directive';
import { PrevProductDirective } from './directive/prev-product.directive';
import { FooterComponent } from './components/footer/footer.component';
import { BrandSliderComponent } from './components/brand-slider/brand-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NavbarComponent,
    CategoryComponent,
    MegaNavbarComponent,
    SloganComponent,
    HerouselComponent,
    NextDirective,
    PrevDirective,
    CargoComponent,
    LowPricedProductsComponent,
    NextProductDirective,
    PrevProductDirective,
    FooterComponent,
    BrandSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    CarouselModule,
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
