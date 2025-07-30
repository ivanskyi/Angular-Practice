import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'revert',
  standalone: false
})
export class RevertPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
