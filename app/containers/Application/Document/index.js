/**
 *
 * Document
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/es/Typography/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCreateRecord from './selectors';
import reducer from './reducer';
import saga from './saga';
import Button from '../../../components/ui/Button';
import { RenderInputs } from './utils';
import request from '../../../utils/request';

const Wrapper = styled.div`
  width: 80%;
  margin: 1em auto;
  display: block;
  position: relative;
`;

const Footer = styled.div`
  width: 80%;
  margin: 4em auto 0;
  display: block;
  position: relative;
`;

const ButtonContainer = styled.div`
  width: 30%;
  display: inline-block;
  margin: 1em 10%;
`;

/* eslint-disable react/prefer-stateless-function */
export class Document extends React.Component {
  state = {
    content: '',
    title: '',
  };

  componentDidMount() {
    this.setup();
  }

  setup() {
    const { fields, update } = this.props;

    fields.map(field => this.setState({ [field.name]: '' }));
    if (update) {
      const { path, id } = update;
      request(`/${path}/${id}`, { method: 'GET' }).then(doc =>
        this.setState(doc[0]),
      );
    }
  }

  handleEditorChange = value => {
    this.setState({ content: value });
  };

  handleChange = name => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  handleSave = () => {
    const { dispatch, action, fields } = this.props;
    const payload = {};
    // eslint-disable-next-line no-return-assign
    fields.map(field => (payload[field.name] = this.state[field.name]));

    dispatch(action(payload));
  };

  render() {
    const { handleCancel, fields, title, cancelText, saveText } = this.props;
    return (
      <div>
        <Wrapper>
          <Typography variant="subtitle1">{title}</Typography>
        </Wrapper>
        <RenderInputs
          fields={fields}
          onInputChange={this.handleChange}
          onEditorChange={this.handleEditorChange}
          state={this.state}
        />
        <Footer>
          <ButtonContainer>
            <Button
              color="secondary"
              variant="outlined"
              text={cancelText}
              onClick={handleCancel}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              color="primary"
              variant="outlined"
              text={saveText || 'Save'}
              onClick={this.handleSave}
            />
          </ButtonContainer>
        </Footer>
      </div>
    );
  }
}

Document.propTypes = {
  action: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  update: PropTypes.object,
  saveText: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  createRecord: makeSelectCreateRecord(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'document', reducer });
const withSaga = injectSaga({ key: 'document', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Document);
