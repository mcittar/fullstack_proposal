import React from 'react';
import ProjectBlurb from '../homepage/project_blurb';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    };
  }

  componentWillMount(){
    this.props.getProjects(this.props.phrase);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.phrase !== this.props.phrase) {
      this.props.getProjects(nextProps.phrase);
    }
  }

  render(){
    const { projects } = this.props;
    const keys = Object.keys(this.props.projects);
    let outProjects = keys.map(key => {
      let smallProject = projects[key];
      return <li className='project-blurb-li-wrapper' key={ key }><ProjectBlurb project={ smallProject } /></li>;
    });
    if (outProjects.length < 1) {
      outProjects = (
        <li className='no-result'>
          <div className='sorry'>Sorry, there were no results for your search</div>
          <div className='here-it-is'>Have a potato!</div>
          <img className='potato' src='http://res.cloudinary.com/ddy9eynci/image/upload/v1490327927/potatoes-clip-art-at-clker-com-vector-clip-art-online-royalty-free-Tf4mHh-clipart_eyzxmy.png'></img>
        </li>
      );
    }

    return(
      <section className='project-search-section'>
        <header className='search-result-display'>
          <h1>Search results for: { this.props.phrase.split("-").join(" ") }</h1>
        </header>

        <content className='projects-container'>
          <ul className='projects-list'>
            { outProjects }
          </ul>
        </content>

      </section>
    );
  }
}

export default Search;
