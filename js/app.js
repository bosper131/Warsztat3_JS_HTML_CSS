

document.addEventListener("DOMContentLoaded", function() {
    var elemMain = document.querySelectorAll('.small-box>ul>li');
  var length = elemMain.length;
  for(var i=0;i<length;i++) {
      elemMain[i].addEventListener('mouseover', function () {
          if(this.children.length > 1 ){
              this.children[1].style.display ='inline-block';}
      });
      elemMain[i].addEventListener('mouseout', function () {
          if(this.children.length > 1){
              this.children[1].style.display ='none';}
      })
  }
    var pictureclass = document.querySelector('.pictureclass');
    var pictureclassChildren = pictureclass.children;
    var lengthpic = pictureclassChildren.length;
    for(var j=0;j<lengthpic-1;j++) {
        pictureclassChildren[j].addEventListener('mouseover', function () {
            this.children[0].style.display ='none';
        });
        pictureclassChildren[j].addEventListener('mouseout', function () {
                this.children[0].style.display ='block';
        })
    }


    var next = document.querySelector('.dash2');
    var prev = document.querySelector('.dash1');
    var allListelem = document.querySelectorAll('.chair >ul>li');
    var texty = document.querySelectorAll('.loremtext>ul>li');
    var pictureIndex = 0;
    var plength = allListelem.length;
    allListelem[pictureIndex].classList.add('visible');
    texty[pictureIndex].classList.add('visible');
    next.addEventListener('click',function(){
        allListelem[pictureIndex].classList.remove('visible');
        texty[pictureIndex].classList.remove('visible');
        if( pictureIndex < (plength-1)  ){

            pictureIndex++;
        }
        else{
            pictureIndex= 0;
        }
        allListelem[pictureIndex].classList.add('visible');
        texty[pictureIndex].classList.add('visible');


    });
    prev.addEventListener('click',function () {
        allListelem[pictureIndex].classList.remove('visible');
        texty[pictureIndex].classList.remove('visible');
        if( pictureIndex > 0 ){
            pictureIndex--;
        }
        else{
            pictureIndex=plength-1;
        }
        allListelem[pictureIndex].classList.add('visible');
        texty[pictureIndex].classList.add('visible');
    });


    var arrow = document.querySelectorAll('.list_arrow');
    var panellength = arrow.length;
     var arrowUL = document.querySelectorAll('.list_panel');
     arrowULlength = arrowUL.length;
     for(var z=0;z<arrowULlength;z++){
         arrowUL[z].style.display='none';
     }
     for(var k=0;k<panellength;k++) {
         arrow[k].addEventListener('click', function () {
             if (this.nextElementSibling.style.display === 'none'){
             this.nextElementSibling.style.display = 'inline-block';}
             else{
                 this.nextElementSibling.style.display = 'none';

             }
         });

     }
    var listPanelLi = document.querySelectorAll('.list_panel li');
    for(var i=0; i<listPanelLi.length; i++) {
        listPanelLi[i].addEventListener('click', function() {
            this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
            this.parentElement.parentElement.firstElementChild.style.color='blue';
        })
    }

    var chairname = document.querySelectorAll('.chairName');
    var title = document.querySelector('.title');
    var titleVal = document.querySelector('.title.value');
    var chairNameLength = chairname.length;
    for(var i = 0 ; i<chairNameLength;i++){
        chairname[i].addEventListener('click',function () {
          title.innerText = this.innerText;
          titleVal.innerText = this.dataset.price;
          suma();
          this.parentElement.style.display = 'none';
        })

    }

    var chaircolor = document.querySelectorAll('.chairColor');
    var color = document.querySelector('.color');
    var colorVal = document.querySelector('.color.value');
    var chaircolorLength = chaircolor.length;
    for(var i = 0 ; i<chaircolorLength;i++){
        chaircolor[i].addEventListener('click',function () {
            color.innerText = this.innerText;
            colorVal.innerText = '0';
            suma();
            this.parentElement.style.display = 'none';
        })
    }

    var fabric = document.querySelectorAll('.fabric');
    var pattern = document.querySelector('.pattern');
    var fabricVal = document.querySelector('.pattern.value');
    var fabricLength = fabric.length;
    for(var i = 0 ; i<fabricLength;i++){
        fabric[i].addEventListener('click',function () {
            pattern.innerText = this.innerText;
            fabricVal.innerText = '0';
            suma();
            this.parentElement.style.display = 'none';
        })
    }

    var transportCheckbox = document.querySelector('.checkbox.check-box');
    var transport = document.querySelector('.transport');
    var transportVal = document.querySelector('.transport.value');
    transportCheckbox.addEventListener('click',function () {
        if(this.firstElementChild.checked){
        transport.innerText = this.lastElementChild.innerText;
        transportVal.innerText = this.firstElementChild.dataset.transportprice;
        suma();
        }
        else{
            transport.innerText ='';
            transportVal.innerText ='';
            suma();
        }
            // this.parentElement.style.display = 'none';
        });

    var summa = document.querySelector('.sum');
    function suma(){
        summa.innerText = (Number(titleVal.innerText) + Number(colorVal.innerText) + Number(fabricVal.innerText) + Number(transportVal.innerText));
    }

//     var x = document.getElementById('myDIV');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// }




});