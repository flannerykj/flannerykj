import React, { Component } from 'react';
import {Icon} from 'react-fa';
import SocialLinks from '../components/SocialLinks';
import Skill from '../components/Skill';


class IndexPage extends Component {
  render() {

    return(
      <div className='site-container'>
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered wrapper">
            <h1 className="title">
              Flannery Jefferson
            </h1>
            <h2 className="subtitle">
              I get along with both humans and computers.
            </h2>
            <div className='social-links'>
              <a className="icon is-medium" href='https://github.com/flannerykj' target="_blank">
                <Icon name='github' size="2x"/>
              </a>
              <a className="icon" href='https://www.linkedin.com/in/flanneryjefferson/' target="_blank">
                <Icon name='linkedin' size="2x"/>
              </a>
              <a className="icon" href='https://medium.com/@flannerykj' target="_blank">
                <Icon name='medium' size="2x"/>
              </a>

            </div>
            <a className='button' href='/FlanneryJeffersonResume.pdf'>Print Resume</a>
          </div>

        </div>
      </section>

    </div>
    )
  }
}

export default IndexPage;
