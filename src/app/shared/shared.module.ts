import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch/watch.component';
import { ShortcutPipe } from './pipes/shortcut.pipe';
import { ChangeColorDirective } from './directives/change-color.directive';



@NgModule({
  declarations: [WatchComponent, ShortcutPipe, ChangeColorDirective],
  imports: [
    CommonModule
  ],
  exports: [WatchComponent, ShortcutPipe, ChangeColorDirective]
})
export class SharedModule { }
