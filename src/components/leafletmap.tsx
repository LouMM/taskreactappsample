import * as ReactLeaflet from 'react-leaflet';

import React from 'react';
import ReactDOM from 'react-dom';

const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;
class mapState {
    lat = 51.505
    lng = -0.09;
    zoom = 13;
}
export class PageMap extends React.Component {
    constructor() {
        super({})
    }

    render() {
        const position: [number, number] = [51.505, -0.09];
        return (
            <LeafletMap center={position} zoom={13}>
                 <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </LeafletMap>
            /*<LeafletMap center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br/> Easily customizable.
              </Popup>
            </Marker>
          </LeafletMap>*/
        );
    }
}

export default PageMap;
//ReactDOM.render(<SimpleExample />, document.getElementById('container'))