import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../interfaces/job';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { JobviewComponent } from '../jobview/jobview.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, JobviewComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favoritesJob!:Job[] | null
  constructor(private jobService:JobsService){

  }
  ngOnInit(): void {
    this.jobService.getFavoriteJobs().subscribe((data:Job[])=>{this.favoritesJob=data});
  }
}
