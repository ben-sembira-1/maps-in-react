# Maps Libraries

## google-map-react

This looks like a pretty good map engine but it has 1 major downside which is that I could not found the documentation about adding custom maps and terrain.
Because of that, I put this package aside and kept searching

## react-map-gl

This map library is a react wrapper to the mapbox-gl engine.
The mapbox-gl engine looks amazing! It has great documentation and lots of features including:
1. Moving markers and SVGs on the map
1. Custom layers
1. 3D map navigation
1. 3D objects
1. Drawing polygons
And probably there are more.

It does have 1 downside and that is the fact that it's default maps engine is mapbox-gl which from version 2 has a non-OSS license and is operating as a payed service without the ability to add custom maps and terrain data. This also means that it can not be operated outside the internet.

The good part, is that this is only the DEFAULT engine and that the engine used can be configured to one of: [mapbox-gl@v2, mapbox-gl@v1, maplibre-gl].
1. mapbox-gl@v2 - Works as a payed service. :-1:
1. mapbox-gl@v1 - The previous version of mapbox-gl that was open-source and has the ability to operate with custom (not-mapbox) maps and terrain data, but is probably poorly maintained and will never get new features and massive bug fixes. :unamused:
1. maplibre-gl - A fork of mapbox-gl@v1 that was created because of the mapbox-gl project becoming not open source and a payed service in version 2. It looks maintained with more then 400 contributors, 4.3K stars on github, last commit aged less then 24 hours, last version aged 2 months and with a documentation almost identical to the original mapbox-gl (because the documentation is probably part fot the repo and did not change a lot). :muscle:

Luckily - maplibre-gl looks like a pretty good option!

On the flip side, it seems pretty hard to add custom terrain data to the maplibre-gl, but as said above - probably not impossible.
This is a guide I found in the internet: https://bertt.wordpress.com/2022/05/24/custom-maplibre-terrain-tiles/

Using the engine itself without the react wrapper should be considered as well, because react-map-gl being only a wrapper to the mapbox-gl or maplibre-gl engine, and may limit us in the future.

## Conclusion

I read about almost all maps JS libraries out there and could not find something better then mapbox-gl/maplibre-gl, but their are drawbacks:
1. Bundle size is almost 0.5 megabyte, which is according to the internet considered a lot - I am not sure how and if it matters to us, so we need to **research about how bundle size effects a web app** and connect it to our own usage. We should assume the server is not running on the same machine as the client.
1. The usage with custom maps and terrain data that does not come from mapbox seems a bit hard but not impossible using the maplibre-gl project - **A poc needs to be done**. The poc should be to generate a map with terrain data and satellite imagery using only free sources.
1. If the maplibre engine will fail the poc stage, there are lots of other options I did not mention here that can fit to our needs, but may limit us in the future. I think we should deal with the other options after eliminating the maplibre-gl engine option.
