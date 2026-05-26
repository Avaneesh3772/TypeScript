import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
const formContainer = document.querySelector('form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ulContainer = document.querySelector('#ulListing');
console.log('formContainer', formContainer);
const inVoiceData = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
const paymentData = new Payment(tofrom.value, details.value, amount.valueAsNumber);
if (formContainer) {
    formContainer.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Form Submitted');
        let information;
        if (type.value === 'invoice') {
            information = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
            console.log('Invoice information is ->', information);
            let htmlCode = `<li><h3>Invoice</h3>
            <h4>To/From - ${information.client} </h4>
            <h5>${information.details}</h5>
            <h5>${information.amount}</h5></li>`;
            ulContainer.innerHTML += htmlCode;
        }
        else {
            information = new Payment(tofrom.value, details.value, amount.valueAsNumber);
            console.log('Payment information is ->', information);
            let htmlCode = `<li><h3>Payment</h3>
            <h4>To/From - ${information.recipient} </h4>
            <h5>${information.details}</h5>
            <h5>${information.amount}</h5></li>`;
            ulContainer.innerHTML += htmlCode;
        }
    });
}
