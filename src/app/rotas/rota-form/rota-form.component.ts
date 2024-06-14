import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RotaDTO } from 'src/app/core/types/rotaDTO';
import { RotaService } from '../service/rota.service';

@Component({
  selector: 'app-rota-form',
  templateUrl: './rota-form.component.html',
  styleUrls: ['./rota-form.component.css']
})
export class RotaFormComponent implements OnInit {
  rota: RotaDTO = { origem: '', destino: '', valor: 0 };
  id: number | null = null;

  constructor(
    private rotaService: RotaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.rotaService.getRota(this.id).subscribe(rota => this.rota = rota);
    }
  }

  save(): void {
    if (this.id) {
      this.rotaService.updateRota(this.id, this.rota).subscribe(() => this.router.navigate(['/rotas']));
    } else {
      this.rotaService.createRota(this.rota).subscribe(() => this.router.navigate(['/rotas']));
    }
  }
}
