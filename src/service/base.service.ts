
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable()
export class BaseService {
  constructor(public http: HttpClient) {
  }

  public joinMessages(array) {
    let string = '';
    array.forEach(message => {
      string = string + message;
    });
    return string;
  }

  public postRequest(url, data = {}) {
    
    return this.http.post(url, data).pipe(
      map(res => {
        // if (res['message']) {
        //   this.alertService.showSuccess({title: 'Success', message: res['message']});
        // }
        return res;
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public patchRequest(url, data = {}) {
    return this.http.patch(url, data).pipe(
      map(res => {
        // if (res['message']) {
        //   this.alertService.showSuccess({title: 'Success', message: res['message']});
        // }
        return res;
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public deleteRequest(url, data = {}) {
    
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: data
    }
    return this.http.delete(url, options).pipe(
      map(res => {
        // if (res['message']) {
        //   this.alertService.showSuccess({title: 'Success', message: res['message']});
        // }
        return res;
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public putRequest(url, data = {}, deleteEmptyKeys = true) {
    
    return this.http.put(url, data).pipe(
      map(res => {
        // if (res['message']) {
        //   this.alertService.showSuccess({title: 'Success', message: res['message']});
        // }
        return res;
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public getRequest(url, params = {}) {
    return this.http.get(url, {params}).pipe(
      map(res => {
        return res['data'];
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    console.log(error);
    switch (error.error.type) {
      case 'INTERNAL_SERVER_ERROR':
      case 'FORBIDDEN_ERROR':
      case 'INVALID_CREDENTIALS':
      case 'BUSINESS_LOGIC_ERROR':
      case 'RESOURCE_NOT_FOUND':
        // this.alertService.showErrors(error.error.error);
        return throwError(error.error.error);
      case 'VALIDATION':
        // this.alertService.showErrors('Validation Error');
        // const errorMessageObject = error.error.message;
        // this.alertService.setValidationsErrors(this.returnArrayOfErrors(errorMessageObject))
        // this.alertService.showErrors(this.returnArrayOfErrors(errorMessageObject));
        // return throwError(this.returnArrayOfErrors(errorMessageObject));
    }
    return throwError(error);
  }

  // public returnArrayOfErrors(errorMessageObject) {
  //   const parsedArray = [];
  //   Object.keys(errorMessageObject).forEach(message => {
  //     const keyName = (message.split('.').join(' ')).replace(/([A-Z])/g, ' $1').replace(/\w\S*/g, function (txt) {
  //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //     });
  //     const description = this.joinMessages(errorMessageObject[message]).split('.').join(' ');
  //     const errorObject = {
  //       keyName,
  //       description,
  //       completeMessage: `${keyName} : ${description}`
  //     };
  //     parsedArray.push(errorObject);
  //   });
  //   return parsedArray;
  // }

  // public uploadRequest(uploadURL, data) {
  //   return this.http.post<any>(uploadURL, data, {
  //     reportProgress: true,
  //     observe: 'events',
  //   }).pipe(map((event) => {

  //       switch (event.type) {

  //         case HttpEventType.UploadProgress:
  //           const progress = Math.round(100 * event.loaded / event.total);
  //           return {status: 'progress', message: progress};

  //         case HttpEventType.Response:
  //           return event.body;
  //         default:
  //           return `Unhandled event: ${event.type}`;
  //       }
  //     })
  //   );
  // }
}
