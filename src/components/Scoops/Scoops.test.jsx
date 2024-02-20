import{ render,screen }  from '@testing-library/react';
import Scoops from './index';
import userEvent from '@testing-library/user-event';

test ('API den gelen veriler için ekrana kartlar basılır', async()=>{
render(<Scoops/>)

const image =await screen.findAllByAltText('çeşit-resim');
expect (image.length).toBeGreaterThanOrEqual(1);


});

test ('Çeşit ekleme ve sıfırlamının toplama etkisi',async()=>{

render(<Scoops/>)
const user =userEvent.setup();

const addButtons =await screen.findAllByRole('button',{name:'Ekle'});

const delButtons= await screen.findAllByRole('button',{name:'Sıfırla'});

const total = screen.getByRole('heading', {
    name: /çeşitler ücret/i,
  });

expect(total).toHaveTextContent(0);

await user.dblClick(addButtons[2]);
expect(total).toHaveTextContent(0);
await user.click(delButtons[0]);
expect (total).toHaveTextContent(40);
await user.click(delButtons[2]);
expect(total).toHaveTextContent(0)





})