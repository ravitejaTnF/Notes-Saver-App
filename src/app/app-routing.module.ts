import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthtwoGuard } from './helpers/authtwo.guard';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { SampleNotesComponent } from './sample-notes/sample-notes.component';
import { SampleNotesDetailsComponent } from './sample-notes-details/sample-notes-details.component';
import { LikednotesComponent } from './likednotes/likednotes.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AuthtwoGuard],data:{state:'login'}},
  {path:'signup',component:SignupComponent,canActivate:[AuthtwoGuard],data:{state:'signup'}},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'view-notes',component:NotesListComponent,canActivate:[AuthGuard],data:{state:'viewnotes'}},
  {path:'add-notes',component:AddNotesComponent,canActivate:[AuthGuard],data:{state:'addnotes'}},
  {path:'edit-notes/:noteId',component:EditNotesComponent,canActivate:[AuthGuard],data:{state:'editnotes'}},
  {path:'sample-notes/:id',component:SampleNotesDetailsComponent,data:{state:'samplenotesdetails'}},
  {path:'sample-notes',component:SampleNotesComponent,data:{state:'samplenotes'}},
  {path:'favourites',component:LikednotesComponent,canActivate:[AuthGuard],data:{state:'favourites'}},
  {path:'note-details/:id',component:NoteDetailsComponent,data:{state:'notesdetails'}},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
