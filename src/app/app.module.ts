import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdminHeaderComponent } from './layouts/admin/admin-header/admin-header.component';
import { AdminAsideComponent } from './layouts/admin/admin-aside/admin-aside.component';
import { AdminFooterComponent } from './layouts/admin/admin-footer/admin-footer.component';
import { ClientHeaderComponent } from './layouts/client/client-header/client-header.component';
import { ClientMainComponent } from './layouts/client/client-main/client-main.component';
import { ClientFooterComponent } from './layouts/client/client-footer/client-footer.component';
import { ClientProductComponent } from './layouts/client/client-product/client-product.component';
import { ClientProductDetailComponent } from './layouts/client/client-product-detail/client-product-detail.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminProductComponent } from './layouts/admin/admin-product/admin-product.component';
import { AdminProductFormComponent } from './layouts/admin/admin-product-form/admin-product-form.component';
import { AdminHomeComponent } from './layouts/admin/admin-home/admin-home.component';
import { AdminProductDetailComponent } from './layouts/admin/admin-product-detail/admin-product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminAsideComponent,
    AdminFooterComponent,
    ClientHeaderComponent,
    ClientMainComponent,
    ClientFooterComponent,
    ClientProductComponent,
    ClientProductDetailComponent,
    ClientComponent,
    AdminProductComponent,
    AdminProductFormComponent,
    AdminHomeComponent,
    AdminProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
