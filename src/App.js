import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import Layout from './components/Layout';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

import pixabayApi from './services/pixabay-api';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    total: null,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    error: null,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({ isLoading: true });
    const option = {
      searchQuery: this.state.searchQuery,
      currentPage: this.state.currentPage,
    };

    pixabayApi
      .fetchPics(option)
      .then(data => {
        if (!data.hits.length) {
          alert(`Please enter more correct query`);
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
          total: data.total,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      total: null,
      error: null,
    });
  };

  onChangeUrl = url => {
    this.setState({
      largeImageURL: url,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal, isLoading, largeImageURL, total } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.onChangeQuery} />
        {isLoading && (
          <Loader
            type="Puff"
            color="#3f51b5"
            height={80}
            width={80}
            timeout={3000}
          />
        )}
        <ImageGallery images={images} onClick={this.onChangeUrl} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
        {images.length > 0 && images.length < total && (
          <Button onClick={this.fetchImages} />
        )}
      </Layout>
    );
  }
}

export default App;
