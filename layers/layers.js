var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);
cluster_ne_10m_airports_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ne_10m_airports_1
});
var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
                popuplayertitle: 'ne_10m_airports',
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_1_0.png" /> Major Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_1.png" /> Mid Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_2.png" /> Small Airport<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'URL', 'natlscale': 'natlscale', 'TYPE_1': 'TYPE_1', 'TYPE 2': 'TYPE 2', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'TYPE_1': 'TextEdit', 'TYPE 2': 'TextEdit', });
lyr_ne_10m_airports_1.set('fieldLabels', {'type': 'no label', 'name': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'TYPE_1': 'no label', 'TYPE 2': 'no label', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});