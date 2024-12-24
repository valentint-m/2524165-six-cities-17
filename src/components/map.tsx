import useMap from '../hooks/use-map';
import { useRef, useEffect } from 'react';
import { City, Location } from '../types/offer';
import { UrlMarker } from '../const';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  locations: Location[];
  selectedPoint: Location | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedCustomIcon = new Icon({
  iconUrl: UrlMarker.Selected,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, locations, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      locations.forEach((location) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && location.latitude === selectedPoint.latitude && location.longitude === selectedPoint.longitude
              ? selectedCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, locations, selectedPoint]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
