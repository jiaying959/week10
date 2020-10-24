import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-deletemoviebeforeyear',
  templateUrl: './deletemoviebeforeyear.component.html',
  styleUrls: ['./deletemoviebeforeyear.component.css']
})
export class DeletemoviebeforeyearComponent implements OnInit {
  moviesDB: any[] = [];
  year: number =0;
  constructor(private dbService:DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetMovies();
  }
  //get list of movies
  onGetMovies(){
    this.dbService.getMovies().subscribe((data:any[])=>{
      this.moviesDB=data;
    });
    
  }

  //delete movie before a year 
  onDeleteMovieBeforeYear(){
    this.dbService.deleteMovieBeforeYear(this.year).subscribe(result => {
    this.onGetMovies();
    this.router.navigate(["/listmovies"]);
    });
  }

}
