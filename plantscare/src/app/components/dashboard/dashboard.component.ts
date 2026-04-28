import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  constructor(private apiService: ApiService) { }

  statistics: any[] = [];
  ngOnInit() {
    this.apiService.getStatistics().then(data => {
      this.statistics = data;
    });
  }

}
