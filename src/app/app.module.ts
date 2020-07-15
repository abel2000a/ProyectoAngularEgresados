import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import { LoginSignupService } from './services/auth/login-signup.service';
import { TokenService } from './services/auth/token.service';
import { AuthService } from './services/auth/auth.service';
import { AfterLoginService } from './services/auth/after-login.service';
import { BeforeLoginService } from './services/auth/before-login.service';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { CapacitacionIndexComponent } from './capacitacion-index/capacitacion-index.component';
import { EgresadoIndexComponent } from './egresado-index/egresado-index.component';
import { CapacitacionFormComponent } from './capacitacion-form/capacitacion-form.component';
import { EgresadoFormComponent } from './egresado-form/egresado-form.component';
import { EgresadoDatosIndexComponent } from './egresado-datos-index/egresado-datos-index.component';
import { DatosGeneralesIndexComponent } from './datos-generales-index/datos-generales-index.component';
import { OfertaLaboralComponent } from './oferta-create/oferta-laboral.component';
import { PerfilegresadoComponent } from './perfilegresado/perfilegresado.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CursosoferIndexComponent } from './cursosofer-index/cursosofer-index.component';
import { OfertalabIndexComponent } from './ofertalab-index/ofertalab-index.component';
import { IndexIndexComponent } from './index-index/index-index.component';
import { MostrarEgresadoIndexComponent } from './mostrar-egresado-index/mostrar-egresado-index.component';
import { MostrarEgresadoFormComponent } from './mostrar-egresado-form/mostrar-egresado-form.component';
import { DetalleIndexComponent } from './detalle-index/detalle-index.component';
import { DetalleFormComponent } from './detalle-form/detalle-form.component';
import { CursoIndexComponent } from './curso-index/curso-index.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { EmpresaIndexComponent } from './empresa-index/empresa-index.component';

const appRoutes: Routes = [


  { path: 'clienteindex',  component: ClienteIndexComponent },
  { path: 'clienteform',  component: ClienteFormComponent },
  { path: 'clienteform/:id',  component: ClienteFormComponent },


  { path: 'curosofer',  component: CursosoferIndexComponent ,
  canActivate: [AfterLoginService]},

  { path: 'egresadodatosindex',  component: EgresadoDatosIndexComponent ,
  canActivate: [AfterLoginService]},


  { path: 'datosgeneralesindex',  component: DatosGeneralesIndexComponent ,
  canActivate: [AfterLoginService]},

  { path: 'mostraregresadosindex',  component: MostrarEgresadoIndexComponent ,
  canActivate: [AfterLoginService]},
  { path: 'mostraregresadosform',  component: MostrarEgresadoFormComponent ,
  canActivate: [AfterLoginService]},
  { path: 'mostraregresadosform/:id',  component: MostrarEgresadoFormComponent ,
  canActivate: [AfterLoginService]},
  
  
  { path: 'detalleindex',  component: DetalleIndexComponent ,
  canActivate: [AfterLoginService]},
  { path: 'detalleform',  component: DetalleFormComponent ,
  canActivate: [AfterLoginService]},
  { path: 'detalleform/:id',  component: DetalleFormComponent ,
  canActivate: [AfterLoginService]},
  
  { path: 'oferta_laboral',  component: OfertaLaboralComponent,
  canActivate: [AfterLoginService] },

  { path: 'cursos_index',  component: CursoIndexComponent,
  canActivate: [AfterLoginService] },

  { path: 'cursos_form',  component: CursoFormComponent,
  canActivate: [AfterLoginService] },

  { path: 'empresa_index',  component: EmpresaIndexComponent,
  canActivate: [AfterLoginService] },

  { path: 'ofertaindex',  component: OfertalabIndexComponent ,
  canActivate: [AfterLoginService]},


  { path: 'perfilegresado',  component: PerfilegresadoComponent,
  canActivate: [AfterLoginService] },


  { path: '**', component: PageNotFoundComponent,
  canActivate: [AfterLoginService] },

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,

    PageNotFoundComponent,
    ClienteIndexComponent,
    ClienteFormComponent,
    CapacitacionIndexComponent,
    EgresadoIndexComponent,
    CapacitacionFormComponent,
    EgresadoFormComponent,
    EgresadoDatosIndexComponent,
    DatosGeneralesIndexComponent,

    OfertaLaboralComponent,
    PerfilegresadoComponent,
    FilterPipe,

    CursosoferIndexComponent,
    OfertalabIndexComponent,
    IndexIndexComponent,
    MostrarEgresadoIndexComponent,
    MostrarEgresadoFormComponent,
    DetalleIndexComponent,
    DetalleFormComponent,
    CursoIndexComponent,
    CursoFormComponent,
    EmpresaIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SnotifyModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      
    )
  ],
  providers: [
    LoginSignupService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
