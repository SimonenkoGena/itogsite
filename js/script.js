let arr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
   block = document.querySelector('.supcar'),
   i = 1;

   block.onclick = boom;

   function boom() {
    block.style.backgroundImage='url(../img/ts/'+arr[i]+')';
    i++;

    if (i == arr.length) {
     i = 1;
    }
    
    }



    let arr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    block = document.querySelector('.hsxcar'),
    i = 1;
 
    block.onclick = boom;
 
    function boom() {
     block.style.backgroundImage='url(../img/nsx/'+arr[i]+')';
     i++;
 
     if (i == arr.length) {
      i = 1;
     }
     
     }


    
     let arr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
   block = document.querySelector('.mitcar'),
   i = 1;

   block.onclick = boom;

   function boom() {
    block.style.backgroundImage='url(../img/mit/'+arr[i]+')';
    i++;

    if (i == arr.length) {
     i = 1;
    }
    
    }


