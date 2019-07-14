import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfessionService} from 'src/app/services/confession.service';

@Component({
  selector: 'app-confession',
  templateUrl: './confession.component.html',
  styleUrls: ['./confession.component.css']
})
export class ConfessionComponent implements OnInit {
  confessionId;
  confession: any;

  constructor(
    private route: ActivatedRoute,
    private confessionService: ConfessionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => {
      this.confessionId = parms.id;
      this.confessionService
        .getConfessionById(this.confessionId)
        .subscribe(confession => {
          this.confession = confession;
        });
    });
  }
}
