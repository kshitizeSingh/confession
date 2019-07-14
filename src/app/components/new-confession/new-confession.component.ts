import {Component, OnInit} from '@angular/core';
import {ConfessionService} from 'src/app/services/confession.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-confession',
  templateUrl: './new-confession.component.html',
  styleUrls: ['./new-confession.component.css']
})
export class NewConfessionComponent implements OnInit {
  constructor(
    private confessionService: ConfessionService,
    private router: Router
  ) {}

  confession: any = {};

  ngOnInit() {
    this.confession.text = 'i am not in the mood to confess today';
    this.confession.user = 'Bakchod Launda';
  }

  addConfession() {
    this.confession.postedOn = new Date();
    console.log(this.confession);
    this.confessionService
      .addConfessions(this.confession)
      .subscribe(success => {
        console.log('success', success);

        this.router.navigate(['/confession/' + success._id]);
      });
  }
}
