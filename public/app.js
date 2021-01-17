import Invoice from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import Payment from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
//console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //use of tuple
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    //doc class object must have HasFormatter interface implemented inside it
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // console.log(doc);
    //the ul list makes use of the render(item, heading, pos) method to append an li tag to the ul
    list.render(doc, type.value, 'end');
});
