import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  api = 'http://gateway.marvel.com:443/v1/public/'
  constructor(private http: HttpClient) {

  }
  comics(){
    const date = new Date()
    const ts = date.getTime()
    const host = Md5.hashStr(`${ts}e8a1430d9db486d4a639f470eeabaa3d3d6279646ef605a442abe6d70a88007dc1c0d52a`)
    return this.http.get(`${this.api}comics?ts=${ts}&apikey=e8a1430d9db486d4a639f470eeabaa3d&hash=${host}`)

  }
}
