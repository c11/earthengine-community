/**
 * Copyright 2021 The Google Earth Engine Community Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START earthengine__apidocs__ee_geometry_linestring_distance]
// Define a LineString object.
var lineString = ee.Geometry.LineString([[-122.09, 37.42], [-122.08, 37.43]]);

// Define other inputs.
var inputGeom = ee.Geometry.Point(-122.090, 37.423);

// Apply the distance method to the LineString object.
var lineStringDistance = lineString.distance({'right': inputGeom, 'maxError': 1});

// Print the result to the console.
print('lineString.distance(...) =', lineStringDistance);

// Display relevant geometries on the map.
Map.setCenter(-122.085, 37.422, 15);
Map.addLayer(lineString,
             {'color': 'black'},
             'Geometry [black]: lineString');
Map.addLayer(inputGeom,
             {'color': 'blue'},
             'Parameter [blue]: inputGeom');
// [END earthengine__apidocs__ee_geometry_linestring_distance]