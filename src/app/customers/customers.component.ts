import { Component } from '@angular/core';
import {Customer} from '../customer/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent {
  customers: Customer [] = [
    {customerNo: 1, name: 'Pikachu', address: '', city: 'Kanto', state: 'Kanto', country: 'Pokemon Yellow'},
    {customerNo: 2, name: 'Eevee', address: '', city: 'Johto', state: 'Johto', country: 'Pokemon Let\'s Go Eevee'},
    {customerNo: 3, name: 'Snorlax', address: '', city: 'Galar', state: 'Galar', country: 'Pokemon Sword'},
    {customerNo: 4, name: 'Steelix', address: '', city: 'Unova', state: 'Unova', country: 'Pokemon Soul Silver'},
    {customerNo: 5, name: 'Heracross', address: '', city: 'Hoenn', state: 'Hoenn', country: 'Pokemon Gold'},
  ];
}
