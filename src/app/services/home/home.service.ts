import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url: string = "https://newsapi.org/v2/everything?q=astronomia&language=pt&sortBy=popularity&apiKey=783951e79d69458898b4906b8528023d";

  constructor(private http: HttpClient) { }

  public getNoticeAstronomy(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url);
  }
}
