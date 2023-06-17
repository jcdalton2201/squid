
import '../../dist/squid-dialog/squid-dialog.js';
import '../../dist/squid-button/squid-button.js';
//import readme from './readme.md';
export default {
    title: 'dialog',
    parameters: {
        actions: {
            // handles: ['click', 'squid-button'],
        },
    },
};

const temp = (args) => {

    return `
    <squid-dialog ${args.open?'open':''}> 
    <h1> ${args.label}</h1>
    </squid-dialog>
    `;
};

export const dialog = temp.bind({});
dialog.args ={
    label:'We Have a Title',
    open:false,
  
};
dialog.story = {
    name: 'dialog',
    parameters: {
        //notes: {readme},
        argTypes:{
            label:{control: 'text'}
        },
        myaction: () =>{
            document.addEventListener('click', ()=> console.log('meme'));
        }
    },
};

// dialog.querySelector('squid-button');
    