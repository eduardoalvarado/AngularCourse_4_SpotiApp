import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token = "BQCgZUVP2wS7w5Y2ISZEvOZIU3TRR--0lx5b1wdknxlmw2sDarDz6E2HyTluvzsUBgVCeA36zmNlxZLclhg";


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
