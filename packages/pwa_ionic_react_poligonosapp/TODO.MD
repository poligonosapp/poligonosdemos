TODO
INDEX.TSX RELAY WITH PAYMENT GATEWAY
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