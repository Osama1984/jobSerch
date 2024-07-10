import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../interfaces/job';
import { JobsService } from '../../services/jobs.service';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-jobpage',
  standalone:true,
  providers:[SafeHtmlPipe],
  imports:[CommonModule],
  templateUrl: './jobpage.component.html',
  styleUrls: ['./jobpage.component.css']
})
export class JobpageComponent implements OnInit {
  job: Job | null = null;
  error: string | null = null;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobsService.getJobById(jobId).then(
      (job: Job | undefined) => {
        if (job) {
          this.job = job;
        } else {
          this.error = 'Job not found';
        }
      },
      (error) => {
        this.error = 'Error fetching job details: ' + error.message;
        console.error(this.error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
}