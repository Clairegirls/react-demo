// rcc
import React, {Component} from 'react';
import './style.css'

class OrderItem extends Component {
    render() {
        return (
            <div className='orderItem'>
                <div className='orderItem_picContainer'>
                    <img className='orderItem_pic' />
                </div>
                <div className='orderItem_content'>
                    <div className='orderItem_product'>产品名称</div>
                    <div className='orderItem_shop'>商品名称</div>
                </div>
                <div className='orderItem_detail'>
                    <div className='orderItem_price'>13</div>
                    <div><button className='orderItem_btn'>评价</button></div>
                </div>
            </div>
        );
    }
}

export default OrderItem;