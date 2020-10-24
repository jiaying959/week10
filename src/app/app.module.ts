import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddactorComponent } from './addactor/addactor.component';
import { ListactorsComponent } from './listactors/listactors.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { AddactortomovieComponent } from './addactortomovie/addactortomovie.component';
import { DeletemoviebeforeyearComponent } from './deletemoviebeforeyear/deletemoviebeforeyear.component'

const week10Routes:Routes=[
  {path:'addactor',component:AddactorComponent},
  {path:'deleteactor',component:DeleteactorComponent},
  {path:'updateactor',component:UpdateactorComponent},
  {path:'listactors',component:ListactorsComponent},
  {path:'addmovie',component:AddmovieComponent},
  {path:'deletemovie',component:DeletemovieComponent},
  {path:'addactortomovie',component:AddactortomovieComponent},
  {path:'listmovies',component:ListmoviesComponent},
  {path:'deletemoviebeforeyear', component:DeletemoviebeforeyearComponent},
  {path:'viewnotfound',component:ViewnotfoundComponent},
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: '**', redirectTo: "/viewnotfound",pathMatch: "full" }
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddactorComponent,
    ListactorsComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    ListmoviesComponent,
    DeletemovieComponent,
    ViewnotfoundComponent,
    AddactortomovieComponent,
    DeletemoviebeforeyearComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(week10Routes,{useHash:true})
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
