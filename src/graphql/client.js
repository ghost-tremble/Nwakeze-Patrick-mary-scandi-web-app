import { ApolloClient, InMemoryCache } from "@apollo/client";
// graphql client
const client = new ApolloClient({
  uri: "https://scandiiwoi.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default client;
