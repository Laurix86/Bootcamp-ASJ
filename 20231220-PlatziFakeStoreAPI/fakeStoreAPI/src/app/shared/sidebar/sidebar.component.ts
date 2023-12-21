import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  categorias = [];

    filterInput = {
        title:'',
        categoryId:'',
        price_min:'',
        price_max:'',
    }


    constructor(public productService: ProductsService, public router:Router){}

    ngOnInit(): void {
        this.listarCategorias();
    }

    listarCategorias(){
        this.productService.getCategories().subscribe(
            (res)=>{
                this.categorias=res;
            }
        )
    }

    filtrarProductos(form:NgForm){
        const filtro = Object.keys(form.value).map(keys=>{
            if(form.value[keys]!=""&&form.value[keys]!=null){
                return keys+"="+form.value[keys]
            }else{
                return ""
            }
        }).filter(keys=>keys!="").join("&");

        this.router.navigateByUrl('/productList/'+filtro);
    }

}
