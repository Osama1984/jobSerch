import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private jobsSubject: BehaviorSubject<Job[]> = new BehaviorSubject<Job[]>([]);
  private jobSubject: BehaviorSubject<Job | undefined> = new BehaviorSubject<Job | undefined>(undefined);
  private favoritesJobs: number[] = [];

  constructor(private http: HttpClient) {
    this.fetchJobsFromServer();
    this.loadFavoritesFromLocalStorage();
  }

  private fetchJobsFromServer(): void {
    this.http.get<Job[]>('/jobs').pipe(
      catchError((error) => {
        console.error('Error fetching jobs:', error);
        return [];
      })
    ).subscribe((data: Job[]) => {
      this.jobsSubject.next(data);
    });
  }

  private loadFavoritesFromLocalStorage(): void {
    const favoritesJobsFromLocalStorage = localStorage.getItem('jobs');
    this.favoritesJobs = favoritesJobsFromLocalStorage ? JSON.parse(favoritesJobsFromLocalStorage) : [];
  }

  public getAllJobs(): BehaviorSubject<Job[]> {
    return this.jobsSubject;
  }

  public getFavoriteJobs(): Observable<Job[]> {
    this.loadFavoritesFromLocalStorage();
    return this.getAllJobs().pipe(
      map((jobs: Job[]) => jobs.filter(job => this.favoritesJobs.includes(job.id)))
    );
  }

  public async getJobById(id: number): Promise<Job | undefined> {
    try {
      const data = await this.http.get<Job>(`/jobs/${id}`).toPromise();
      this.jobSubject.next(data);
      return data;
    } catch (error) {
      console.error('Error fetching job:', error);
      return undefined;
    }
  }
}