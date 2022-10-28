import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    filterString = filterString.toUpperCase();
    console.log(filterString);
    const Items = [];
    for(const item of value){
      let name = item['Name'].toUpperCase();
      if(name.startsWith(filterString)){
        Items.push(item);
      }
    }
    return Items;
  }

}
