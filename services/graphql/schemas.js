module.exports = `
  """
  This type describes a result of paginate books listing.
  """
  type BooksResult {
    rows: [Book]
    total: Int!
    page: Int!
    pageSize: Int!
    totalPages: Int!
  }
  """
  This type describes a book entity.
  """
  type Book {
    id: String!
    url: String!
    pages: [Page]
  }
  """
  This type describes a page entity.
  """
  type Page {
    id: String!
    book: String!
    url: String!
    image: String!
    archive: String!
  }
  """
  This type describes files as a result of browsing a directory.
  """
  type BrowseResult {
    rows: [File]
    total: Int
    page: Int
    pageSize: Int
    totalPages: Int
  }
  """
  This type describes a File, either folder or file.
  """
  type File {
    name: String!
    type: String!
    cover: String
    urn: String
  }
  """
  This type describes pages as a result of querying a book.
  """
  type ReadResult {
    rows: [BookPage]
    total: Int!
  }
  """
  This type describes a File, either folder or file.
  """
  type BookPage {
    image: String!
  }
`