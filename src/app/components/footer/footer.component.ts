import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {  

  categories:Category[]=[]

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
