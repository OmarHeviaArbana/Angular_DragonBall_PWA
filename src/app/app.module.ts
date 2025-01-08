import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import  {MatChipsModule } from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CardComponent } from './shared/Components/card/card.component';
import { GridComponent } from './shared/Components/grid/grid.component';
import { SpinnerComponent } from './shared/Components/spinner/spinner.component';
import { ListComponent } from './shared/Components/list/list.component';
import { ExpansionPanelComponent } from './shared/Components/expansion-panel/expansion-panel.component';
import { HeaderToolbarComponent } from './shared/Components/header-toolbar/header-toolbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterDetailComponent,
  CardComponent,
  GridComponent,
  SpinnerComponent,
  ListComponent,
  ExpansionPanelComponent,
  HeaderToolbarComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatExpansionModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
