import React, { component } from 'react';
import Category from '../components/Category';

class Home extends Component {
  render() {
    return <Category />;
  }
}

const MapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Home);
