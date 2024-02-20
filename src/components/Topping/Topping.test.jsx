import { render, screen } from "@testing-library/react"
import Topping from "."
import { userEvent } from '@testing-library/user-event';


test ('apiden gelen soslar için ekrana kartlar basılıyormu',async()=>{

render(<Topping/>);

const image = await screen.findAllByAltText('sos-resim');

expect(image.length).toBeGreaterThanOrEqual(1);


});


test ('sosları ekleme çıkarma işlemi toplam fiyatı etkiler',async()=>{

render(<Topping/>);

const user=userEvent.setup();

const total =screen.getByRole('heading',{name:/soslar ücreti/i});

const toppings =await screen.findAllByRole('checkbox');


await user.click(toppings[0]);
expect(total).toHaveTextContent(3);


await user.click(toppings[2]);
expect(total).toHaveTextContent(6);

await user.click(toppings[0]);
expect(total).toHaveTextContent(3);

await user.click(toppings[2]);
expect(total).toHaveTextContent(0);

})