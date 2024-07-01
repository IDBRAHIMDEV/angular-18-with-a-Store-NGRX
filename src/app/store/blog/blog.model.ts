export interface Blog {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

export interface BlogState {
  list: Blog[];
  article: Blog;
}
