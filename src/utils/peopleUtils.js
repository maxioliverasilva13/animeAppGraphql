import { gql, useQuery } from "@apollo/client";

export const peopleQuery = gql`
  query Query($after: String, $before: String, $first: Int, $last: Int) {
    allPeople(after: $after, before: $before, first: $first, last: $last) {
      people {
        birthYear
        created
        edited
        eyeColor
        gender
        hairColor
        height
        id
        mass
        name
        skinColor
        homeworld {
          id
          population
          orbitalPeriod
          edited
          diameter
          climates
          created
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
      edges {
        cursor
        node {
          birthYear
          created
          edited
          eyeColor
        }
      }
    }
  }
`;
