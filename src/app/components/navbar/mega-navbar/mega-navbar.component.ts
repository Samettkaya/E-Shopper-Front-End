import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { faFire, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mega-navbar',
  templateUrl: './mega-navbar.component.html',
  styleUrls: ['./mega-navbar.component.css']
})
export class MegaNavbarComponent implements OnInit {
  categories:Category[]=[]
  faFire=faFire;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAllCategory()
  }
  getAllCategory(){
    this.categoryService.getAllCategory().subscribe(response=>{
      this.categories=response.data;

    });
  }
}
