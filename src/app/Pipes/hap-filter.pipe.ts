import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hapFilter'
})
export class HapFilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    filterString = filterString.toUpperCase();
    console.log(filterString);
    const Items = [];
    for(const item of value){
      let Antibiotic1 = item['AntibioticName1'].toUpperCase();
      let Antibiotic2 = '';
      let Antibiotic3 = '';
      if(item['AntibioticName2'])
        Antibiotic2 = item['AntibioticName2'].toUpperCase();
      if(item['AntibioticName3'])
        Antibiotic3 = item['AntibioticName3'].toUpperCase();
      if(Antibiotic1.startsWith(filterString) || Antibiotic2.startsWith(filterString) || Antibiotic3.startsWith(filterString)){
        Items.push(item);
      }
    }
    return Items;
  }

}
