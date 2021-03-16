import { Component, VERSION } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { CategoryService } from "./category.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private categoryService: CategoryService) {}
  searchString: string;
  categories: Observable<string[]> = this.categoryService.getCategories().pipe(
    shareReplay(1)
    // map(c => {
    //   return JSON.parse(c.toString());
    // })
  );
  name = "Angular " + VERSION.major;
}
