import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import { ChannelsRoutingModule } from './channels-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ],
  declarations: [ChannelsComponent]
})
export class ChannelsModule { }
