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

// [START earthengine__apidocs__ee_geometry_rectangle_cutlines]
// Define a Rectangle object.
var rectangle = ee.Geometry.Rectangle(-122.09, 37.42, -122.08, 37.43);

// Apply the cutLines method to the Rectangle object.
var rectangleCutLines = rectangle.cutLines({'distances': [10, 100], 'maxError': 1});

// Print the result to the console.
print('rectangle.cutLines(...) =', rectangleCutLines);

// Display relevant geometries on the map.
Map.setCenter(-122.085, 37.422, 15);
Map.addLayer(rectangle,
             {'color': 'black'},
             'Geometry [black]: rectangle');
Map.addLayer(rectangleCutLines,
             {'color': 'red'},
             'Result [red]: rectangle.cutLines');
// [END earthengine__apidocs__ee_geometry_rectangle_cutlines]