import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {catchError, retry, tap} from "rxjs/operators";

@Injectable()
export class RetryWhenService {

  constructor(private httpClient: HttpClient) {
  }

  getRequest(x: string): Observable<any> {
    return this.getUserByUsername<any>({username: x});
  }

  private getUserByUsername<T>(payload: { username: string }): Observable<T> {
    const url = 'https://petstore.swagger.io/v2/user/' + payload.username;
    const headers: { [header: string]: string | string[] } = {
      observe: 'body',
      responseType: 'json'
    };
    return this.httpClient.get<T>(url, headers);
  }
}
