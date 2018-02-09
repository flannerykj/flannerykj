import React, { Component } from 'react';
import MediaItem from '../components/MediaItem';
import workExperience from '../content/workExperience';
import {Icon} from 'react-fa';
import '../sass/pdf.scss';
var profilePic = require(`../images/profile-pic.jpg`);

class ResumePage extends Component {
  render() {
    return(
      <div className='pdf-container'>
            <h1 className='title is-1'>Flannery Jefferson</h1>
            <strong><span className='subtitle is-6'>
              <Icon name='envelope'/> flannj@gmail.com  &nbsp;
              <Icon name='phone'/> 902 488 4969  &nbsp;
              <Icon name='github'/> <a href="https://github.com/flannerykj">github.com/flannerykj</a>
            </span></strong>
            <p className='intro-text'>With a major in English and a minor in Computer Science, I get along with both <br/>humans and computers.</p>
            <img src={profilePic} style={{position: 'absolute', top: '0', right: '0', width: '190px'}} />
            <h2>Work Experience</h2>
              {workExperience.items.map((item, i) => (
                <MediaItem
                  titleA={item.position}
                  titleB={item.company}
                  subtitle={item.time}
                  logo={item.logo}
                  intro={item.intro}
                  listItems={item.listItems}
                  key={i}
                />
              ))}
                <h2 >Education</h2>
                <MediaItem
                      style={{marginBottom: '-10px'}}
                      titleA="B.A. (Major in English, Minor in Computer Science)"
                      intro="2011-2015, University of King's College, Dalhousie University"
                      logo="dal.png"/><div style={{height: '10px', width: '100%'}}></div>
                <h2 style={{marginTop: '0px'}}>Personal Projects</h2>
                        <MediaItem
                          titleA="Urban Applause"
                          subtitle="https://urbanapplause.com"
                          linkedSubtitle={true}
                          intro="Web app for tracking street artists. Initially built with React, using Firebase database, authentication and hosting services. The second iteration uses Redux, an Express server, JSON web tokens, a Postgres database and NGINX backend server in place of Firebase's API."                        />
              <h2 >Related Skills</h2>
                    <MediaItem
                      listItems={[
                      {
                        title:"Development",
                        details: "React/JSX, ES6, Redux, JavaScript, JQuery, JSON, Webpack, Node.js & Express, NGINX, PostgreSQL, AJAX, CSS/SCSS, Unit Testing (Mocha & Chai), PostgreSQL, Firebase, Python (Django)."
                        },
                        {
                        title: "Business & Product",
                        details: "Writing, Technical Requirements Analysis, Account Management, Project Management, Business Strategy, Product Design, User Experience Design."
                        }]}
                      />
      </div>
    )
  }
}

export default ResumePage;
