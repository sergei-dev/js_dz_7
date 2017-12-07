window.onload = function() {
  // task 1
  let wrap = document.querySelector('.panel');
  let btn_new = document.querySelector('.btn_new_group');
  let btn_assemlbe = document.querySelector('.assemble');
  let text = document.querySelector('.panel textarea');

  function create_group() {
    let inp_group = document.createElement('div');
    inp_group.classList.add('input-group');
    let inp_text = document.createElement('input');
    inp_text.setAttribute('type', 'text');
    let btn_group = document.createElement('button');
    btn_group.classList.add('delete');
    btn_group.textContent = '-';
    wrap.appendChild(inp_group);
    inp_group.appendChild(inp_text);
    inp_group.appendChild(btn_group);
    btn_group.onclick = function() {
      wrap.removeChild(inp_group);
    }

    let input = document.querySelectorAll('.input-group input');
    let radio = document.querySelectorAll('.radio');

    const connector = (element, index, length) => {
    if (element.value == "") {
      text.innerHTML = "";
      element.classList.add('empty');
      alert(`Пустой ${index+1} инпут`);
      return false;
    } else {
      length - 1 === index ?
        text.innerHTML += ` ${element.value}` :
        text.innerHTML += ` ${element.value} --\&\&--`;
      element.classList.remove('empty');
      return true;
    }
}

  
        
  
  btn_assemlbe.addEventListener('click', function() {
  	  if (radio[0].checked) {

    for (let i = 0; i < input.length; i++) {
      if (!connector(input[i], i, input.length)) {
        break;
      }
    }

  } else if (radio[1].checked) {
    for (let i = 0; i < input.length; i++) {
      if (i % 2 != 0) {
        if (!connector(input[i], i, input.length)) {
          break;
        }
      }
    };

  } else {
    for (let i = 0; i < input.length; i++) {
      if (i % 2 == 0) {
        if (!connector(input[i], i, input.length)) {
          break;
        }
      }
    };
  }
  });


};
btn_new.addEventListener('click', create_group);

let list = document.querySelector('ul');
let inp_new = document.querySelector('#inp_new');
let add_el = document.querySelector('#add');
 list.onclick = function(e) {
	if (e.target.style.color == "red") {
		e.target.style.color = "black";
	} else {
		e.target.style.color = "red";
	}
}
add_el.onclick = () => {
	let value = inp_new.value;
	let new_item = document.createElement('li');
	new_item.innerHTML = value;
	new_item.classList.add('list');
	list.appendChild(new_item);
}
};
