import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
  idChar = this.route.snapshot.paramMap.get("product-id") || "-1";

  constructor(private service:ProductsService, private route:ActivatedRoute){ }

  producto:any={};

  ngOnInit(): void {
    console.log(this.idChar)
    this.service.getSingleProduct(+this.idChar).subscribe(data=>this.producto=data )
    
  }

}
