import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockOpeningService {

  private _BaseUrl = 'https://archivistpk.manticapps.com/api/inventory/StockOpening/';
  private token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NGMwNGJlNy1iNGMzLTRjZWEtYjM1MS05YjI4YjhmZGNmYzMiLCJzdWIiOiJhZG1pbkBtYW50aWNzb2Z0d2FyZS5jb20iLCJMb2dpbklkIjoiYWRtaW5AbWFudGljc29mdHdhcmUuY29tIiwiREJOYW1lIjoiQ2ZESjhIV1doOTNvQlFCSWoxWk9fX2Q5T2J3TmRKZWFqRlliMW43eHp6UWNmRDlhZGdUVzRyT2M2VVhwMV9LXy1Ta1ZCLXZhM0h0M3Z5VFR4SDlHVGNFZDhvRWE3ZHkzSENqZGROV1lYSlRfay1qUTVWUkRzdU95aHJRN0Z2bV9YYmdCS3ciLCJQcm9kdWN0SWQiOiIxIiwiUHJvZHVjdEtleSI6IkNmREo4SFdXaDkzb0JRQklqMVpPX19kOU9idzc2TzZVZlRoSlI5Qy1MX1FoRVQ1cFdfTGsxVDlOajF1cVRha1FNMXRTclZKVUZMdWdhU01WVmlCY3BScnI5MjE4S01vSnJ5YmthT0prU1B3UkhFWDRpWWdTR1NMU3ZwZ2c4YlhoMzZTZW1BIiwiU29mdHdhcmVJZCI6IjEiLCJTb2Z0d2FyZUtleSI6IkNmREo4SFdXaDkzb0JRQklqMVpPX19kOU9iekk2UC1NMGNGaE9zbFgyNWZ3c01mcTRtcmRZQ1R3QnIxYXFPVlI2TngtREZNZ3drakZsLURIU2xRT210d1NBZXZWeWNydWs5aHgzR0VLTnlrLUZ2SktGdmdrTzQ3V2lGOUxqbVlMRmk1bV9BIiwiTWlzVXNlcklkIjoiMiIsIk1pc1RlbmFudElkIjoiMSIsIk1pc09yZ2FuaXphdGlvbklkIjoiMSIsIk1pc0JyYW5jaElkIjoiMSIsIkxhbmd1YWdlSWQiOiIxIiwiU2VjUm9sZXMiOiJtaXNfc3lzX2FkbWluLG1pc19jcF9hZG1pbixhZG1pbiIsImV4cCI6MTczNjM1OTg4MiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA1NiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTYifQ.Aa3ePEHWcuFBjQS79FnIBIsXVqluVuEVma3tViQfuss'

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
