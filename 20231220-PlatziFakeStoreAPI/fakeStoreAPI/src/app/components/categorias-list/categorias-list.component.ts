import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit{
  idChar = this.route.snapshot.paramMap.get("product-id") || "-1";

  constructor(private service:CategoryService, private route:ActivatedRoute){ }

  category:any={};

  ngOnInit(): void {
    console.log(this.idChar)
    //this.service.getCategories().subscribe(data=>this.category=data )
    
  }
}
