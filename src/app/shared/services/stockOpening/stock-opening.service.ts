import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockOpeningService {

  private _BaseUrl = 'https://archivistpk.manticapps.com/api/inventory/StockOpening/';
  private token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZDJkMzUxYy0wMWIyLTQzNWEtOTI3Mi04Y2E1YWQyODIxOTkiLCJzdWIiOiJhZG1pbkBtYW50aWNzb2Z0d2FyZS5jb20iLCJMb2dpbklkIjoiYWRtaW5AbWFudGljc29mdHdhcmUuY29tIiwiREJOYW1lIjoiQ2ZESjhQbGNmTHYyNG45Q2hMZzFpWjlUVUQ1LUh0MFU1eTh1aV8xZDFRWXkxVks0UFhnaGt4ZW41dkxDek43eVAyR3ZUazNCZmRPVXBPdWZFQWVXSDJYUkFLVVp3bzMxY1VnVGZJYmVyR0wtSGx1NGl4bXVyOG1kSzJnTFBHNi1PWTVneFEiLCJQcm9kdWN0SWQiOiIxIiwiUHJvZHVjdEtleSI6IkNmREo4UGxjZkx2MjRuOUNoTGcxaVo5VFVENUJsdkdKMHZXM3JuQ3F3SVVBVXgwUklVSFIyNElxWHVUUkZXWHZ1MnM2TjBNMjVkZUlmX0xYU29HN3ZvX2dwZlRuMWpIcU1FQ1dnY3l6ZEIxemdaZ01kZ294QWFyY3cycHVYUGdPSndRWVdnIiwiU29mdHdhcmVJZCI6IjEiLCJTb2Z0d2FyZUtleSI6IkNmREo4UGxjZkx2MjRuOUNoTGcxaVo5VFVENTh1QVJOTGhmZWdSbzQzb19TbWlqb0hWb1g5YVBYcklWU1ljbk5WSHVGZmJPZ2NYT3BhdmtzZkhZZ2twTFpKVzZSWmNCcWFvMEVEeGMyRHRKcFl6M0JYZ1JLaFZYcG5sTGt3Z2RTdGtlYUtnIiwiTWlzVXNlcklkIjoiMiIsIk1pc1RlbmFudElkIjoiMSIsIk1pc09yZ2FuaXphdGlvbklkIjoiMSIsIk1pc0JyYW5jaElkIjoiMSIsIkxhbmd1YWdlSWQiOiIxIiwiU2VjUm9sZXMiOiJtaXNfc3lzX2FkbWluLG1pc19jcF9hZG1pbixhZG1pbiIsImV4cCI6MTczMzU0ODk4NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA1NiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTYifQ.-VJi0G5nRgGGM4kNGQYWtxt-qNblndOf__wgquqTnSQ'
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
