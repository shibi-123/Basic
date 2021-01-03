import React, { Component } from "react";

class List extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                         welcomme , {this.props.jsc.name} , {this.props.jsc.class}
                        
                    </li>
                </ul>
            </div>
        )
    }
}


export default List;