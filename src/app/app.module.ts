// angular default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Prime NG
import { MessageService } from 'primeng/api';
// app related
import { AppComponent } from 'src/app/app.component';
import { AuthGuard } from 'src/app/core/gaurds/auth.gaurd';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { MenuComponent } from 'src/app/shared/layout/menu/menu.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { UserIdleModule } from 'angular-user-idle';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppCommonModule } from 'src/app/app.common.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ErrorInterceptor } from './core/config/error.interceptor';
import { AuthInterceptor } from './core/config/auth.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserIdleModule.forRoot({ idle: 300, timeout: 1, ping: null }),
    HttpClientModule,
    AppCommonModule,
  ],
  exports: [],
  providers: [
    MessageService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
