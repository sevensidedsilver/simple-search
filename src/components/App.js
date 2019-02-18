import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'

import ImageList from './ImageList'

// const APIKEY = '4a139e6abe63d23195d444b2fc9caf888ae2efc254f38aece127b2cff689d56a'


class App extends React.Component {
  state = { images : [] };

  onSearchSubmit = async (term) => {

    //call with axios
    const response = await unsplash.get('/search/photos', {
      params: { query: term  },
    })
    // console.log(response.data.results)
    this.setState({images : response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>

    );
  }

}

export default App
