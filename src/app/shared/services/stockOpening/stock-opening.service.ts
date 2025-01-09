import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockOpeningService {

  private _BaseUrl = 'https://archivistpk.manticapps.com/api/inventory/StockOpening/';
  private token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNmU4MTAzZS1lNjExLTQwYTctYjhjYS00NTViMjQ5OTJlOTQiLCJzdWIiOiJhZG1pbkBtYW50aWNzb2Z0d2FyZS5jb20iLCJMb2dpbklkIjoiYWRtaW5AbWFudGljc29mdHdhcmUuY29tIiwiREJOYW1lIjoiQ2ZESjhIV1doOTNvQlFCSWoxWk9fX2Q5T2J4aWdDcWZSTUc0QzFWUW93eC1aTndtT3llNDBPc2RmWjYzdldhak1vX0FCNTJiUjJWUDdZZER3bWh5dXY4NHhrRXkyRUlVSG9LUXZJNkxRbzN6ckxhRVJMY2lDQ092R3JsY3VISHpCYTBnVUEiLCJQcm9kdWN0SWQiOiIxIiwiUHJvZHVjdEtleSI6IkNmREo4SFdXaDkzb0JRQklqMVpPX19kOU9id08xUG85MHdqVzZ0LTFWN0lJVEZINlZkNGZlcWFHSnYzNUhIWGtDQUM3UHdzTE1QNDJYQ29ZVU5XZDdiQm9EX21mUENqSDhRWEx5TFk3eWNVaTVfU2hsSGptT2p3Mk9iX1p5YTBmLXhYXzJBIiwiU29mdHdhcmVJZCI6IjEiLCJTb2Z0d2FyZUtleSI6IkNmREo4SFdXaDkzb0JRQklqMVpPX19kOU9ieEFuT0llRXdpNi1fa2xtRnA3Q1Zod3BYT2ozcnhTM3ZIMjBsa1NTODRUZ0lObnhJZXZ4eGZVYjJBemFENy1NWWhPMFF1V2tpbmpFWjNmb0NpNHRmbGxmaHVqdm1leHR1VmpoWDhyTzNkdFp3IiwiTWlzVXNlcklkIjoiMiIsIk1pc1RlbmFudElkIjoiMSIsIk1pc09yZ2FuaXphdGlvbklkIjoiMSIsIk1pc0JyYW5jaElkIjoiMSIsIkxhbmd1YWdlSWQiOiIxIiwiU2VjUm9sZXMiOiJtaXNfc3lzX2FkbWluLG1pc19jcF9hZG1pbixhZG1pbiIsImV4cCI6MTczNjY2MTc2MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA1NiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTYifQ.v5OrIZIwwcygXdc52LyedmXGbojGniY6YMnkFrifQ-E'

  constructor(private http: HttpClient) { }


  getPagedList(payload: any): Observable<any> {
    let Url = this._BaseUrl + 'getPagedList'

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(Url, payload, { headers });
  }
  deleteRecordById(id: number): Observable<any> {
    const Url = `${this._BaseUrl}delete/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });

    return this.http.delete<any>(Url, { headers });
  }

  edit(id: number): Observable<any>{
    const Url = `${this._BaseUrl}GetById/${id}`;
    const headers=new HttpHeaders({
       'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    })
      return this.http.get<any>(Url,{headers});
  }

  insertOrUpdate(payload: any): Observable<any> {
    let Url = this._BaseUrl + 'insertOrUpdate'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(Url, payload, { headers });
  }



  warehouselist(payload: any): Observable<any> {
    let Url = 'https://archivistpk.manticapps.com/api/inventory/warehouse/getList'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });


    return this.http.post<any>(Url, payload, { headers });
  }




inventory(): Observable<any> {
  const Url = 'https://archivistpk.manticapps.com/api/inventory/item/getlist';
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  // Provide an empty body (`{}`) and add headers in the options
  return this.http.post<any>(Url, {}, { headers });
}


}
