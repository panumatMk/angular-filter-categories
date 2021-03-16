import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(value: string[], args?: string): any {
    if (!args) {
      return value;
    }
    return value.filter(val => val.includes(args));
  }
}
