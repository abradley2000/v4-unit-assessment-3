import React, {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }
    handleChange(e) {
        this.setState({
            input: e
        })
    }
    handleClear() {
        this.setState({
            input: ''
        })
        this.props.reset()
    }
    render() {
        return (
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)} value={this.state.input}/>
                <button onClick={() => this.props.filterBooks(this.state.input)}>search</button>
                <button onClick={() => this.handleClear()}>clear search</button>
            </div>
        )
    }
}

export default SearchBar;