import {gql} from 'graphql-request';

export const GET_COUNTRY_NAMES_QUERY = gql`
query GetCountryNames {
    countries {
      name
    }
  }
`;