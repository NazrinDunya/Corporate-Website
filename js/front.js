import { langdata } from "./langdata.js";
import { headerdata } from "./headerdata.js";
import { firstPage } from "./firstPage.js";
import { secondPage } from "./secondPage.js";
import { thirdPage } from "./thirdPage.js";
import { fourthPage } from "./fourthPage.js";
import { fifthPage } from "./fifthPage.js";
const langBtn=document.querySelector('#lang');
const langItem=document.querySelectorAll('.first');
const langItem1=document.querySelectorAll('.second');
const langItem2=document.querySelectorAll('.page1');
const langItem3=document.querySelectorAll('.page2');
const langItem4=document.querySelectorAll('.page3');
const langItem5=document.querySelectorAll('.page4');
const langItem6=document.querySelectorAll('.page5');

const multiLang=()=>{
    if(langBtn.innerHTML==='Azerbaijani(AZE)'){
        for(let x in headerdata.az){
            langItem1[x].innerHTML=headerdata.az[x]
        }
        langBtn.innerHTML='English(US)'
        for(let x in langdata.az){
            langItem[x].innerHTML=langdata.az[x]
        }
        langBtn.innerHTML='English(US)'
        for(let x in firstPage.az){
            langItem2[x].innerHTML=firstPage.az[x]
        }
        langBtn.innerHTML='English(US)'
        for(let x in secondPage.az){
            langItem3[x].innerHTML=secondPage.az[x]
        }
        langBtn.innerHTML='English(US)'
        for(let x in thirdPage.az){
            langItem4[x].innerHTML=thirdPage.az[x]
        }
        langBtn.innerHTML='English(US)'
        for(let x in fourthPage.az){
            langItem5[x].innerHTML=fourthPage.az[x]
        }
        langBtn.innerHTML='English(US)'
        for(let x in fifthPage.az){
            langItem6[x].innerHTML=fifthPage.az[x]
        }
        langBtn.innerHTML='English(US)'
    }else {
        for(let x in headerdata.en){
            langItem1[x].innerHTML=headerdata.en[x]
        }
        langBtn.innerHTML='Azerbaijani(AZE)'
        for(let x in langdata.en){
            langItem[x].innerHTML=langdata.en[x]
        }
        langBtn.innerHTML='Azerbaijani(AZE)'
        for(let x in firstPage.en){
            langItem2[x].innerHTML=firstPage.en[x]
        }
        langBtn.innerHTML='Azerbaijani(AZE)'
        for(let x in secondPage.en){
            langItem3[x].innerHTML=secondPage.en[x]
        }
        langBtn.innerHTML='Azerbaijani(AZE)'
        for(let x in thirdPage.en){
            langItem4[x].innerHTML=thirdPage.en[x]
        }
        langBtn.innerHTML='Azerbaijani(AZE)'
        for(let x in fourthPage.en){
            langItem5[x].innerHTML=fourthPage.en[x]
        }
        langBtn.innerHTML='Azerbaijani(AZE)'
        for(let x in fifthPage.en){
            langItem6[x].innerHTML=fifthPage.en[x]
        }
        langBtn.innerHTML='Azerbaijani(AZE)'
    }
}
langBtn.onclick=multiLang;





