import React from 'react';
class TodoItem extends React.Component{
    //子组件如果想和父组件通信，要调用父组件传递过来的方法
    handleDelete(index){
        this.props.delete(index)
    }
    render() {
        return (
            <div onClick={this.handleDelete.bind(this,this.props.index)}>
                {this.props.content}
            </div>
        )
    }

}
export default TodoItem;