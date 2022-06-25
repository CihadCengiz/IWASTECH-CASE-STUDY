import http from "../http-common";
class BookDataService {
  getAll() {
    return http.get("/books");
  }
  get(bookName) {
    return http.get(`/books/${bookName}`);
  }
  create(data) {
    return http.post("/books", data);
  }
  update(id, data) {
    return http.put(`/books/${id}`, data);
  }
  delete(id) {
    return http.delete(`/books/${id}`);
  }
  deleteAll() {
    return http.delete(`/books`);
  }
  findByName(bookName, bookOrder, page) {
    return http.get(`/books/?bookName=${bookName}&bookOrder=${bookOrder}&page=${page}`);
  }
}
export default new BookDataService();