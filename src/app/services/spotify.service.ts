import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas: any[] = [];
  constructor(public http: HttpClient) {
    console.log('Servicio de spotify')
  }

  getArtists(termino: string) {
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=20`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQBrxJHD1CXsm5C6B2OfI6DMDlh_2_a3pfOs0svKwJJoLcuKWqLGAgPGhZXdr4TsGMd3VyFRU1fYZQxSX6k'
    });

    return this.http.get(url, { headers }).map( (resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    })
  }

}
