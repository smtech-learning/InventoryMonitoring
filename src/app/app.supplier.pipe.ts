import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
name:'filter'
})


export class FilterPipe implements PipeTransform{

transform(supplierNames:any,searchTerm:any):any{
if (searchTerm===undefined) return supplierNames;
return supplierNames.filter(
    function(currentItem){
        return currentItem.name.toLowerCase().includes(searchTerm.toLowerCase()) 
        || currentItem.address.toLowerCase().includes(searchTerm.toLowerCase()) 
    }
)
}
}