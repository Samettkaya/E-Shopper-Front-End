import { Component, OnInit } from '@angular/core';
import { faHeart, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser= faUser;
  faHeart=faHeart;
  faShoppingBasket=faShoppingBasket;
  constructor() { }

  ngOnInit(): void {
  }

}
