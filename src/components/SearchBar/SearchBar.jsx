import { Component } from 'react';
import { toast } from 'react-toastify';

export class SearchBar extends Component {
  state = {
    inputSearch: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      inputSearch: value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputSearch.trim() === '') {
      toast.error('Enter something')
      return
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ inputSearch: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="inputSearch"
            value={this.state.inputSearch}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
