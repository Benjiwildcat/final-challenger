import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Query {
  me {
    _id
    email
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
}
  `