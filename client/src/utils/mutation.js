import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation addUser ($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      username
    }
  }
}`

export const LOGIN = gql`
  mutation login ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`

export const SAVED_BOOKS = gql`
  mutation savedBooks ($authors: [String]!, $description: String!, $bookId: String!, $title: String!) {
  savedBook(authors: $authors, description: $description, bookId: $bookId, title: $title) {
    _id
    username
    email
  }
}`

export const DELETE_BOOKS = gql`
  mutation  deleteBooks ($bookId: String!) {
  deleteBook(bookId: $bookId) {
    username
    email
    _id
  }
}`


