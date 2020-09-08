// rcc
import React, {Component} from 'react';
import './style.css'

class OrderItem extends Component {
    render() {
        const {shop, product, price, picture, ifCommented} = this.props.data
        return (
            <div className='orderItem'>
                <div className='orderItem_left'>
                    <div className='orderItem_picContainer'>
                        <img className='orderItem_pic' src={picture} />
                    </div>
                    <div className='orderItem_content'>
                        <div className='orderItem_product'>{product}</div>
                        <div className='orderItem_shop'>{shop}</div>
                        <div className='orderItem_price'>￥{price}</div>
                    </div>
                </div>
                <div className='orderItem_detail'>
                    {/*{*/}
                    {/*    ifCommented?<button className='orderItem_btn orderItem_btn_red'>评价</button>*/}
                    {/*        :<button className='orderItem_btn orderItem_btn_red'>已评价</button>*/}
                    {/*}*/}
                    <button className={["orderItem_btn", ifCommented? 'orderItem_btn_red' : 'null'].join(' ')}>{ifCommented ? '评价' : '已评价'}</button>

                    <div></div>
                </div>
            </div>
        );
    }
}

export default OrderItem;