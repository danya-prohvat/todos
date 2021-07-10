import React from 'react';
import styles from "./Input.module.css";
import classNames from 'classnames';
import bottomArrow from '../../assets/images/bottomArrow.svg';


const Input = (props) => {

    const inputOnPressedKey = event => {
        if (event.charCode === 13) {
            props.addNewItemCreator(event.target.value);
            event.target.value = '';
        }
    }

    return (<div>
        <div className={classNames(styles.input__container)}>
            <div className={classNames(styles.arrow, {[styles.arrow_visible]:props.matterElementsLength})}><img src={bottomArrow}/></div>
            <input onKeyPress={inputOnPressedKey} className={classNames(styles.input)} placeholder="What needs to be done?" type="text"/>
        </div>
        <hr className={classNames(styles.hr, {[styles.hr_visible]:props.matterElementsLength})}/>
    </div>);
}
export default Input;