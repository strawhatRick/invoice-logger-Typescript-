import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement){}
    //item has to be an object which has HasFormatter implemented inside it
    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
        //preparing the li tag before it gets added to the ul list 
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pos === 'start'){
            this.container.prepend(li);
        } else{
            this.container.append(li);
        }
    }
}