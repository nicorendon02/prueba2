import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ImagesComponent } from './images/images.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { TextEditorComponent } from './text-editor/text-editor.component';


@NgModule({
  declarations: [
    ImagesComponent,
    MediaPlayerComponent,
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule
  ]
})
export class ChallengeModule { }
