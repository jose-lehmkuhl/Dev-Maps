import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Modal } from './styles';
import * as MapActions from '../../store/ducks/map';

class DevModal extends Component {
  state = {
    userInput: '',
  };

  render() {
    return (
      <Fragment>
        <Container />
        <Modal gotError={this.props.error}>
          <p>Adicionar novo usuario</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.newMarkerRequest(this.state.userInput);
            }}
          >
            <input
              placeholder="Usuario no GitHub"
              value={this.state.userInput}
              onChange={e => this.setState({ userInput: e.target.value })}
            />{' '}
            <button
              className="cancelar"
              type="button"
              onClick={() => this.props.clearNewMarkerLocation()}
            >
              Cancelar
            </button>
            <button className="submit" type="submit">
              Salvar
            </button>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

DevModal.propTypes = {
  clearNewMarkerLocation: PropTypes.func.isRequired,
  newMarkerRequest: PropTypes.func.isRequired,
  error: PropTypes.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  error: state.map.error,
});

const mapDispatchtoProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(DevModal);
