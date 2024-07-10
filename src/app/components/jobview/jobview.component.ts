import { Component, Input } from '@angular/core';
import { Job } from '../../interfaces/job';
import { CommonModule } from '@angular/common';
import { JobstarComponent } from "../jobstar/jobstar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobview',
  standalone: true,
  imports: [CommonModule, JobstarComponent],
  templateUrl: './jobview.component.html',
  styleUrl: './jobview.component.css'
})
export class JobviewComponent {
  @Input() job!:Job;
  constructor(private router:Router){}
  redirectToJobPage(job: Job): void {
    this.router.navigate(['job', job.id], { state: { job } });
  }
  isOnFavoritesPage(): boolean {
    return this.router.url.includes('/favorites');
  }
}
