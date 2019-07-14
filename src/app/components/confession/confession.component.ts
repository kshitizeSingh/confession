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
  newComment: any = 'meri santvana tumhare sath hai';

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

  like() {
    const likeRequest = {
      id: this.confessionId,
      user: 'lucky'
    };
    this.confessionService
      .like(likeRequest)
      .subscribe(success => {}, error => {});
  }

  addComment() {
    console.log(this.newComment, this.confession);
    const newCommentRequest = {
      id: this.confessionId,
      newComment: {
        user: 'testUser',
        comment: this.newComment,
        date: new Date(),
        likes: []
      }
    };
    this.confessionService.addComment(newCommentRequest).subscribe(response => {
      console.log(response);
      this.confession.comments.push(newCommentRequest.newComment);
    });
  }
}
