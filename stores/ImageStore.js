/*
* Module dependencies
*/

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions';

let ImageStore = Reflux.createStore({
  sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
  listenables: [ImageActions],
  imageList: [],

  init: function() {
    this.fetchList();
  },

  fetchList: function() {
    let tags = ['animals', 'nature', 'food', 'travel', 'cars', 'sport'];
    let randomTag = tags[Math.floor(Math.random() * tags.length)];

    $.ajax({
      url: this.sourceUrl + `&tag=${randomTag}`,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function(data) {
        console.log('fetch ok');
        this.imageList = data.items;
        this.trigger(this.imageList);
      }
    });
  }
});

export default ImageStore;
