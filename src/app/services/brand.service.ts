import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Brand } from '../models/Brand';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44314/api/";

  constructor(private httpClient:HttpClient) { }

  getAllBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"brands/getall")
  }
}
