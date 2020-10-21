import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  moviesDB:any[]=[];
  section=1
  title: string = "";
  year: number =0;
  movieId: string = "";

  actorsDB: any[] = [];
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";

  constructor(private dbService:DatabaseService,private router: Router) { }
  //get list of movies
  onGetMovies(){
    this.dbService.getMovies().subscribe((data:any[])=>{
      this.moviesDB=data;
    });
    
  };

  //Get all Actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  };

  //add a actor to movie 
  onAddActortoMovie(){
    const obj = {movieId:this.movieId,actorId:this.actorId};
    console.log(obj);
    this.dbService.addActortoMovie(obj).subscribe(result=>{
      this.onGetActors();
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
   
    })
     };

  ngOnInit(): void {
    this.onGetActors();
    this.onGetMovies();
  }

}
