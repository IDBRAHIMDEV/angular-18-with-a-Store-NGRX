import { BlogState, Blog } from './blog.model';

export const initBlogState: BlogState = {
  list: [
    {
      title: 'Learn Django L1',
      thumbnail:
        'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/PU65W4VzTB205p8JT7PG',
      description: 'description of this article',
      id: 1,
    },
    {
      title: 'Learn Python',
      thumbnail:
        'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/TZLXpJ9ORhmBgJUs1v5A',
      description: 'description of this article python',
      id: 2,
    },
  ],
  article: {} as Blog,
  errorMessage: '',
};
