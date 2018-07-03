import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductService} from '../../app/services/product.service';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  items: any;
  category: any;
  limit:any;
  constructor(public navCtrl: NavController, private productService:ProductService) {
    this.getDefaults();
  }

  ngOnInit(){
    this.getPosts(this.category, this.limit);
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

  getPosts(category, limit){
    this.productService.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }

  changeCategory(){
    this.getPosts(this.category, this.limit);
  }

}
