import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfessionService {
  uri = 'https://confessions--kshitizesingh.repl.co';
  constructor(private http: HttpClient) {}

  getAllConfessions(): Observable<any> {
    return this.http.get(this.uri + '/getConfession');
  }

  addConfessions(data): Observable<any> {
    return this.http.post(this.uri + '/addConfession', data);
  }

  getConfessionById(id) {
    return this.http.get(this.uri + '/getConfessionById/' + id);
  }
}
