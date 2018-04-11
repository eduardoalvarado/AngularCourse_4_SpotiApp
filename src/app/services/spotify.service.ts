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
      'authorization': 'Bearer BQCSmHSe6n_VS_BRCLi7ghJVIo-BLhQSH1u39ePCZOT5YaXWZbxvPSnIBTtW0bPgJcr16DD-4X8BQTBJ_2g'
    });

    return this.http.get(url, { headers }).map( (resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    })
  }

}
