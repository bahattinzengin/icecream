
import userEvent from '@testing-library/user-event';
// import  Form from '.';
import Form from '.';
import { fireEvent, render,screen } from '@testing-library/react';


test('koşulların onaylanmasına göre buton aktifliği' ,async()=>{

render (<Form/>);
const user= userEvent.setup();

const orderBtn=screen.getByRole('button');
const checkBox =screen.getByRole('checkbox')
//1
expect(checkBox).not.toBeChecked();
//2
expect (orderBtn).toBeDisabled();
//3
await user.click(checkBox);
//4

expect (orderBtn).toBeEnabled();
//5
await user.click(checkBox);
//6
expect (orderBtn).toBeDisabled();
});

test ('onay butonu hover olunce bildirim ekrana gelir',async()=>{
   render( <Form/>);

   const user =userEvent.setup();

   const checkbox=screen.getByRole('checkbox');
   const button =screen.getByRole('button');

   const popup=screen.getByText(/size gerçekten/i); //regex yöntemi
   await user.click(checkbox);


   fireEvent.mouseEnter(button);


   expect(popup).toBeVisible();


   fireEvent.mouseLeave(button);

   
   expect(popup).not.toBeVisible();




})