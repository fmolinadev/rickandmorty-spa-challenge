import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query requesCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      type
      origin {
        name
      }
      location {
        name
      }
      created
    }
  }
`;

export default GET_CHARACTER;
