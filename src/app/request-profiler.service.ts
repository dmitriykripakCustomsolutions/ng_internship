import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestProfilerService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const started = Date.now();
    let ok: string;

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => ok = event instanceof HttpResponse ? 'secceed' : '',
        (error: HttpErrorResponse) => ok = 'failed'
      ),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} ${req.urlWithParams} ${ok} in ${elapsed}`;
        alert(msg);
      })
    );

  }

  constructor() { }
}
