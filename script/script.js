"use strict";
import Slider from "./slider.js";


const images =[`./Image/photos/slide_01.jpg`,`./Image/photos/slide_02.jpg`, `./Image/photos/slide_03.jpg`];
const appli = document.querySelector('.appli');
const slide = Slider.create(images);




appli.append(slide); 
Slider.init()

const right = document.querySelector('.arrowright');
const left = document.querySelector(".arrowleft");
const proj = document.querySelector(".slider-projects")
let move=false;

right.addEventListener("click", moveRight);
left.addEventListener("click", moveLeft);
function moveRight() {
    if(move===false){
        proj.style.transform="translateX(-20%)";
        move=true;
    }else return;
    
}

function moveLeft() {
    if(move===true){
        proj.style.transform="translateX(0)";
        move=false;
    }else return;
}