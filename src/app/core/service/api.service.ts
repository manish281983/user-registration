import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<any> {
      return this.http.get(url)
          .map((res: Response) => res)
          .catch((res: Response) => { return Observable.throw(res) });
  }
}
