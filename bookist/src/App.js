import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Booklist from './Components/BookList';
import Shelf from './Components/Shelf';
import SearchBar from './Components/SearchBar';
import data from './data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }
  addToShelf(book) {
    console.log(book)
    this.setState({
      shelf: [...this.state.shelf, book]
    })
  }
  clearShelf() {
    this.setState({
      shelf: []
    })
  }
  filterBooks(input) {
    let filteredBooks = this.state.books.filter(el => el.title.includes(input))
    this.setState({
      books: filteredBooks
    })
  }
  reset() {
    this.setState({
      books: data
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
        <div className="bookshelf">
          <Booklist books={this.state.books} addToShelf={this.addToShelf} className='booklist'/>
        </div>
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} className='shelf'/>
      </div>
    );
  }
}

export default App;