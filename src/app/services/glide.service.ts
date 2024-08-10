import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlideService {
  private readonly GLIDE_JSP: string =
    'http://glidenumber.net/glide/public/search/search.jsp';
  private url = 'http://glidenumber.net/glide/public/search/search.jsp';

  constructor(private http: HttpClient) {}


}
