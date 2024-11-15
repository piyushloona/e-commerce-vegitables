import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import CategorySidebar from './CategorySidebar'
import mango from '../Assets/images/mango.jpg'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { Link } from 'react-router-dom'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Product from './Product'
import CartIncrement from './CartIncrement'
 


const ProductDetail = () => {

   

      

    return (
        <div className='product-detail py-3'>
            <Container>


                <Row>
                    <Col xl={12}>
                        <div className='left-product-detail d-flex'>
                            <div className='image-zoom'>
                           <img src={mango}/>


                            </div>
                            <div className='right-desc'>
                                <span className='sale'>Sale Off</span>
                                <h3>Seeds of Change <br /> Organic Quinoa, Brown</h3>
                                <div className='star'>
                                    <div className='star-icon'>
                                        <StarOutlineOutlinedIcon />
                                        <StarOutlineOutlinedIcon />
                                        <StarOutlineOutlinedIcon />
                                        <StarOutlineOutlinedIcon />
                                        <StarOutlineOutlinedIcon />
                                    </div>
                                    <p>(32 reviews)</p>
                                </div>

                                <div className='dollar d-flex'>
                                    <h4>$38</h4>
                                    <div className='rating'>
                                        <span>26% Off</span>
                                        <h5>$52</h5>
                                    </div>
                                </div>


                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                                </p>


                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                                </p>


                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                                </p>

                                <ul className='weight'>
                                    <h4>Size / Weight:</h4>
                                    <li>
                                        <Link to="#">50g</Link>
                                    </li>

                                    <li>
                                        <Link to="#">80g</Link></li>
                                    <li><Link to="#">60g</Link></li>
                                    <li><Link to="#">100g</Link></li>
                                    <li><Link to="#">150g</Link></li>


                                </ul>


                                <div className='btn-input'>
                                 <CartIncrement/>
                                    <button className='add-to-cart'><ShoppingCartOutlinedIcon className='mx-2' />Add To Cart</button>
                                    <button className='fav-icon'><FavoriteBorderOutlinedIcon /></button>
                                    <button className='fav-icon'><CompareArrowsOutlinedIcon /></button>

                                </div>
                            </div>

                        </div>
                    </Col>


                </Row>
            </Container>
            <Container>
                <div className='row tabs-system'>

                    <Col xl={9} className='col-set'>
                        <Tabs>
                            <TabList>
                                <Tab>
                                    Description
                                </Tab>
                                <Tab>
                                    Additional Info
                                </Tab>
                                <Tab>
                                    Vendor
                                </Tab>
                            </TabList>

                            <TabPanel>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.

                                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                                <h2>Packaging & Delivery
                                </h2>
                                <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.

                                </p>
                                <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.

                                </p>

                            </TabPanel>
                            
                            <TabPanel>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.

                                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                                
                                <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.

                                </p>
                                <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.

                                </p>
                                <h2>Packaging & Delivery
                                </h2>

                            </TabPanel>

                            <TabPanel>
                            <h2>Packaging & Delivery
                            </h2>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.

                                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                               
                                <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.

                                </p>
                                <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.

                                </p>

                            </TabPanel>
                        </Tabs>
                    </Col>
                </div>


                <Row>
                    <Col xl={12}>
                        <div className='product-section my-3'>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            
                        </div>
                    </Col>
                </Row>
            </Container>


            
        </div>

    )
}

export default ProductDetail