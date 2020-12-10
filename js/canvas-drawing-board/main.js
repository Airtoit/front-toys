let canDraw = false;
    canvas.onclick = (e) => {
      console.log('click:', e.clientX, e.clientY);
    }
    canvas.onmousedown = (e) => {
      console.log('down');
      canDraw = true;
    }
    canvas.onmousemove = (e) => {
      if (canDraw) {
        console.log('drawing')
        let dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.width = '5px';
        dot.style.height = '5px';
        dot.style.backgroundColor = 'black';
        dot.style.borderRadius = '50%';
        canvas.appendChild(dot);
      }
    }
    canvas.onmouseup = (e) => {
      console.log('up');
      canDraw = false;
    }