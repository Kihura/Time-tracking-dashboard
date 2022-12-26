window.onload = function() {
    const dayspan = document.querySelector('#day');
    const weekspan = document.querySelector('#week');
    const monthspan = document.querySelector('#month');
    const weekwork =document.querySelector('#week-work');
    const daywork = document.querySelector('#day-work');
    const monthwork = document.querySelector('#month-work');


    const dayplay =document.querySelector('#week-play');
    const weekplay = document.querySelector('#day-play');
    const monthplay = document.querySelector('#month-play');
    function dayplay1(){
        monthplay.style.display="none"
        dayplay.style.display="block";
        weekplay.style.display="none";
    }
    function weekplay1(){
        monthplay.style.display="none"
        dayplay.style.display="none";
        weekplay.style.display="block";
    }
    function monthplay1(){
        monthplay.style.display="block"
        dayplay.style.display="none";
        weekplay.style.display="none";
    }

    const weekstudy =document.querySelector('#week-study');
    const daystudy = document.querySelector('#day-study');
    const monthstudy = document.querySelector('#month-study');
    function daystudy1(){
        monthstudy.style.display="none"
        daystudy.style.display="block";
        weekstudy.style.display="none";
    }
    function weekstudy1(){
        monthstudy.style.display="none"
        daystudy.style.display="none";
        weekstudy.style.display="block";
    }
    function monthstudy1(){
        monthstudy.style.display="block"
        daystudy.style.display="none";
        weekstudy.style.display="none";
    }
    const weekexer =document.querySelector('#week-exercise');
    const daysexer = document.querySelector('#day-exercise');
    const monthexer = document.querySelector('#month-exercise');
    function dayexer1(){
        monthexer.style.display="none"
        daysexer.style.display="block";
        weekexer.style.display="none";
    }
    function weekexer1(){
        monthexer.style.display="none"
        daysexer.style.display="none";
        weekexer.style.display="block";
    }
    function monthexer1(){
        monthexer.style.display="block"
        daysexer.style.display="none";
        weekexer.style.display="none";
    }

    const weeksocial =document.querySelector('#week-social');
    const daysocial = document.querySelector('#day-social');
    const monthsocial = document.querySelector('#month-social');
    function daysocial1(){
        monthsocial.style.display="none"
        daysocial.style.display="block";
        weeksocial.style.display="none";
    }
    function weeksocial1(){
        monthsocial.style.display="none"
        daysocial.style.display="none";
        weeksocial.style.display="block";
    }
    function monthsocial1(){
        monthsocial.style.display="block"
        daysocial.style.display="none";
        weeksocial.style.display="none";
    }
    const weekself =document.querySelector('#week-selfcare');
    const dayself = document.querySelector('#day-selfcare');
    const monthself = document.querySelector('#month-selfcare');
    function dayself1(){
        monthself.style.display="none"
        dayself.style.display="block";
        weekself.style.display="none";
    }
    function weekself1(){
        monthself.style.display="none"
        dayself.style.display="none";
        weekself.style.display="block";
    }
    function monthself1(){
        monthself.style.display="block"
        dayself.style.display="none";
        weekself.style.display="none";
    }
    
    
    weekspan.addEventListener('click',()=>{
        monthwork.style.display="none"
        daywork.style.display="none";
        weekwork.style.display="block";
        weekplay1();
        weekstudy1();
        weekexer1();
        weeksocial1();
        weekself1();
        const weekspan1 = document.querySelector('#week a');
        const monthspan1 = document.querySelector('#month a');
        const dayspan1 = document.querySelector('#day a');
        weekspan1.style.color="white";
        monthspan1.style.color="gray";
        dayspan1.style.color="gray";
        

    });
    dayspan.addEventListener('click',()=>{
        daywork.style.display="block";
        weekwork.style.display="none";
        monthwork.style.display="none";
        dayplay1();
        daystudy1();
        dayexer1();
        daysocial1();
        dayself1();
        const weekspan1 = document.querySelector('#week a');
        const monthspan1 = document.querySelector('#month a');
        const dayspan1 = document.querySelector('#day a');
        weekspan1.style.color="gray";
        monthspan1.style.color="gray";
        dayspan1.style.color="white";
        
    });
    monthspan.addEventListener('click',()=>{
        daywork.style.display="none";
        weekwork.style.display="none";
        monthwork.style.display="block";
        monthexer1();
        monthsocial1();
        monthplay1();
        monthstudy1();
        monthself1();
        const weekspan1 = document.querySelector('#week a');
        const monthspan1 = document.querySelector('#month a');
        const dayspan1 = document.querySelector('#day a');
        weekspan1.style.color="gray";
        monthspan1.style.color="white";
        dayspan1.style.color="gray";

    });

    var indexDataElement = document.getElementById("index-data");
var indexData = JSON.parse(indexDataElement.textContent);

var workWeekly = indexData.find(function(item) {
    return item.title === "Work";
}).timeframes.weekly.current;
var workDayly = indexData.find(function(item) {
    return item.title === "Work";
}).timeframes.daily.current;

console.log(workWeekly); // affiche 32
console.log(workDayly);
    
}