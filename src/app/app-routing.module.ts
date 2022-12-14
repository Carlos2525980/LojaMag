import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcasComponent } from './paginas/calcas/calcas.component';
import { IndexComponent } from './paginas/index/index.component';
import { MacacoeseconjuntosComponent } from './paginas/macacoeseconjuntos/macacoeseconjuntos.component';
import { VestidosComponent } from './paginas/vestidos/vestidos.component';
import { BlusasComponent } from './paginas/blusas/blusas.component';
import { NovidadesComponent } from './paginas/novidades/novidades.component';
import { ColecoesComponent } from './paginas/colecoes/colecoes.component';
import { AcessoriosComponent } from './paginas/acessorios/acessorios.component';
import { BazarComponent } from './paginas/bazar/bazar.component';
import { CoresComponent } from './paginas/cores/cores.component';

const routes: Routes = [


  { path: 'index', component: IndexComponent },
  { path: 'calcas', component: CalcasComponent },
  { path: 'vestidos', component: VestidosComponent },
  { path: 'macacoeseconjuntos', component: MacacoeseconjuntosComponent },
  { path: 'blusas', component: BlusasComponent },
  { path: 'novidades', component: NovidadesComponent },
  { path: 'colecoes', component: ColecoesComponent },
  { path: 'acessorios', component: AcessoriosComponent },
  { path: 'bazar', component: BazarComponent },
  { path: 'cores', component: CoresComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
