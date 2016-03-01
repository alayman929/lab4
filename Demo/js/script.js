// initialize the map then set coordinates and initial zoom level
var basemap = L.map('map').setView([38, -99], 4);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
		{
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(basemap);

// loads a map of drought areas in the US.
var wldfre_3_7day = L.tileLayer.wms("http://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_weather_hazards/MapServer/WmsServer",
	{
    layers: '2',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity: .6
	}).addTo(basemap);

 // loads a map of the the 24 hour relative humidity
var rhmd_24hr = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_relhumidity_offsets/MapServer/WmsServer",
	{
    layers: '33',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity: .3
	}).addTo(basemap);

// loads a map of precipitation accumulation for the past 3 hours
var prec_3hr = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WmsServer",
	{
    layers: '21',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity: .6
	}).addTo(basemap);

// loads a map of precipitation accumulation for the past 12 hours
var prec_12hr = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WmsServer",
	{
    layers: '13',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity: .6
	}).addTo(basemap);

 // loads a lightning strike density map
var lghtng_15min = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WmsServer",
	{
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity: .6
	}).addTo(basemap);


// adds radio controls to map
var overlayMaps = {
	"Wildfire/Drought": wldfre_3_7day,
  "Humidity": rhmd_24hr,
  "Precipitation: 3hr": prec_3hr,
	"Precipitation: 12hr": prec_12hr,
	"Lightning": lghtng_15min
};

	L.control.layers(baseMaps, overlayMaps).addTo(basemap);
