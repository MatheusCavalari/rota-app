import { Component, OnInit } from '@angular/core';
import { Rota } from '../../core/types/rota';
import { RotaService } from '../service/rota.service';

@Component({
  selector: 'app-rota-list',
  templateUrl: './rota-list.component.html',
  styleUrls: ['./rota-list.component.css']
})
export class RotaListComponent implements OnInit {
  rotas: Rota[] = [];

  constructor(private rotaService: RotaService) { }

  ngOnInit(): void {
    this.rotaService.getRotas().subscribe(rotas => this.rotas = rotas);
  }

  deleteRota(id: number): void {
    this.rotaService.deleteRota(id).subscribe(() => {
      this.rotas = this.rotas.filter(rota => rota.id !== id);
    });
  }
}
