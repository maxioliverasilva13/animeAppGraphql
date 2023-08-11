import { gql, useQuery } from "@apollo/client";

export const getStars = (average = 0) => {
    if (average >= 100) {
      return 5;
    }
    if (average === 0) {
      return 0;
    }
    const counts = (5 * 100) / average;
    const stars = Math.ceil(counts - counts / 2);
    return stars;
  };

export const getAnimeList = gql`
query GetAnimeList($page: Int) {
  Page(page: $page, perPage: 20) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    },
    media {
      id
      idMal
      title {
        romaji
        english
        native
        userPreferred
      }
      type
      format
      status
      description
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      seasonInt
      episodes
      duration
      chapters
      volumes
      countryOfOrigin
      isLicensed
      source
      hashtag
      trailer {
        id
      }
      updatedAt
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      genres
      synonyms
      averageScore
      meanScore
      popularity
      isLocked
      trending
      favourites
      tags {
        id
      }
      relations {
        edges {
          id
        }
      }
    }
  }
}
`;
