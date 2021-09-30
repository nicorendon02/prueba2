import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
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
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }