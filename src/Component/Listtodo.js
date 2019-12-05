import React from 'react'
import { connect } from 'react-redux'
import {Removetodo, complete, saveTodo} from '../actions/actions'
class Listtodo extends React.Component {
    render() {
        return (
            <div>
                {this.props.allState.todos.map((el, index) => <div key={index}>
                    <h1 className={el.complete ? "crossed" : ""}>{el.text}</h1>
        <button onClick={()=>this.props.comp(el)} >{el.complete ? "Undo" : "Complete"}</button>
                    <button onClick={()=>this.props.save(el)}>Edit</button>
                    <button onClick={()=>this.props.remove(el.text)}>Delete</button>
                </div>)}
            </div>
        )
    }
}
const mapDispatchToprops=(dispatch)=>{
    return {
        remove: texte => dispatch(Removetodo(texte)),
        comp : el => dispatch(complete(el)),
        save : el => dispatch(saveTodo(el))
    }
}
const mapStateToProps = (state) => {
    return {
        allState: state.todosReducer
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Listtodo )