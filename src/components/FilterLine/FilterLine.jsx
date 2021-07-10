import React from 'react';
import styles from "./FilterLine.module.css";
import classNames from 'classnames';


const buttonTypes = ['all', 'active', 'completed'];

const FilterLine = (props) => {


    const clearCompletedOnClick = () => props.clearCompletedCreator();

    const ShowWhatButtonOnClick = event => props.changeShowWhatCreator(event.target.id);


    const buttonArray = buttonTypes.map(el => {
        return <button className={classNames({[styles.activeBnt]: el == props.showWhat}, styles.button)} key={el}
                       id={el} onClick={ShowWhatButtonOnClick}>{el[0].toUpperCase() + el.slice(1)}</button>
    });

    return (<div className={classNames(styles.filterLine)}>
        <div className={classNames(styles.filterLine__itemsCount)}>
            <p>{props.activeMattersLength} items left</p>
        </div>
        <div className={classNames(styles.filterLine__showWhat)}>
            {buttonArray}
        </div>
        <div className={classNames(styles.filterLine__clearCompleted)}>
            <p onClick={clearCompletedOnClick} className={classNames(styles.clearCompleted)}>Clear completed</p>
        </div>
    </div>);
}
export default FilterLine;