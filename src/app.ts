import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';

const formContainer = document.querySelector('form');
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ulContainer = document.querySelector('#ulListing') as HTMLUListElement;
console.log('formContainer', formContainer)

const inVoiceData = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
const paymentData = new Payment(tofrom.value, details.value, amount.valueAsNumber);

if(formContainer) {
    formContainer.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        console.log('Form Submitted' )
        let information;
        
        if(type.value === 'invoice') {
            information = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
            console.log('Invoice information is ->', information )
            
            let htmlCode = `<li><h3>Invoice</h3>
            <h4>To/From - ${information.client} </h4>
            <h5>${information.details}</h5>
            <h5>${information.amount}</h5></li>`;
            ulContainer.innerHTML+= htmlCode;

        } else {
            information = new Payment(tofrom.value, details.value, amount.valueAsNumber);
            console.log('Payment information is ->', information );
            
            let htmlCode = `<li><h3>Payment</h3>
            <h4>To/From - ${information.recipient} </h4>
            <h5>${information.details}</h5>
            <h5>${information.amount}</h5></li>`;
            ulContainer.innerHTML+= htmlCode;
        }
    })
}



