import React, {Component} from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import UserPage from '@/pages/UserPage';
import Product from '@/pages/Product';
// import Details from '@/pages/Details';
import LoginPage from '@/pages/LoginPage';
import _404Page from '@/pages/_404Page';
export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h1>RouterPage</h1>
        <BrowserRouter>
          <nav>
            <Link to="/">首页</Link> <Link to="/user">用户中心</Link>
          </nav>
          <Route exact path="/" component={HomePage} />
          <Route path="/user" component={UserPage} />
        </BrowserRouter>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">登录</Link>
          <Link to="/product/123">搜索</Link>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/product/:id" component={Product} />
            <Route component={_404Page} />
          </Switch>
        </Router>
      </div>
    );
  }
}
