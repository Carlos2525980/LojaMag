import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './paginas/index/index.component';
import { VestidosComponent } from './paginas/vestidos/vestidos.component';
import { MacacoeseconjuntosComponent } from './paginas/macacoeseconjuntos/macacoeseconjuntos.component';
import { CalcasComponent } from './paginas/calcas/calcas.component';
import { BlusasComponent } from './paginas/blusas/blusas.component';
import { NovidadesComponent } from './paginas/novidades/novidades.component';
import { BazarComponent } from './paginas/bazar/bazar.component';
import { AcessoriosComponent } from './paginas/acessorios/acessorios.component';
import { ColecoesComponent } from './paginas/colecoes/colecoes.component';
import { CoresComponent } from './paginas/cores/cores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    VestidosComponent,
    MacacoeseconjuntosComponent,
    CalcasComponent,
    BlusasComponent,
    NovidadesComponent,
    BazarComponent,
    AcessoriosComponent,
    ColecoesComponent,
    CoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
