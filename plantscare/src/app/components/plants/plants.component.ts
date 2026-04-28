import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent  implements OnInit {
  plants: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPlants().then(data => {
      this.plants = data;
    });
  }

  deletePlant(id: number) {
    this.apiService.deletePlant(id).then(() => {
      this.plants = this.plants.filter(plant => plant.id !== id);
    });
  }

  

}