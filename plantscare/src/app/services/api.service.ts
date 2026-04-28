import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  SERVER_URL = 'http://localhost:3000';

  getPlants() {
    return fetch(`${this.SERVER_URL}/plants`).then(response => response.json());
  }

  getPlantById(id: number) {
    return fetch(`${this.SERVER_URL}/plants/${id}`).then(response => response.json());
  }

  createPlant(plant: any) {
    return fetch(`${this.SERVER_URL}/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plant)
    }).then(response => response.json());
  }

  editPlant(id: number, plant: any) {
    return fetch(`${this.SERVER_URL}/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plant)
    }).then(response => response.json());
  }

  deletePlant(id: number) {
    return fetch(`${this.SERVER_URL}/plants/${id}`, {
      method: 'DELETE'
    }).then(response => response.json());
  }

  getWaterings() {
    return fetch(`${this.SERVER_URL}/waterings`).then(response => response.json());
  }

  createWatering(watering: any) {
    return fetch(`${this.SERVER_URL}/waterings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(watering)
    }).then(response => response.json());
  }

  deleteWatering(id: number) {
    return fetch(`${this.SERVER_URL}/waterings/${id}`, {
      method: 'DELETE'
    }).then(response => response.json());
  }

  getStatistics() {
    return fetch(`${this.SERVER_URL}/statistics`).then(response => response.json());
  }

}
