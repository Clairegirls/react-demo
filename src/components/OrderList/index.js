// rcc
import React, {Component} from 'react';
import OrderItem from "../OrderItem";
import './style.css'

class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('/mock/orders.json').then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    console.log(data)
                    this.setState({
                        data
                    })
                })
            }
        })
    }

    render() {
        return (
            <div className='orderList'>
                {
                    this.state.data.map(item=>{
                        return <OrderItem
                            key={item.id}
                            data={item}
                            onSubmit={this.handleSubmit}/>
                    })
                }
            </div>
        );
    }
    handleSubmit = (id, comment, stars) =>{
        const newData = this.state.data.map(item => {
            return item.id === id ?
                {
                    ...item, comment, stars, ifCommented: false
                }: item;
        })
        this.setState({
            data: newData
        })
    }
}

export default OrderList;