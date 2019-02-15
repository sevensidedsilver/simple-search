import React from 'react'
import axios from 'axios';

import SearchBar from './SearchBar'

// const APIKEY = '4a139e6abe63d23195d444b2fc9caf888ae2efc254f38aece127b2cff689d56a'


class App extends React.Component {
  async onSearchSubmit(term) {
    console.log(term)

    //call with axios
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 4a139e6abe63d23195d444b2fc9caf888ae2efc254f38aece127b2cff689d56a'
      }
    })
    console.log(response.data.results)
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>

    );
  }

}

export default App
