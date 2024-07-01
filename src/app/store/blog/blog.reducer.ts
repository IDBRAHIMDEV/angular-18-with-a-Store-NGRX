import { createReducer, on } from '@ngrx/store';
import { initBlogState } from './blog.state';
import {
  addArticle,
  deleteArticle,
  loadArticles,
  loadOneArticle,
  updateArticle,
} from './blog.actions';
import { Blog } from './blog.model';

const blogReducer = createReducer(
  initBlogState,
  on(loadArticles, (state, action) => {
    return {
      ...state,
      list: action.list,
    };
  }),
  on(addArticle, (state, action) => {
    console.log(action.article);
    return {
      ...state,
      list: [action.article, ...state.list],
    };
  }),
  on(loadOneArticle, (state, action) => {
    return {
      ...state,
      article: action.article,
    };
  }),
  on(updateArticle, (state, action) => {
    return {
      ...state,
      list: state.list.map((item) =>
        item.id === action.article.id ? action.article : item
      ),
      article: {} as Blog,
    };
  }),
  on(deleteArticle, (state, action) => {
    return {
      ...state,
      list: state.list.filter((item) => item.id !== action.id),
    };
  })
);

export const blogSlice = {
  name: 'blog',
  reducer: blogReducer,
};
