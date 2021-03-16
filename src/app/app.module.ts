import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CategoryService } from "./category.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, SearchPipe],
  bootstrap: [AppComponent],
  providers: [CategoryService]
})
export class AppModule {}
