import React, { Component } from 'react';

class PostPreview extends Component {
  render() {
    return(
      <div className="box">
        {this.props.name}
      </div>
    )
  }
}

export default PostPreview;
