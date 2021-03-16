import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`https://api.publicapis.org/categories`);
  }
}
