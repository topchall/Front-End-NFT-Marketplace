import cn from "classnames" ;
import styles from './index.module.scss';

import { BeatLoader, BarLoader } from 'react-spinners' ;
import { useEffect, useRef, useState,Fragment } from 'react';
import Image from 'next/image';
import BreedingCardInventory from "components/cards/BreedingCardInventory" ;
import SupplymentCardInventory from "components/cards/SupplymentCardInventory" ;
import GoldyCardInventory from "components/cards/GoldyCardInventory" ;
const EnhanceInventory =()=>{

    // rim data

    const rim_breeding_data=[
        {id:'1', image:'/images/charAvartar/goldy2.png', stone:'YAK', stone_image:'/images/goldypass/YAK.png', breed:'5'},
        {id:'2', image:'/images/charAvartar/goldy2.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5'},
    ]

    const rim_supplyment_data=[
        {id:'1', image:'/images/enhancement/incubator.png',  rTime:'71 HRS 9 MINS'},
        
    ]
    const rim_goldy_data=[
        {id:'1', image:'/images/charAvartar/goldy4.png', stone:'YAK', stone_image:'/images/goldypass/YAK.png', breed:'5' , grade:'3'},
        {id:'2', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'3', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'4', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'5', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'6', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'8', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'9', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'10', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'11', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'12', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'13', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'14', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'15', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'16', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'18', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'19', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
        {id:'7', image:'/images/charAvartar/goldy4.png', stone:'OXIL', stone_image:'/images/goldypass/OXIL.png', breed:'5' , grade:'3'},
    ]

    return (
        <div className="flex flex-wrap items-center justify-start bg-[#032C32] pt-[100px] pl-[100px] ">
            {
                rim_supplyment_data.map((item ,inx)=>(
                    <SupplymentCardInventory  id={item.id} image={item.image} rTime={item.rTime} key={inx} />
                ))
            }
            {
                rim_breeding_data.map((item , inx)=>(
                    <BreedingCardInventory id={inx} image={item.image} stone={item.stone} stone_image={item.stone_image} breed={item.breed} key={inx} />
                ))
            }
            {
                rim_goldy_data.map((item, inx)=>(
                    <GoldyCardInventory id={item.id} image={item.image} stone={item.stone} stone_image={item.stone_image} key={inx} breed={item.breed} price={item.grade} />
                ))
            }
        </div>
    )
}

export default EnhanceInventory ;