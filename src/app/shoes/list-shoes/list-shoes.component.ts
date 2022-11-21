import { Component, OnInit } from '@angular/core';
import { ServiceProduitService } from 'src/app/service-produit.service';
import { LISt_SHOES } from '../LISTSHOES';
import { SHOES } from '../shoes/SHOES';

@Component({
  selector: 'app-list-shoes',
  templateUrl: './list-shoes.component.html',
  styleUrls: ['./list-shoes.component.css']
})
export class ListShoesComponent implements OnInit {
  shoesList: SHOES [] = [];
  constructor(private produits : ServiceProduitService) { }

  ngOnInit(): void {
    this.produits.getShoes().subscribe((rep) => this.shoesList = rep)
  }

}
