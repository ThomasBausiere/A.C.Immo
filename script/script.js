"use strict";
import Slider from "./slider.js";


const images =[`./Image/photos/slide_01.jpg`,`./Image/photos/slide_02.jpg`, `./Image/photos/slide_03.jpg`];
const appli = document.querySelector('.appli');
const slide = Slider.create(images);




            appli.append(slide); 
            Slider.init()