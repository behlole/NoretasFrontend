import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BannerComponent} from './components/banner/banner.component';
import {CardsComponent} from './components/cards/cards.component';
import {ServicesComponent} from './components/services/services.component';
import {LatestEventsComponent} from './components/latest-events/latest-events.component';
import {TestimonialsComponent} from './components/testimonials/testimonials.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {BookEventComponent} from './components/book-event/book-event.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardsComponent,
    ServicesComponent,
    LatestEventsComponent,
    TestimonialsComponent,
    GalleryComponent,
    BookEventComponent,
    BlogsComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    CardsComponent,
    ServicesComponent,
    LatestEventsComponent,
    TestimonialsComponent,
    GalleryComponent,
    BookEventComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
