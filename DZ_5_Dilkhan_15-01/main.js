const list = [];
const addButton = document.getElementById('button');
const input = document.getElementById('input')

function change(id) {
	const item = list.findIndex((d) => {
		if (d.id === id) {
			return true;
		}
	})
	const text = prompt('Текст для изменения')
	list[item].text = text;
	render()
}

function render() {
	const mainDiv = document.createElement('div');
	mainDiv.setAttribute('class', 'list');

	for (let i = 0; i < list.length; i++) {
		const div = document.createElement('div');
		div.setAttribute('class', 'todoBlock');
		const p = document.createElement('p');
		p.innerText = list[i].text
		div.append(p);

		const buttons = document.createElement('div');
		buttons.setAttribute('class', 'actions');
		const changeButton = document.createElement('button');
		changeButton.setAttribute('class', 'change');
		changeButton.innerText = "change";
		const deleteButton = document.createElement('button');
		deleteButton.setAttribute('class', 'delete');
		deleteButton.innerText = "delete";
		buttons.append(changeButton, deleteButton);
		div.append(buttons);
		mainDiv.append(div);

		deleteButton.onclick = () => {
			div.remove()
		}
		changeButton.setAttribute('class', 'change');
		changeButton.onclick = () => {
			change(list[i].id)
		}
	}

	const form = document.querySelector('.form');
	document.querySelector('.list').remove();
	form.append(mainDiv);
}


addButton.onclick = function () {
	const obj = {
		id: list.length + 1,
		text: input.value
	}
	input.value = ''
	list.push(obj)
	console.log(list)
	render()
}