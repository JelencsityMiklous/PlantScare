import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plants-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './plants-form.component.html',
  styleUrl: './plants-form.component.scss'
})
export class PlantsFormComponent implements OnInit{

  plantName: string = '';
  plantSpecies: string = '';
  plantWatering: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPlants().then(data => {
      console.log(data);
    });
  }

  addPlant(name: string, species: string, watering: number) {
    const newPlant = { name, species, watering };
    this.apiService.createPlant(newPlant).then(() => {
      console.log('Plant added successfully');
    });
  }

}
