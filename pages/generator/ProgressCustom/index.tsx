import cn from 'classnames';
import styles from './index.module.scss';
import ProgressBar from "@ramonak/react-progress-bar";


import { useEffect, useRef, useState,Fragment } from 'react';

const ProgressCustom =({bgcolor , completed})=>{


    
    return(
        <ProgressBar 
        completed={completed} 
        className="wrapper"
        barContainerClassName="container"
        labelClassName="label"
        bgColor={bgcolor}
    />
    )
}

export default ProgressCustom ;