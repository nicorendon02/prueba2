import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule } from 'ngx-videogular';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ImagesComponent } from './images/images.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { OrganizationChartModule } from 'primeng/organizationchart';

@NgModule({
  declarations: [
    ImagesComponent,
    MediaPlayerComponent,
    TextEditorComponent,
    DataTablesComponent,
    OrgChartComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    QuillModule,
    NgxDatatableModule,
    OrganizationChartModule 
  ]
})
export class ChallengeModule { }
