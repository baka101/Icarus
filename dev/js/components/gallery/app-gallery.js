var React = require("react");
var AppActions = require("../../actions/app-actions");
var GalleryStore = require("../../stores/app-galleryStore");
var GalleryPhoto = require("./gallery-photo");
var GalleryHeader = require("./gallery-header");
var AuthStore = require("../../stores/app-authStore");

var getPhotosAndTags = function(){
  // TODO: retrieve photo requests from server
  return {photos: GalleryStore.getAllPhotos(),
          tags: GalleryStore.getAllTags()
          };
};

var Gallery = React.createClass({
  getInitialState: function(){
    return getPhotosAndTags();
  },

  statics: {
    willTransitionTo: function(transition, params, element) {
      console.log('will transition to app-gallery');
      if (params.tagName) {
        console.log('get photos for tag: ', params.tagName);
        AppActions.getPhotosForTag(params.tagName);
        AppActions.getAllTags();
      } else {
        console.log('get all photos');
        AppActions.getAllPhotos();
        AppActions.getAllTags();
      }
    }
  },

  _onChange: function () {
    console.log('change triggered: firing _onChange in app-gallery');
    this.setState(getPhotosAndTags());
  },

  componentDidMount: function() {
    console.log('mounted gallery');
    GalleryStore.addChangeListener(this._onChange);
    if (this.props.params.tagName) {
      console.log('get photos for tag: ', this.props.params.tagName);
      AppActions.getPhotosForTag(this.props.params.tagName);
      AppActions.getAllTags();
    } else {
      console.log('get all photos');
      AppActions.getAllPhotos();
      AppActions.getAllTags();
    }
  },
  componentWillUnmount: function() {
    GalleryStore.removeChangeListener(this._onChange);
  },
  render: function(){
    var photos = [];
    var list = this.state.photos;
    var count = 0;
    for (var key in list) {
      photos.push(<GalleryPhoto key={key} count={count} data={list[key]} />);
      count++;
    }

    console.log('Tags in app-gallery state: ', this.state.tags);

    return (
      <div className = "gallery col-xs-8">
        <GalleryHeader data={this.state.tags}/>
        <div>
          {photos}
        </div>
      </div>
    );
  }
});

module.exports = Gallery;