import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PagerService {
  private api_url = 'http://localhost:3003/news?_limit=10&_page=';
  constructor(
    private http: Http
  ) { }

  getLists(page): Promise<any> {
    return this.http
      .get(this.api_url+page)
      .toPromise()
      .then(res=>res.json() as any[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }


  
}
