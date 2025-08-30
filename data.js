var table = ee.FeatureCollection("projects/ee-ssrhlokhome/assets/gadm41_SGP_shp"), //replace with own shapefile
    table2 = ee.FeatureCollection("projects/ee-ssrhlokhome/assets/gadm41_MYS_shp"),//replace with own shapefile
    table3 = ee.FeatureCollection("projects/ee-ssrhlokhome/assets/idn_adm"),//replace with own shapefile
    collection = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2");
