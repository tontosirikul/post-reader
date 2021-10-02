import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  title: string = 'Welcome to Posts';
  posts: Post[] = [];
  totalVotes!: number;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.totalVotes = this.totalVotes = this.posts.reduce(
      (a, b) => +a + +b.votes,
      0
    );
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  updateTotalvotes(post: Post): void {
    this.totalVotes = this.posts.reduce((a, b) => +a + +b.votes, 0);
  }
}
