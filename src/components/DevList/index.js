import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, User } from './styles';
import * as MapActions from '../../store/ducks/map';

const DevList = ({ users, removeUser }) => (
  <Container>
    {users.map(({
      id, name, login, avatar_url,
    }) => (
      <User key={id}>
        <img src={avatar_url} alt="" />
        <div>
          <p>{name.length > 20 ? name.slice(0, 20) : name}</p>
          <small>{login}</small>
        </div>
        <div className="icons">
          <button type="button" onClick={() => removeUser(id)}>
            <i className="fa fa-times-circle" />
          </button>
          <i className="fa fa-chevron-right" />
        </div>
      </User>
    ))}
  </Container>
);

DevList.propTypes = {
  removeUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  users: state.map.markers.map(marker => marker.user),
});

const mapDispatchtoProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(DevList);
