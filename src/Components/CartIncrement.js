import React,{useState} from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const CartIncrement = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
      };

      const decrement = () => {
        setCount(count - 1);
      };
    return (
        <div className='input-increment'>
            <input type='number' value={count} />
            <div className='arrow-btn'>
                <button onClick={decrement} ><KeyboardArrowDownOutlinedIcon /></button>
                <button onClick={increment}><KeyboardArrowUpOutlinedIcon /></button>

            </div>
        </div>
    )
}

export default CartIncrement