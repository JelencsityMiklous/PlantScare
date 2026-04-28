import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-waterings',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './waterings.component.html',
  styleUrl: './waterings.component.scss'
})
export class WateringsComponent implements OnInit {
  waterings: any[] = [];
  plants: any[] = [];
  selectedPlantId: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getWaterings().then(data => {
      console.log(data);
    });
    this.apiService.getPlants().then(data => {
      this.plants = data;
    });
  }

  addWatering(plantId: number, amount: number) {
    const newWatering = { plantId, amount };
    this.apiService.createWatering(newWatering).then(() => {
      console.log('Watering added successfully');
    });
  }

  deleteWatering(id: number) {
    this.apiService.deleteWatering(id).then(() => {
      console.log('Watering deleted successfully');
    });
  }
}