// rcc
import React, {Component} from 'react';
import './style.css'

class OrderItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: props.data.comment || '',
            editing: false,
            stars: props.data.stars
        }
    }

    render() {
        const {shop, product, price, picture, ifCommented} = this.props.data
        return (
            <div className='orderWrap'>
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
                        <button
                            className={["orderItem_btn", ifCommented? 'orderItem_btn_red' : 'null'].join(' ')}
                            onClick={ifCommented?this.handleOpenEditArea:null}
                        >
                            {ifCommented ? '评价' : '已评价'}
                        </button>
                    </div>
                </div>
                <div>
                    {this.state.editing?this.renderEditArea():null}
                </div>
            </div>
        );
    }

    renderEditArea() {
        return (
            <div className='orderItem_commentContainer'>
                <textarea
                    onChange={this.handleCommentChange}
                    className='orderItem_comment'
                    value={this.state.comment}
                ></textarea>
                {this.renderStars()}
                <button
                    className='orderItem_btn orderItem_btn_red'
                    onClick={this.handleSubmitComment}>提交</button>
                <button
                    className='orderItem_btn'
                    onClick={this.handleCancelComment}>取消</button>
            </div>
        )
    }

    renderStars() {
        const { stars } = this.state
        return(
            <div className='orderStars'>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const lightClass = stars >= item?'orderItemRed':''
                        return (
                            <span
                                className={''+ lightClass}
                                key={index}
                                onClick={this.handleClickStars.bind(this,item)}>
                                ☆
                            </span>
                        )
                    })

                }
            </div>
        )
    }
    handleOpenEditArea = () => {
        this.setState({
            editing: true
        })
    }
    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    handleClickStars = (stars) => {
        console.log(stars)
        this.setState({
            stars: stars
        })
    }
    handleCancelComment = () =>{
        this.setState({
            editing: false,
            comment: this.props.data.comment || '',
            stars: this.props.data.stars || 0
        })
    }
    handleSubmitComment = () =>{
        const { id } = this.props.data;
        const { comment,stars } = this.state
        this.setState({
            editing: false
        })
        this.props.onSubmit(id, comment, stars)
    }
}

export default OrderItem;