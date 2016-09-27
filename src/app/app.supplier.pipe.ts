import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
name:'filter'
})


export class FilterPipe implements PipeTransform{

transform(suppliers:any,searchTerm:any):any{
if (suppliers===undefined) return suppliers;
return suppliers.filter(
    function(currentItem){
        return currentItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
)
}
}