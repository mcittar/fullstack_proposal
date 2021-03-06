import React from 'react';
import { Link } from 'react-router';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getTags();
  }

  render() {

    let allTags;
    if (this.props.tags.length > 0){
      allTags = this.props.tags.map(tag => {
        return (
          <li className='discover-tag' key={ tag.tag }>
            <Link className='discover-tag-link' to={ `search/${tag.tag.split(" ").join("-")}` }>
              { tag.tag }
            </Link>
          </li>
        );
      });
    }

    return (
      <section className='discover-section'>
        <section className='discover-section-wrapper'>

          <h1>Categories</h1>
          <ul className='discover-all-tags-wrapper'>
            { allTags }
          </ul>

        </section>
      </section>
    );
  }
}

export default Discover;
