import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeEditorComponent } from '@editor/components/code-editor/code-editor.component';
import { DocsComponent } from '@editor/components/docs/docs.component';
import { CompilerComponent } from '@editor/components/compiler/compiler.component';
import { SidebarComponent } from '@components/bars/sidebar/sidebar.component';
import { TitleBarComponent } from '@components/bars/title-bar/title-bar.component';
import { BottomBarComponent } from '@components/bars/bottom-bar/bottom-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileExplorerComponent } from '@editor/components/file-explorer/file-explorer.component';
import { EditorComponent } from '@editor/editor.component';
import { DirectoryElementComponent } from './components/editor/components/file-explorer/directory-element/directory-element.component';
import { FileElementComponent } from './components/editor/components/file-explorer/file-element/file-element.component';
import { SkinsComponent } from './components/skins/skins.component';
import { SkinsListComponent } from './components/skins/skins-list/skins-list.component';
import { SkinElementComponent } from './components/skins/skins-list/skin-element/skin-element.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { ModalComponent } from './components/modal/modal.component';

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
    DirectoryElementComponent,
    FileElementComponent,
    SkinsComponent,
    SkinsListComponent,
    SkinElementComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, ClickOutsideModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
