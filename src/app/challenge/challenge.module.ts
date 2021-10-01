import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule } from 'ngx-videogular';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ImagesComponent } from './images/images.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'



@NgModule({
  declarations: [
    ImagesComponent,
    MediaPlayerComponent,
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    QuillModule
  ]
})
export class ChallengeModule { }
