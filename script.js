  
   document.addEventListener("keyup", fun);
   window.addEventListener("load",bt);
   function bt()
   {
   var z=document.getElementById("btn");
   z.addEventListener("click",add);
   }
   function fun(e)
   {
    if(e.keyCode==13)
    {
    add();
     }
   }
   var inc=0;
   var btn_id=0;
   function add()
   {
    var n;
     var pN=document.createElement("li");
     var x= document.createElement("input");
     x.setAttribute("type", "text");
     var todo = document.getElementById("task");
     if(todo.value==null||todo.value=="")
      {
        alert("Please enter something");
      }
      else
      {
        
      x.setAttribute("value", todo.value);
      x.setAttribute("id",inc);
      x.disabled="true";
     n=inc++;
     var y=document.createElement("button");
     y.innerHTML="del";
     y.addEventListener("click",sf);
     var t=document.createElement("button");
     t.innerHTML="edit";
     
     t.addEventListener("click",function editele()
     {     
       pf(n);
     });
    
     pN.appendChild(x);
     
     pN.appendChild(y);
     pN.appendChild(t);
     document.body.appendChild(pN);
     todo.value="";
    }
   
  function sf()
  {
    pN.remove();
  }

  function pf(ind)
  {
    var el=document.getElementById(ind);
    var val=el.value;
    if(t.innerHTML=="edit")
    {
      t.innerHTML="done";
      
      el.disabled="";
    }
    else
    {
      if(val==null||val=="")
      {
        alert("empty");
      }
      else{
        el.disabled="true";
        t.innerHTML="edit";
      }
    }
   
  }


}