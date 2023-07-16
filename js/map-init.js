var map;
function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8,
			styles: [
					  {
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#f5f5f5"
					      }
					    ]
					  },
					  {
					    "elementType": "labels.icon",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#616161"
					      }
					    ]
					  },
					  {
					    "elementType": "labels.text.stroke",
					    "stylers": [
					      {
					        "color": "#f5f5f5"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#c1c1c1"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.land_parcel",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#bdbdbd"
					      }
					    ]
					  },
					  {
					    "featureType": "landscape",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#e8e8e8"
					      }
					    ]
					  },
					  {
					    "featureType": "poi",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#eeeeee"
					      }
					    ]
					  },
					  {
					    "featureType": "poi",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#c0c0c0"
					      }
					    ]
					  },
					  {
					    "featureType": "poi",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#757575"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.park",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#e5e5e5"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.park",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#9e9e9e"
					      }
					    ]
					  },
					  {
					    "featureType": "road",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#ffffff"
					      }
					    ]
					  },
					  {
					    "featureType": "road",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#71eeca"
					      }
					    ]
					  },
					  {
					    "featureType": "road.arterial",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#757575"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#dadada"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#616161"
					      }
					    ]
					  },
					  {
					    "featureType": "road.local",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#9e9e9e"
					      }
					    ]
					  },
					  {
					    "featureType": "transit",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#18c994"
					      }
					    ]
					  },
					  {
					    "featureType": "transit.line",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#e5e5e5"
					      }
					    ]
					  },
					  {
					    "featureType": "transit.station",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#eeeeee"
					      }
					    ]
					  },
					  {
					    "featureType": "water",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#c9c9c9"
					      }
					    ]
					  },
					  {
					    "featureType": "water",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#9e9e9e"
					      }
					    ]
					  }
					]
		});
}