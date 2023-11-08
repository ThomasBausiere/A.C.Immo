"use strict";
import Slider from "./slider.js";


const images =[`./image/photos/slide_01.jpg`,`./image/photos/slide_02.jpg`, `./image/photos/slide_03.jpg`];
const appli = document.querySelector('.appli');
const slide = Slider.create(images);




            appli.append(slide); 
            Slider.init()