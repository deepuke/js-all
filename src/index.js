import './styles.css';
import { cube } from './math.js';

function component() {
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

let element = component();  // Store the element to re-render on print.js changes
document.body.appendChild(element);


