import {Component, OnInit, ɵConsole} from '@angular/core';
import {ConfessionService} from 'src/app/services/confession.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userName;
  name;

  constructor(private dataSharService: ConfessionService) {}

  ngOnInit() {
    if (!localStorage.getItem('confessionKarneWaleKaNaam')) {
      this.getUserName();
    } else {
      this.name = localStorage.getItem('confessionKarneWaleKaNaam');
    }
  }

  getUserName() {
    this.dataSharService.getName().subscribe(username => {
      // let user=JSON.parse(username)
      this.userName = username;
      this.name = this.userName.name + ' ' + this.userName.surname;
      localStorage.setItem('confessionKarneWaleKaNaam', this.name);
    });
  }
}
