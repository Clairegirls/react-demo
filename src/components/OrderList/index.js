// rcc
import React, {Component} from 'react';
import OrderItem from "../OrderItem";
import './style.css'

const data = [
    {
        id: 1,
        shop: '院落创意菜',
        picture:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1087088136,954384588&fm=26&gp=0.jpg',
        product: '西蓝花',
        price: 19.9,
        ifCommented: true
    },
    {
        id: 2,
        shop: '院落创意菜',
        picture:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1087088136,954384588&fm=26&gp=0.jpg',
        product: '西蓝花',
        price: 19.9,
        ifCommented: true
    },
    {
        id: 3,
        shop: '院落创意菜',
        picture:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1087088136,954384588&fm=26&gp=0.jpg',
        product: '西蓝花',
        price: 19.9,
        ifCommented: true
    },
    {
        id: 4,
        shop: '院落创意菜',
        picture:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1087088136,954384588&fm=26&gp=0.jpg',
        product: '西蓝花',
        price: 19.9,
        ifCommented: true
    }
]

class OrderList extends Component {
    render() {
        return (
            <div className='orderList'>
                {
                    data.map(item=>{
                        return <OrderItem key={item.id} data={item}/>
                    })
                }
            </div>
        );
    }
}

export default OrderList;