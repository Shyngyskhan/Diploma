import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import BoutiqueInfo from './Sections/BoutiqueInfo';
import { addToCart, deleteBoutique } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Sections/Chart'

function DetailBoutiquePage(props) {
    const dispatch = useDispatch();
    const boutiqueId = props.match.params.boutiqueId
    const [Boutique, setBoutique] = useState([])

    useEffect(() => {
        Axios.get(`/api/boutique/boutiques_by_id?id=${boutiqueId}&type=single`)
            .then(response => {
                setBoutique(response.data[0])
            })

    }, [])

    const addToCartHandler = (boutiqueId) => {
        dispatch(addToCart(boutiqueId))
    }

    const deleteBoutiqueHandler = (boutiqueId) => {
        dispatch(deleteBoutique(boutiqueId))
    }

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Boutique.title}</h1>
            </div>

            <br />
            
            <Row  >
                {/* <Col lg={12} xs={24}>
                    <ProductImage detail={Product} />
                </Col> */}
                {/* <Col lg={12} xs={24}> */}
                <Col>
                    <BoutiqueInfo
                        deleteBoutique={deleteBoutiqueHandler}
                        detail={Boutique} />
                </Col>
            </Row>
        </div>
    )
}

export default DetailBoutiquePage
