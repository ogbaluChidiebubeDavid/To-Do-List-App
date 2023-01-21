const listItems = document.getElementsByTagName('LI');
const closeAdder = () =>{
for(let i = 0; i < listItems.length; i++){
	let span = document.createElement('SPAN');
	let text = document.createTextNode('\u00D7');
	span.className = 'closeBtn'
	span.appendChild(text)
	listItems[i].appendChild(span);
}
}

closeAdder()

const close = document.getElementsByClassName('closeBtn');
const listItemRemover = () =>{
for(let i = 0; i < close.length; i++){
	let closer = close[i];
	closer.addEventListener('click', function(){
		let div = closer.parentElement;
		div.remove()
	}) 
}
}

listItemRemover()

const checkMarkAdder = () =>{
const unorderedList = document.querySelector('ul');
unorderedList.addEventListener('click', (el) => {
	if (el.target.tagName = 'LI'){
		el.target.classList.toggle('checked')
	}
}, false)
}

checkMarkAdder()

const addToList = document.querySelector('.addbtn');
addToList.addEventListener('click', function(){
	let newListItem = document.createElement('LI');
	let userTyping = document.getElementById('toDoInput').value;
	let inputedWord = document.createTextNode(userTyping);

	newListItem.appendChild(inputedWord);
	if(userTyping === ''){
		alert('This field must be filled!')
	} else{	
		let updatedList = document.querySelector('#mylists');
		updatedList.appendChild(newListItem);
	}
	document.querySelector('#toDoInput').value = '';
	closeAdder()
	listItemRemover()
})
