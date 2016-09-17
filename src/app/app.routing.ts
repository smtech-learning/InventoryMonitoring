import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {OrderComponent} from './app.ordercomponent';
import {InventoryComponent} from './app.inventorycomponent';
import {SuppliersComponent} from './app.supplierscomponent';
import {RatingsComponent} from './app.ratingscomponent';
import {PageNotFoundComponent} from './app.pagenotfoundcomponent'


const appRoutes :Routes = [
{path:'Orders',component:OrderComponent},
{path:'Inventory',component:InventoryComponent},
{path:'Suppliers',component:SuppliersComponent},
{path:'Ratings',component:RatingsComponent},
{path:'**',component:PageNotFoundComponent},
];


export const routing = RouterModule.forRoot(appRoutes);

