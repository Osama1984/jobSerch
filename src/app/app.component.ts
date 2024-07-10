import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsService } from './services/jobs.service';
import { Job } from './interfaces/job';
import { CommonModule } from '@angular/common';
import { TabsComponent } from "./components/tabs/tabs.component";
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TabsComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ng-job-search';
  ngOnInit(): void {
    
  }
}
