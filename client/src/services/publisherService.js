import http from "../http-common";
class PublisherDataService {
  getAll() {
    return http.get("/publishers");
  }
  get(id) {
    return http.get(`/publishers/${id}`);
  }
  create(data) {
    return http.post("/publishers", data);
  }
  update(id, data) {
    return http.put(`/publishers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/publishers/${id}`);
  }
  deleteAll() {
    return http.delete(`/publishers`);
  }
  findByName(publisherName) {
    return http.get(`/publishers/?publisherName=${publisherName}`);
  }
}
export default new PublisherDataService();