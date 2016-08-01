import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  data: any;
  default_data: any;

  constructor(private http: Http) {
    this.http.get('/api/articles.json').map((res) => res.json()).subscribe((value) => {
      this.data = this.default_data = value;
    });
  }

  doSearch(keyword) {
    this.data = this.default_data.filter ( (mk) => {
      if (!keyword) {
        return true;
      }
      return mk.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
  }
}
