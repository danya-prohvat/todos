import React from 'react';
import styles from "./Item.module.css";
import classNames from 'classnames';
import closeImg from '../../assets/images/closeImg.svg';
import checkMark from '../../assets/images/checkMark.svg';


const Item = (props) => {


    const closeOnClick = () => props.deleteNewItemCreator(props.matter.id);

    const checkMarkOnClick = () => props.toggleDoneCreator(props.matter.id);


    return (<div className={classNames(styles.item)}>
        <div className={classNames(styles.item__conatiner)}>
            <div onClick={checkMarkOnClick} className={classNames(styles.item__circle)}>
                {props.matter.done && <img src={checkMark} alt=""/>}
            </div>
            <div className={classNames(styles.item__text)}>
                <p className={classNames({[styles.crossedOut]: props.matter.done})}>{props.matter.description}</p>
            </div>
            <div className={classNames(styles.item__close)}>
                <img onClick={closeOnClick} src={closeImg} alt=""/>
            </div>
        </div>
        <hr className={classNames(styles.hr)}/>
    </div>);
}

export default Item;