import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    opened: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ opened: !prevState.opened }));
  };

  render() {
    const { opened } = this.state;
    const { picture, tags } = this.props;
    return (
      <li className={style.ImageGalleryItem}>
        <img
          src={this.props.preview}
          alt={this.props.tags}
          className={style.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />
        {opened && (
          <Modal picture={picture} alt={tags} onClose={this.toggleModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  preview: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

