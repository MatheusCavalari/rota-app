import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rota } from 'src/app/core/types/rota';
import { RotaDTO } from 'src/app/core/types/rotaDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RotaService {

  private apiUrl: string = environment.apiRotaUrl;

  constructor(private http: HttpClient) { }

  getRotas(): Observable<Rota[]> {
    return this.http.get<Rota[]>(`${this.apiUrl}/v1/rota`);
  }

  getRota(id: number): Observable<RotaDTO> {
    return this.http.get<RotaDTO>(`${this.apiUrl}/v1/rota/${id}`);
  }

  createRota(rota: RotaDTO): Observable<Rota> {
    return this.http.post<Rota>(`${this.apiUrl}/v1/rota`, rota);
  }

  updateRota(id: number, rota: RotaDTO): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/v1/rota/${id}`, rota);
  }

  deleteRota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/v1/rota/${id}`);
  }

  getMelhorRota(origem: string, destino: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/v1/rota/consulta?origem=${origem}&destino=${destino}`);
  }
}
