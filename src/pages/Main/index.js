import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Map from '../../components/Map';
import DevList from '../../components/DevList';
import DevModal from '../../components/DevModal';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({ map }) => (
  <Fragment>
    <DevList />
    <Map />
    {map.newMarkerLocation && <DevModal />}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
    />
  </Fragment>
);

Main.propTypes = {
  map: PropTypes.shape({
    newMarkerLocation: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }).isRequired,
};

const mapStateToProps = state => ({
  map: state.map,
});

export default connect(mapStateToProps)(Main);
