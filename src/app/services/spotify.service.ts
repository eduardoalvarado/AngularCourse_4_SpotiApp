import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token = "BQA1wmSb51QaHNUL9IWzMiqa8y0of7_f1FHNKDDH45gC6nRYrpbMkkKYzBM5WZCVqvKn7QXE-YoZipQYBZQ";


  constructor(public http: HttpClient) {
    console.log('Servicio de spotify')
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getArtists(termino: string) {
    let url = `${ this.urlSpotify }search?query=${termino}&type=artist&offset=0&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers }).map( (resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }

  getArtist( id:string ){
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
                    // .map( (resp: any) => {
                    //   this.artistas = resp.artists.items;
                    //   return this.artistas;
                    // });
  }

  getTop( id:string ){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    let headers = this.getHeaders();

    return this.http.get( url, { headers });
  }

}
