import React, { Component } from 'react';

class Skill extends Component {
  render() {
    const {titleA, titleB, subtitle, logo, intro, listItems} = this.props;
    const image = logo?require(`../images/${logo}`):null;
    return(
      <article className='media' style={{verticalAlign: 'middle'}}>
        {logo?(<figure className='media-left' style={{marginLeft: '0px'}}>
          <p className='image is-32x32'>
            <img src={image}/>
          </p>
        </figure>):''}
        <div className='media-content'>
          <div className='content'>
            <h4 className='subtitle is-5'> {titleA}{titleB?` | ${titleB} `:''} </h4>
            <small>{subtitle?subtitle:''}</small>
            <p>
              {intro?<span>{intro}</span>:''}
              {listItems?listItems.map((content, i) => <span key={i} className='li-item'><span className='li-title'>{content.title}</span>. {content.details}<br/></span>):''}
              <span className='list-end'></span>
            </p>
          </div>
        </div>
    </article>
    )
  }
}

export default Skill;
