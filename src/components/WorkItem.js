import React, { Component } from 'react';



class WorkItem extends Component {
  render() {
    const {company, position, time, logo, intro, listItems} = this.props.item;
    var image = require(`../images/${logo}`);
    return(
      <article className='media'>
        <figure className='media-left' style={{marginLeft: '0px'}}>
          <p className='image is-32x32'>
            <img src={image}/>
          </p>
        </figure>
        <div className='media-content'>
          <div className='content'>
            <h4 className='subtitle is-5'> {position} | {company} </h4>
            <small>{time}</small>
            <p>
              {intro?<span>{intro}</span>:''}
              {listItems?listItems.map((content, i) => <span key={i} className='li-item'><span className='li-title'>{content.title}</span>. {content.details}<br/></span>):''}
            </p>
          </div>
        </div>
    </article>
    )
  }
}

export default WorkItem;
