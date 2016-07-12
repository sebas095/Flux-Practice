/*
* Module dependencies
*/

import React from 'react';
import ReactDOM from 'react-dom';
import ImageGrid from '../components/ImageGrid';
import ImageActions from '../actions/ImageActions';

// 5 segundos: actualice!
setInterval(() => {
  ImageActions.fetchList();
}, 5000);

ReactDOM.render(
  <ImageGrid />,
  document.getElementById('container')
);
