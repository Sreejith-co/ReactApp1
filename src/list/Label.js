import React from "react";
import './Label.css';

class Label extends React.Component {
    render(){
        const props=this.props;
        const style = props.isActive ? {background:'red'} : {background:'green'}
        return <span onClick={props.onAction()} className="list-label-item" style={style}> { props.isActive ? 'Active':'Inactive'} </span>
    }
} 

export default Label; 