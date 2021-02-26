import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import UserPage from '@/pages/UserPage';
export default class RouterPage extends Component {
  render() {
    return (
      <div>
        {' '}
        <h1>RouterPage</h1>{' '}
        <BrowserRouter>
          {' '}
          <nav>
            {' '}
            <Link to="/">首页</Link> <Link to="/user">用户中心</Link>{' '}
          </nav>{' '}
          {/* 根路由要添加exact，实现精确匹配 */}{' '}
          <Route exact path="/" component={HomePage} />{' '}
          <Route path="/user" component={UserPage} />{' '}
        </BrowserRouter>{' '}
      </div>
    );
  }
}
