import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LikednotesComponent } from '../likednotes/likednotes.component';
import { AuthService } from '../services/auth.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private http: HttpClient, private notesService: NotesService, private authService: AuthService) { }
  notesData: any = [];
  colorsList = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'];
  resData: any = [];
  reverseData: any = [];
  favnotes:number = 0;
  ngOnInit(): void {
    this.getNotes();
  }


  getNotes() {
    var userId = localStorage.getItem('userId');
    this.notesService.getNotes(userId).subscribe(
      (res:any) => {
        var notes: any = res.result;
        //pushing color as an key:value into the notes array
        for (const index in notes) {
          let color = Math.floor(Math.random() * 10);
          this.notesData.push({ ...notes[index], id: index, color: this.colorsList[color],updatedAt: new Date(notes[index]?.updatedAt).toLocaleString() });
        }
        //reversing the notes data to display the recent created notes first
        this.reverseData = this.notesData.reverse();
        this.favnotes = this.notesData.filter((x:any) => x.isFav == true).length;
      }
    )
  }
  /**
   * the main aim of this function is to make a note favourite and non-favourite among the list of notes
   */
  setLikes(favType: any,noteid: any) {
    if (favType == 'unlike') {
      const resBody = {isFav:false};
      this.notesService.updateNote(noteid,resBody).subscribe(res => {
        this.notesData = [];
        this.reverseData = [];
        this.favnotes = 0;
        this.getNotes();
      }, err => {
        console.log(err)
      })
    } else if (favType == 'like') {
      const resBody = {isFav:true};
      this.notesService.updateNote(noteid,resBody).subscribe(res => {
        this.notesData = [];
        this.reverseData = [];
        this.favnotes = 0;
        this.getNotes();
      }, err => {
        console.log(err)
      })
    }
  }
}
