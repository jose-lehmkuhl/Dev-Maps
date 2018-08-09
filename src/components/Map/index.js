import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MapActions from '../../store/ducks/map';

const markerStyle = {
  borderRadius: 100,
  width: 48,
  height: 48,
  borderStyle: 'solid',
  borderWidth: 5,
  borderColor: '#7159C1',
};

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -27.5935,
      longitude: -48.55854,
      zoom: 13,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  render() {
    const { markers } = this.props.map;
    return (
      <MapGL
        {...this.state.viewport}
        onClick={e => this.props.setNewMarkerLocation(e.lngLat)}
        mapboxApiAccessToken="pk.eyJ1Ijoiam9zZWxlaG1rdWhsIiwiYSI6ImNqajBhZTYxMjBmc3kzd3QwbXV3a2llc20ifQ.RePf32KUoCQPAo_PwBGmDQ"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {markers
          && markers.map(marker => (
            <Marker key={marker.user.id} latitude={marker.latLng[1]} longitude={marker.latLng[0]}>
              <img alt="" style={markerStyle} src={marker.user.avatar_url} />
            </Marker>
          ))}
      </MapGL>
    );
  }
}

Map.propTypes = {
  setNewMarkerLocation: PropTypes.func.isRequired,
  map: PropTypes.shape({
    markers: PropTypes.arrayOf(
      PropTypes.shape({
        latLng: PropTypes.arrayOf(PropTypes.number),
        user: PropTypes.shape({
          id: PropTypes.number,
          avatar_url: PropTypes.string,
        }),
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchtoProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(Map);
