import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}
  getPosts(): Post[] {
    return [
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
  }
}
