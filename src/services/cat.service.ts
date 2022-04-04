import http from "../http-common";
import { Cat } from "../models/cat";

class CatDataService {
  getAll() {
    return http.get<Array<Cat>>("/cats");
  }
  get(id: string) {
    return http.get<Cat>(`/cats/${id}`);
  }
  create(data: Cat) {
    return http.post<Cat>("/cats", data);
  }
  update(data: Cat, id: any) {
    return http.put<any>(`/cats/${id}`, data);
  }
  delete(id: any) {
    return http.delete<any>(`/cats/${id}`);
  }
}
export default new CatDataService();
