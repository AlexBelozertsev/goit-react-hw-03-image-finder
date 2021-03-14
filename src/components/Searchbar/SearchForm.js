import React, { Component } from 'react';
import style from './Searchbar.module.css';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className={style.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={style.button}>
          <span className={style.label}>Search</span>
        </button>
        <input
          className={style.input}
          type="text"
          // autofocus
          // autocomplete="off"
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchForm;
