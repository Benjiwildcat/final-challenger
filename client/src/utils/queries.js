import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query  me {
    _id
    email
    password
    username
    savedBooks {
      _id
      authors
      bookId
      description
      image
      link
      title
    }
  }
  `