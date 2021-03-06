import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatExpansionModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgTreeRoutingModule } from "./ng-tree-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { NgTreeComponent } from "./ng-tree/ng-tree.component";
import { CommentFilterPipe } from "./pipes/comment-filter.pipe";
import { CommentsService } from "./services/comments.service";


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        NgTreeComponent,
        CommentFilterPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgTreeRoutingModule,
        MatExpansionModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        FormsModule
    ],
    providers: [
        CommentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
