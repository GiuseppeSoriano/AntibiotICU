import { Pipe, PipeTransform } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    filterString = filterString.toUpperCase();
    const Antibacterials = [];
    for(const item of value){
      if(item['Name'].startsWith(filterString)){
        Antibacterials.push(item);
      }
    }
    return Antibacterials;
  }

}
