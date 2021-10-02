import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  title: string = 'Posts';
  posts: Post[] = [];
  totalVotes!: number;
  constructor() {}

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'My first post',
        body: 'Just testing this out',
        votes: 1,
      },
      {
        id: 2,
        title: 'My pet',
        body: 'Just testing this out',
        votes: 1,
      },
      {
        id: 3,
        title: 'My car',
        body: 'Just testing this out',
        votes: 1,
      },
    ];
    this.totalVotes = this.posts.reduce((a, b) => +a + +b.votes, 0);
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  updateTotalvotes(post: Post): void {
    this.totalVotes = this.posts.reduce((a, b) => +a + +b.votes, 0);
  }
}
