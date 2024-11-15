import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Row from 'react-bootstrap/esm/Row';
import categry from '../Assets/images/category-1.svg'
import Col from 'react-bootstrap/esm/Col';
import Product from './Product';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CategorySidebar from './CategorySidebar';

const Listing = () => {
    return (
        <div className='listing'>
            <Container>
                <div className='list-heading'>
                    <h2>Snack</h2>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><ArrowForwardIosOutlinedIcon /></li>
                        <li>Shop</li>
                        <li><ArrowForwardIosOutlinedIcon /></li>
                        <li>Snack</li>

                    </ul>
                </div>


                <Row>
                    <Col xl={9}>
                        <div className='category-left'>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />

                        </div>
                    </Col>
                    <Col xl={3}>
                       <CategorySidebar/>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listing