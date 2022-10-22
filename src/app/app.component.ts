import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import  {trigger, transition, useAnimation}  from  "@angular/animations";
import  {rotateCubeToLeft,rotateCarouselToLeft,rotateCarouselToBottom,moveFromLeft,rotateFlipToTop}  from  "ngx-router-animations";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:  [
    trigger('rotateFlipToTop',  [ transition('*=>*', useAnimation(rotateFlipToTop))])
    ]
})
export class AppComponent {
  title = 'Notes Saver';
  public spinkit = Spinkit;
  getState(outlet:any)  {
		return outlet.activatedRouteData.state;
	}
}
