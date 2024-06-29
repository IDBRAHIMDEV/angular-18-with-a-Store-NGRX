import { createReducer, on } from '@ngrx/store';
import { initBlogState } from './blog.state';
import { addArticle, loadArticles, loadOneArticle } from './blog.actions';

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
      article: state.list.find((item) => item.id === action.id),
    };
  })
);

export const blogSlice = {
  name: 'blog',
  reducer: blogReducer,
};
