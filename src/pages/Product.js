import React from 'react';
import {Route, Link} from 'react-router-dom';
import Detail from './Detail';
export default function Product({match}) {
  const {params, url} = match;
  const {id} = params;
  return (
    <div>
      <h1>Search-{id}</h1> <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail'} component={Detail} />
    </div>
  );
}
