import React from 'react'
import { Link } from 'react-router-dom'
import categry from '../Assets/images/category-1.svg'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const CategorySidebar = () => {
  return (
    <div>
         <div className='category-list'>
                            <h2 className='sale-title'>Category</h2>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <div className=''>
                                            <p>Milk and Dairies</p>
                                            <img src={categry} />

                                        </div>
                                        <label>6</label>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className=''>
                                            <p>Clothing</p>
                                            <img src={categry} />

                                        </div>
                                        <label>6</label>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className=''>
                                            <p>Pet Foods</p>
                                            <img src={categry} />

                                        </div>
                                        <label>6</label>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className=''>
                                            <p>Banking and Materials</p>
                                            <img src={categry} />

                                        </div>
                                        <label>6</label>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className=''>
                                            <p>Fresh Fruits</p>
                                            <img src={categry} />

                                        </div>
                                        <label>6</label>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='fill-price'>
                            <h2 className='sale-title'>Fill By Price</h2>
                            <h4>Color</h4>

                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1"> I have a bike</label><br />
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                            <label for="vehicle2"> I have a car</label><br />
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                            <label for="vehicle3"> I have a boat</label>
                            <h4>Item Condition</h4>
                            <input type="checkbox" id="vehicle4" name="vehicle1" value="Bike" />
                            <label for="vehicle4"> I have a bike</label><br />
                            <input type="checkbox" id="vehicle5" name="vehicle5" value="Car" />
                            <label for="vehicle5"> I have a car</label><br />
                            <input type="checkbox" id="vehicle6" name="vehicle3" value="Boat" />
                            <label for="vehicle6"> I have a boat</label><br />

                            <button className='  my-3'><FilterAltOutlinedIcon/>Filter</button>

                        </div>

    </div>
  )
}

export default CategorySidebar