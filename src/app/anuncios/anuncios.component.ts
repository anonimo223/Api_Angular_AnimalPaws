import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  url_images: any [any];

  constructor(private dataService: DataService) {
    this.url_images = [];
  }
  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data) => {
        this.url_images = data;
        console.log(data);
    });
  }

}
