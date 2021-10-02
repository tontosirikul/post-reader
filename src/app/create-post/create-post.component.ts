import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/Post';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  post: Post = {
    title: '',
    body: '',
    votes: 0,
  };

  @Output() addPost: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitform(): void {
    const new_post = {
      title: this.post.title,
      body: this.post.body,
      votes: this.post.votes,
    };

    this.addPost.emit(new_post);

    this.post.title = '';
    this.post.body = '';
    this.post.votes = 0;
  }
}
