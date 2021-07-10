import React from 'react';
import styles from "./Todos.module.css";
import classNames from 'classnames';
import Input from "../Input/Input";
import Item from "../Item/Item";
import FilterLine from "../FilterLine/FilterLine";
import {connect} from "react-redux";
import {
    addNewItemCreator,
    deleteNewItemCreator,
    toggleDoneCreator,
    clearCompletedCreator,
    changeShowWhatCreator
} from "../../rudux/todos-reducer";


const Todos = (props) => {

    let matterElements = props.matter.map(el => {
        if (props.showWhat === 'active') {
            if (!el.done) return <Item toggleDoneCreator={props.toggleDoneCreator}
                                       deleteNewItemCreator={props.deleteNewItemCreator}
                                       matter={el} key={el.id}/>
        } else if (props.showWhat === 'completed') {
            if (el.done) return <Item toggleDoneCreator={props.toggleDoneCreator}
                                      deleteNewItemCreator={props.deleteNewItemCreator}
                                      matter={el} key={el.id}/>
        } else {
            return <Item toggleDoneCreator={props.toggleDoneCreator} deleteNewItemCreator={props.deleteNewItemCreator}
                         matter={el} key={el.id}/>
        }
    }).filter(el => el);


    const countActiveMattersLength = () => props.matter.reduce((accumulator, el) => !el.done ? accumulator + 1 : accumulator, 0);


    return (<div>
        <h1 className={classNames(styles.title)}>todos</h1>
        <div className={classNames(styles.todos)}>
            <Input addNewItemCreator={props.addNewItemCreator} matterElementsLength={!!props.matter.length}/>
            {matterElements}
            {!!props.matter.length && <FilterLine changeShowWhatCreator={props.changeShowWhatCreator}
                                                  showWhat={props.showWhat}
                                                  clearCompletedCreator={props.clearCompletedCreator}
                                                  activeMattersLength={countActiveMattersLength()}/>}
        </div>
        <div className={classNames(styles.footer)}>
            <h6>press Enter to add item</h6>
            <h6>created by <span>Daniil Prokhvatilov</span></h6>
        </div>
    </div>);
}

let mapStateToProps = (state) => ({
    matter: state.todosPage.matter,
    showWhat: state.todosPage.showWhat,
})

export default connect(mapStateToProps, {
    addNewItemCreator,
    deleteNewItemCreator,
    toggleDoneCreator,
    clearCompletedCreator,
    changeShowWhatCreator
})(Todos);