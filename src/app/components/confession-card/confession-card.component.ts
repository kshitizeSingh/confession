import {Component, OnInit} from '@angular/core';
import {ConfessionService} from 'src/app/services/confession.service';

@Component({
  selector: 'app-confession-card',
  templateUrl: './confession-card.component.html',
  styleUrls: ['./confession-card.component.css']
})
export class ConfessionCardComponent implements OnInit {
  confessions: any[];
  constructor(private confessionService: ConfessionService) {}

  ngOnInit() {
    this.getAllConfession();
  }
  getAllConfession() {
    this.confessionService.getAllConfessions().subscribe(confession => {
      this.confessions = confession;
      console.log(confession);
    });
  }

  like(confession) {
    console.log(confession);
    const likeRequest = {
      id: confession._id,
      user: localStorage.getItem('confessionKarneWaleKaNaam')
    };
    this.confessionService.like(likeRequest).subscribe(
      liked => {
        console.log(liked);
      },
      error => {}
    );
  }
}
