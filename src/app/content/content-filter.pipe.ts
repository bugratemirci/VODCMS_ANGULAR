import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(value: Content[], filterText: string = ""): Content[] {
    filterText = filterText.toLocaleLowerCase()

    return filterText ? value.filter((content: Content) => content.contentName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
