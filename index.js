function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var imagebox = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(imagebox));
  }

  
//   if (drag) {
// 	  console.log("image has been dragged");
// 	  };

      