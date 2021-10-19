import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { ImagesComponent } from './images/images.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

const routes: Routes = [
  {
    path: '',

    
    data: {
      title: 'Challenge'
    },
    children: [
       {
         path: 'images',
         component: ImagesComponent,
         data: {
           title: 'images'
         }
       },
       {
        path: 'media-player',
        component: MediaPlayerComponent,
        data: {
          title: 'Media Player'
        }
      },
      {
        path: 'text-editor',
        component: TextEditorComponent,
        data: {
          title: 'Text Editor'
        }
      },
      {
        path: 'data-tables',
        component: DataTablesComponent,
        data: {
          title: 'Data Tables'
        }
      },
      
      {
        path: 'org-chart',
        component: OrgChartComponent,
        data: {
          title: 'Organization Chart'
        }
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
