var wms_layers = [];


        var lyr_GoogleHibrido_0 = new ol.layer.Tile({
            'title': 'Google Hibrido',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=es&x={x}&y={y}&z={z}'
            })
        });
var format_oleoductos_1 = new ol.format.GeoJSON();
var features_oleoductos_1 = format_oleoductos_1.readFeatures(json_oleoductos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oleoductos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oleoductos_1.addFeatures(features_oleoductos_1);
var lyr_oleoductos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oleoductos_1, 
                style: style_oleoductos_1,
                popuplayertitle: 'oleoductos',
                interactive: true,
                title: '<img src="styles/legend/oleoductos_1.png" /> oleoductos'
            });
var format_estaciones_terminales_2 = new ol.format.GeoJSON();
var features_estaciones_terminales_2 = format_estaciones_terminales_2.readFeatures(json_estaciones_terminales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estaciones_terminales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaciones_terminales_2.addFeatures(features_estaciones_terminales_2);
var lyr_estaciones_terminales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estaciones_terminales_2, 
                style: style_estaciones_terminales_2,
                popuplayertitle: 'estaciones_terminales',
                interactive: true,
                title: '<img src="styles/legend/estaciones_terminales_2.png" /> estaciones_terminales'
            });
var format_ECUADOR_LIMITE_3 = new ol.format.GeoJSON();
var features_ECUADOR_LIMITE_3 = format_ECUADOR_LIMITE_3.readFeatures(json_ECUADOR_LIMITE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECUADOR_LIMITE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECUADOR_LIMITE_3.addFeatures(features_ECUADOR_LIMITE_3);
var lyr_ECUADOR_LIMITE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECUADOR_LIMITE_3, 
                style: style_ECUADOR_LIMITE_3,
                popuplayertitle: 'ECUADOR_LIMITE',
                interactive: true,
                title: '<img src="styles/legend/ECUADOR_LIMITE_3.png" /> ECUADOR_LIMITE'
            });

        var lyr_ecuador_4 = new ol.layer.Tile({
            'title': 'ecuador',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.geoportaligm.gob.ec/nacional/wfs'
            })
        });
var group_geoBoundariesECUADM2all = new ol.layer.Group({
                                layers: [lyr_ECUADOR_LIMITE_3,],
                                fold: 'open',
                                title: 'geoBoundaries-ECU-ADM2-all'});
var group_datos_oleoductos_ecuador = new ol.layer.Group({
                                layers: [lyr_oleoductos_1,lyr_estaciones_terminales_2,],
                                fold: 'open',
                                title: 'datos_oleoductos_ecuador'});

lyr_GoogleHibrido_0.setVisible(true);lyr_oleoductos_1.setVisible(true);lyr_estaciones_terminales_2.setVisible(true);lyr_ECUADOR_LIMITE_3.setVisible(true);lyr_ecuador_4.setVisible(true);
var layersList = [lyr_GoogleHibrido_0,group_datos_oleoductos_ecuador,group_geoBoundariesECUADM2all,lyr_ecuador_4];
lyr_oleoductos_1.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'sistema': 'sistema', 'color': 'color', 'descripcion': 'descripcion', });
lyr_estaciones_terminales_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'sistema': 'sistema', 'descripcion': 'descripcion', });
lyr_ECUADOR_LIMITE_3.set('fieldAliases', {'fid': 'fid', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_oleoductos_1.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'sistema': 'TextEdit', 'color': 'TextEdit', 'descripcion': 'TextEdit', });
lyr_estaciones_terminales_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'sistema': 'TextEdit', 'descripcion': 'TextEdit', });
lyr_ECUADOR_LIMITE_3.set('fieldImages', {'fid': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_oleoductos_1.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'sistema': 'no label', 'color': 'no label', 'descripcion': 'no label', });
lyr_estaciones_terminales_2.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'sistema': 'no label', 'descripcion': 'no label', });
lyr_ECUADOR_LIMITE_3.set('fieldLabels', {'fid': 'no label', 'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_ECUADOR_LIMITE_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});