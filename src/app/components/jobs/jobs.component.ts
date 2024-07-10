import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../interfaces/job';
import { JobviewComponent } from "../jobview/jobview.component";
import { JobstarComponent } from '../jobstar/jobstar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobviewComponent, CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  jobs!:Job[];
  constructor(private jobService:JobsService){  
  }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((data:Job[])=>{
      this.jobs = data;
    })
  }

}
