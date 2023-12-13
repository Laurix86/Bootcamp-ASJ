import { Component } from '@angular/core';
import {faBook, faCat} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {
  linkedin = "https://linkedin.com/in/laurix86";
  github = "https://github.com/Laurix86";
  iconLkd = faBook;
  iconGit = faCat;
  
}
