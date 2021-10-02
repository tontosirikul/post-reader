import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts?_limit=8'
    );
    // return [
    //   {
    //     id: 1,
    //     title: 'My first post',
    //     body: 'Just testing this out',
    //     votes: 1,
    //   },
    //   {
    //     id: 2,
    //     title: 'My pet',
    //     body: 'Just testing this out',
    //     votes: 1,
    //   },
    //   {
    //     id: 3,
    //     title: 'My car',
    //     body: 'Just testing this out',
    //     votes: 1,
    //   },
    // ];
  }
}
