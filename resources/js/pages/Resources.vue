<template>
    <div class="container">
        <div class="row">
            <iframe width="414" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAJYjtvebw2RmfBjfOILLZeSo_TogGbe40&q=literacy+resources+near+me"
                    allowfullscreen>
                </iframe>
            <!-- <div id="map"></div> -->
        </div>
        <div class="row">
            <div class="col mt-4">
                <div class="dark-blue-container text-white btn-block btn-lg pt-4 pb-4">
                    These are various resources for learning around you.
                    <button class="second-cool-btn btn-block btn-lg mt-3 pt-3 pb-2" @click.prevent="speak()">
                        <i class="fas fa-volume-up fa-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            speak () {
                var msg = new SpeechSynthesisUtterance('These are various resources for learning around you.');
                window.speechSynthesis.speak(msg);
            }
        }
    }
    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
    // export default {
    //     mounted() {
    //         if (google !== undefined) {
    //             this.initMap();
    //         }
    //     },
    //     methods: {
    //         initMap() {
    //             // Create the map.
    //             var pyrmont = {
    //                 lat: -33.866,
    //                 lng: 151.196
    //             };
    //             map = new google.maps.Map(document.getElementById('map'), {
    //                 center: pyrmont,
    //                 zoom: 17
    //             });

    //             // Create the places service.
    //             var service = new google.maps.places.PlacesService(map);
    //             var getNextPage = null;
    //             var moreButton = document.getElementById('more');
    //             moreButton.onclick = function () {
    //                 moreButton.disabled = true;
    //                 if (getNextPage) getNextPage();
    //             };

    //             // Perform a nearby search.
    //             service.nearbySearch({
    //                     location: pyrmont,
    //                     radius: 500,
    //                     type: ['store']
    //                 },
    //                 function (results, status, pagination) {
    //                     if (status !== 'OK') return;

    //                     createMarkers(results);
    //                     moreButton.disabled = !pagination.hasNextPage;
    //                     getNextPage = pagination.hasNextPage && function () {
    //                         pagination.nextPage();
    //                     };
    //                 });
    //         },
    //         createMarkers(places) {
    //             var bounds = new google.maps.LatLngBounds();
    //             var placesList = document.getElementById('places');

    //             for (var i = 0, place; place = places[i]; i++) {
    //                 var image = {
    //                     url: place.icon,
    //                     size: new google.maps.Size(71, 71),
    //                     origin: new google.maps.Point(0, 0),
    //                     anchor: new google.maps.Point(17, 34),
    //                     scaledSize: new google.maps.Size(25, 25)
    //                 };

    //                 var marker = new google.maps.Marker({
    //                     map: map,
    //                     icon: image,
    //                     title: place.name,
    //                     position: place.geometry.location
    //                 });

    //                 var li = document.createElement('li');
    //                 li.textContent = place.name;
    //                 placesList.appendChild(li);

    //                 bounds.extend(place.geometry.location);
    //             }
    //             map.fitBounds(bounds);
    //         }
    //     }
    // }
</script>