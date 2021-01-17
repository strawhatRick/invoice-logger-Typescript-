import Invoice from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import Payment from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    //use of tuple
    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];
    
    //doc class object must have HasFormatter interface implemented inside it
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    } else{
        doc = new Payment(...values);
    }

    // console.log(doc);
    //the ul list makes use of the render(item, heading, pos) method to append an li tag to the ul
    list.render(doc, type.value, 'end');
});