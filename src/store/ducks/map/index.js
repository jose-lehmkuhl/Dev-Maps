export const setNewMarkerLocation = lngLat => ({
  type: 'SET_NEW_MARKER_LOCATION',
  payload: lngLat,
});

export const clearNewMarkerLocation = () => ({
  type: 'CLEAR_NEW_MARKER_LOCATION',
});

export const newMarkerRequest = user => ({
  type: 'NEW_MARKER_REQUEST',
  payload: user,
});

export const newMarkerSuccess = user => ({
  type: 'NEW_MARKER_SUCCESS',
  payload: user,
});

export const newMarkerFail = error => ({
  type: 'NEW_MARKER_FAIL',
  payload: error,
});

export const removeUser = id => ({
  type: 'REMOVE_USER',
  payload: id,
});

const INITIAL_STATE = {
  markers: [],
  newMarkerLocation: '',
  error: '',
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_NEW_MARKER_LOCATION':
      return { ...state, newMarkerLocation: action.payload };
    case 'CLEAR_NEW_MARKER_LOCATION':
      return { ...state, newMarkerLocation: '', error: '' };
    case 'NEW_MARKER_REQUEST':
      return { ...state };
    case 'NEW_MARKER_SUCCESS':
      return {
        ...state,
        markers: [
          ...state.markers,
          {
            latLng: state.newMarkerLocation,
            user: action.payload,
          },
        ],
        newMarkerLocation: '',
        error: '',
      };
    case 'NEW_MARKER_FAIL':
      return { ...state, error: action.payload };
    case 'REMOVE_USER':
      return {
        ...state,
        markers: state.markers.filter(marker => marker.user.id !== action.payload),
      };
    default:
      return state;
  }
}
