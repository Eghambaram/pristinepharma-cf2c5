import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductService} from '../../app/services/product.service';
import {ProductsPage} from '../products/products';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit:any;
  constructor(public navCtrl: NavController, private productService:ProductService) {
    this.getDefaults();
  }

  getDefaults(){
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }

    if(localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }
  }

  setDefaults(){
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(ProductsPage);
  }

}
