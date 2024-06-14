import { Component } from '@angular/core';
import { RotaService } from '../service/rota.service';

@Component({
  selector: 'app-melhor-rota',
  templateUrl: './melhor-rota.component.html',
  styleUrls: ['./melhor-rota.component.css']
})
export class MelhorRotaComponent {
  origem: string = '';
  destino: string = '';
  resultado: string | null = null;

  constructor(private rotaService: RotaService) { }

  consultar(): void {
    this.rotaService.getMelhorRota(this.origem, this.destino).subscribe({
      next: (result: any) => {
        this.resultado = result.rota;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
