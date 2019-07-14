import $ from 'jquery'
// import {out} from '../module/out';
// import {outDate} from '../module/outDate';
window.$ = $;
$(() => {
	const form = $(".form");

	const fillName = $("#fillName");
	const fillDate = $("#fillDate");
	const fillStart = $("#fillStart");
	const fillFinish = $("#fillFinish");

	const add = $("#add");

	const mainField = $(".main__field"); 


	const arrEvent = [];
	let temp = {};
	
	let counterClick = 0;
	let oldValueDate;
	let oldValueTime;


	
	const maskDate = value => {
		const output = [];
		for (let i = 0; i < value.length; i++) {
			if (i !== 0 && i % 2 === 0 && i <= 4) {
				output.push(".");
			} 
			output.push(value[i]);
		}
		return output.join('');
	}
	
	const unmaskDate = value => {
		let output = value.replace(new RegExp(/[^\d]/, 'g'), '');
		return output;
	}
	
	const keydownHandlerDate = e => {
		oldValueDate = e.target.value;
	}
	
	const inputHandlerDate = e => {
		let regex = new RegExp(/^\d{0,8}$/g);
		const el = e.target;
		let newValue = el.value;
		newValue = unmaskDate(newValue);
		
		if ( newValue.match(regex)) {
			newValue = maskDate(newValue);
			el.value = newValue;
		} else {
			el.value = oldValueDate;
		}
	}

	fillDate.on('keydown', keydownHandlerDate);
	fillDate.on('input', inputHandlerDate);
	
	/////////////////////////////////

	const maskTime = value => {
		const output = [];
		for (let i = 0; i < value.length; i++) {
			if (i !== 0 && i === 2) {
				output.push(":");
			} 
			output.push(value[i]);
		}
		return output.join('');
	}
	
	const unmaskTime = value => {
		let output = value.replace(new RegExp(/[^\d]/, 'g'), '');
		return output;
	}
	
	const keydownHandlerTime = e => {
		oldValueTime = e.target.value;
	}
	
	const inputHandlerTime = e => {
		let regex = new RegExp(/^\d{0,4}$/g);
		const el = e.target;
		let newValue = el.value;
		newValue = unmaskTime(newValue);
		
		if ( newValue.match(regex)) {
			newValue = maskTime(newValue);
			el.value = newValue;
		} else {
			el.value = oldValueTime;
		}
	}

	fillStart.on('keydown', keydownHandlerTime);
	fillFinish.on('keydown', keydownHandlerTime);
	fillStart.on('input', inputHandlerTime);
	fillFinish.on('input', inputHandlerTime);

	////////////////////////////////



















	
	add.on('click', () => {
		const outputDate = fillDate.val()

		const arrDate = []
		$(".date").each(function (index) { 
			arrDate.push($(this).text())
		})

		if (!(arrDate.includes(outputDate))) {
			getDataToArr();
			createdBox();
			createdEvent();
		} else { 
			const currentBox = $(`#${outputDate}`);
			const currentInfoBox = currentBox.children()[1];
			
			getDataToArr();
			createdEventInBox(outputDate);
		}

		
		for (let i = 0; i <= arrEvent.length ; i++) {
			counterClick = i;
		}
	})
	
	function getDataToArr() {
		
		temp = {
			date : fillDate.val(),
			name : fillName.val(),
			start : fillStart.val(),
			finish : fillFinish.val(),
		};
		
		let i = arrEvent.length;
		arrEvent[i] = temp;
		console.log(arrEvent);
	}

	function createdEvent() {
		const curBox = arrEvent[counterClick].date;
		const repDate = curBox.replace(/[^+\d]/g, "");
		const insideBox = $(`#${repDate}`);
		const currentInfoBox = insideBox.children()[1];
		
		// const insideDate = arrEvent[counterClick].date;
		const insideName = arrEvent[counterClick].name;
		const insideStart = arrEvent[counterClick].start;
		const insideFinish = arrEvent[counterClick].finish;

		// const repDate = insideDate.replace(/[^+\d]/g, "");
		const repStart = insideStart.replace(/[^+\d]/g, "");
		
		const event = ($('<div/>', {
			"class": 'event',
			id: `${repDate}${repStart}`
		}));

		event.appendTo(currentInfoBox);

		event.html(`
			<div class="event__name">${insideName}</div>
			<div class="event__start-time">${insideStart}</div>
			<div class="event__finish-time">${insideFinish}</div>
			<label class="event__unchecked" for="uncheckbox">
				<input class="input__unchecked" id="uncheckbox" type="checkbox">
			</label> 
			<button class="event__delete"></button>
			`
		);
		console.log(event)
	}

	function createdBox() {
		const insideDate = arrEvent[counterClick].date;
		const repDate = insideDate.replace(/[^\d]/g, "");
		const box = ($('<div/>', {
			"class": 'box',
			id: `${repDate}`
		}));

		box.appendTo(mainField);
		
		box.html(`
			<div class="box__date">
				<span class="date">${insideDate}</span>
			</div>
			<div class="box__info"></div>
			`
		);
	}

	function createdEventInBox(outputDate) {		
		const curBox = arrEvent[counterClick].date;
		const repDate = curBox.replace(/[^+\d]/g, "");
		const insideBox = $(`#${repDate}`);
		
		const insideName = arrEvent[counterClick].name;
		const insideStart = arrEvent[counterClick].start;
		const insideFinish = arrEvent[counterClick].finish;

		const repStart = insideStart.replace(/[^+\d]/g, "");
		
		const event = ($('<div/>', {
			"class": 'event',
			id: `${outputDate}${repStart}`
		}));

		event.appendTo(insideBox);

		event.html(`
			<div class="event__name">${insideName}</div>
			<div class="event__start-time">${insideStart}</div>
			<div class="event__finish-time">${insideFinish}</div>
			<label class="event__unchecked" for="uncheckbox">
				<input class="input__unchecked" id="uncheckbox" type="checkbox">
			</label> 
			<button class="event__delete"></button>
			`
		);
	}
})
