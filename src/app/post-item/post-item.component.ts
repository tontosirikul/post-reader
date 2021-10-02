import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output() hidePost: EventEmitter<Post> = new EventEmitter();
  @Output() updateTotalvotes: EventEmitter<Post> = new EventEmitter();
  constructor() {
    this.post = {
      id: 1,
      title: '',
      body: '',
      votes: 1,
    };
  }

  ngOnInit(): void {}

  upvote(post: Post): void {
    post.votes += 1;
    this.updateTotalvotes.emit(post);
  }

  downvote(post: Post): void {
    post.votes -= 1;
    this.updateTotalvotes.emit(post);
  }
  hide(post: Post): void {
    this.hidePost.emit(post);
  }
}
