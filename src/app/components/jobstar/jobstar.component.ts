import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../interfaces/job';

@Component({
  selector: 'app-jobstar',
  standalone:true,
  templateUrl: './jobstar.component.html',
  styleUrls: ['./jobstar.component.css']
})
export class JobstarComponent implements OnInit {
  fill_color: string = "none";
  isFavorite: boolean = false;
  @Input() job!: Job;

  ngOnInit(): void {
    this.initializeLocalStorage();
    this.loadFavoritesFromLocalStorage();
  }

  private initializeLocalStorage(): void {
    const favoritesJobs = localStorage.getItem("jobs");
    console.log(favoritesJobs);
    if (!favoritesJobs) {
      localStorage.setItem("jobs", JSON.stringify([]));
    }
  }

  private loadFavoritesFromLocalStorage(): void {
    const favoritesJobs = this.getFavoritesFromLocalStorage();
    this.isFavorite = favoritesJobs.includes(this.job.id);
    this.fill_color = this.isFavorite ? "gold" : "none";
  }

  public addToFavorites(id:number): void {
    this.isFavorite = !this.isFavorite;

    let favoritesJobs: number[] = this.getFavoritesFromLocalStorage();
    if (this.isFavorite) {
      favoritesJobs.push(id);
    } else {
      favoritesJobs = favoritesJobs.filter(id => id !== this.job.id);
    }
    localStorage.setItem("jobs", JSON.stringify(favoritesJobs));
    this.fill_color = this.isFavorite ? "gold" : "none";
  }

  private getFavoritesFromLocalStorage(): number[] {
    const storedFavorites = localStorage.getItem("jobs");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }
}