import {GraphQLClient} from 'graphql-request'

const graphQLClient = new GraphQLClient(process.env.PUBLIC_API_ENDPOINT);

// graphQLClient.setHeader('API_TOKEN_ID',process.env.MY_PUBLIC_API_KEY); //use this line of code if we need to add Header info in our request

export default graphQLClient;