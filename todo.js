function createheading(){
        var boxd=document.getElementById("card");
        var box=document.createElement("div");
        box.className="cardp";
       
        var heading= String(prompt("ENTER THE HEADING"));
       
     
        
        box.innerHTML+=`<h2>${heading}</h2>`;
        var element = document.createElement('hr');
        box.appendChild(element);

        
            boxd.appendChild(box);
    }
    let cnt = 0;
    function createlist(){
        var list= String(prompt("ENTER THE TASK"));
        console.log(list);
        cnt++;
        let el = document.createElement('li');
        var ids = "item"+cnt;
        (el.setAttribute('id', ids ));
        el.innerHTML +=`${list}`;
//        varx = getElementById(ids);
//        console.log(x);

      
       
//        console.log(el);
       
       document.getElementsByTagName('ul')[0].appendChild(el);

        //  var box=document.getElementsByClassName(cardp)[0];
//        var boxd=document.getElementById("card");
//        box.appendChild(x);
//        boxd.appendChild(box);


     
    
//      var completelist= document.getElementById(ids);

     
//      completelist.innerHTML += `<li>${list}</li>`;
//      var box=document.getElementsByClassName(cardp)[0];

      
        // var one = document.getElementById("myul");
        // var create= document.createElement("li");

        // list.innerHTML+=`${list}`;
        // var x = one.appendChild(list);
        // box.appendChildlist(completelist);
}

// function addelement() {
//         var completelist= document.getElementById("thelist");
        
//         completelist.innerHTML += "<li>Item " + counter + "</li>";
//         counter++;
//         }