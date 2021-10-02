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
    this.postService.getPosts().subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
        const post = res[index];
        post['votes'] = 0;
      }
      this.posts = res;
      this.totalVotes = this.totalVotes = this.posts.reduce(
        (a, b) => +a + +b.votes,
        0
      );
    });
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.title !== post.title);
  }

  updateTotalvotes(post: Post): void {
    this.totalVotes = this.posts.reduce((a, b) => +a + +b.votes, 0);
  }

  addPost(post: Post): void {
    this.posts.unshift(post);
    alert('post added');
  }
}
