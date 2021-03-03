const credentials = Credentials.usernamePassword('process.env.USER', 'process.env.PASSWORD');
const user = await User.authenticate(credentials, 'http://my-ros-instance:9080');

const config = await GraphQLConfig.create({
  user: user,
  realmPath: '/~/test'
});

const client = config.createApolloClient();

// You can now query the GraphQL API
const response = await client.query({
  query: gql`
      query {
          people(query: "age > 18", sortBy: "name") {
              name
              age
          }
      }
  `
});

const people = response.data.people;