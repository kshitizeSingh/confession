import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor() { }
    //function which will be called for all http calls
    intercept( request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('before',request.headers)
        const updatedRequest= request.clone({
          headers: request.headers.set('Authorization','xyz-testtoken') 

        })
        console.log('after',updatedRequest.headers)
        console.info("request build:",updatedRequest)

        return next.handle(updatedRequest).pipe(
            // map(
            //   event => {
            //     //logging the http response to browser's console in case of a success
            //     if (event instanceof HttpResponse) {
            //       console.log("api call success :", event);
            //     }
            //   },
            //   error => {
            //     //logging the http response to browser's console in case of a failuer
            //     if (event instanceof HttpResponse) {
            //       console.log("api call error :", event);
            //     }
            //   }
            // )
          );


    }

}