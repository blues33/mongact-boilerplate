/**
 *
 * CreatePost
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router/immutable';
import { createPost } from '../../../actions';
import CreateRecord from '../../../../CreateRecord/Loadable';

/* eslint-disable react/prefer-stateless-function */
class CreatePost extends React.Component {
  handleCancel = () => {
    const { dispatch } = this.props;

    dispatch(push('/app/posts'));
  };

  render() {
    return (
      <CreateRecord
        fields={[
          { name: 'title', type: 'input', label: 'Title' },
          { name: 'content', type: 'editor' },
        ]}
        action={createPost}
        handleCancel={this.handleCancel}
      />
    );
  }
}

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default CreatePost;
