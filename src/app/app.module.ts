import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeEditorComponent } from './editor/pages/code-editor/code-editor.component';
import { DocsComponent } from './editor/components/docs/docs.component';
import { CompilerComponent } from './editor/components/compiler/compiler.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileExplorerComponent } from './editor/components/file-explorer/file-explorer.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    DocsComponent,
    CompilerComponent,
    SidebarComponent,
    TitleBarComponent,
    BottomBarComponent,
    FileExplorerComponent,
    EditorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
