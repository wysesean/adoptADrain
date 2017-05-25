import * as React from 'react';
import { Scene, Layers, Widgets } from 'react-arcgis';

const SearchWidget = Widgets.Search;
const BasemapGallery = Widgets.BasemapGallery;

export default (props) => (
    <Scene
        style={{ width: '100vw', height: '100vh' }}
        mapProperties={{ basemap: 'topo-vector' }}
        viewProperties={{
            center: [-95.3632700, 29.7632800],
            scale: 10000
        }}
    >
        <Layers.FeatureLayer
            layerProperties={{
                url: 'http://services7.arcgis.com/c1uhFw1Crf5SeBYh/arcgis/rest/services/Find%20Locations%20in%20StormwaterUtilities-Storm%20Inlet/FeatureServer/0?token=tsW409Az3DESQ1Ub7MataawZBp73AIhbZIdTlO2ocEr9AX4AgNSM3SSu_ackpIO9GfUCykloj9lNosvIBXWujEhwDxHLiNHLeCSxXJSDmLtnrBxLub0ktxTsZaLw8zBgamG5uYd1lbHCC_pQWwoZJ-3yO4GiMjXiDjrxph1mGe1yPinlZlzkdBt7qKoPwqKq'
            }}
        />
        <SearchWidget position="top-right" />
        <BasemapGallery position="bottom-right" />
    </Scene>
);