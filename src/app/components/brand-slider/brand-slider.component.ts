import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-slider',
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.css']
})
export class BrandSliderComponent implements OnInit {

  brands:Brand[]=[]
  
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(response=>{
      this.brands=response.data;

    });
  }

}
