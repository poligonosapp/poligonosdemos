ionic serve 
ionic cap build android
ionic cap build ios

ionic:build + express:start + express:devstart

docker build -t poligonosApp .

npm install -g source-map-explorer

source-map-explorer /dist/bundle.js /path/to/bundle.js.map

v5 v4
node --trace-deprecation node_modules/webpack/bin/webpack.js

npm install --save @types/shapefile
npm i @types/react
npm i @types/react-dom

npm install --save-dev @babel/types

ionic serve

cd src

nodemon ./LeafletServer.js localhost 8080

snyk auth
snyk test
snyk monitor

TODO
render props relay

// In this example, `ErrorComponent` and `LoadingComponent`
// simply display a static error message / loading indicator.
<Relay.Renderer
Container={ProfilePicture}
queryConfig={profileRoute}
environment={Relay.Store}
render={({done, error, props, retry, stale}) => {
if (error) {
return <ErrorComponent />;
} else if (props) {
return <ProfilePicture {...props} />;
} else {
return <LoadingComponent />;
}
}}
/>





