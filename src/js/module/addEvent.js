// import $ from 'jquery'
// import {out} from './out';

// function addEvent() {
// 	let form = $(".form");
// 	let fillName = $("#fillName");
// 	// let fillName = document.getElementById("fillName");
// 	let fillDate = $("#fillDate");
// 	// let fillDate = document.getElementById("fillDate");
// 	let fillStart = $("#fillStart");
// 	// let fillStart = document.getElementById("fillStart");
// 	let fillFinish = $("#fillFinish");
// 	// let fillFinish = document.getElementById("fillFinish");
// 	// let fillDate=	document.getElementById("fillDate")
// 	const arrEvent = [];
	
// 	let add = $("#add");

// 	const mainField = $(".main__field"); 

// 	const box = ($('<div/>', {
// 		"class": 'box'
// 	}));
// 	const boxDate = ($('<div/>', {
// 		"class": 'box__date'
// 	}));
// 	const boxInfo = ($('<div/>', {
// 		"class": 'box__info'
// 	}));

	
// 	const date = ($('<span/>', {
// 		"class": 'date'
// 	}));
	
// 	const event = ($('<span/>', {
// 		"class": 'event'
// 	}));


// 	const eventNameChecked = ($('<input/>', {
// 		"class": 'event__name--checked'
// 	}));
// 	const eventDateChecked = ($('<input/>', {
// 		type: 'text',
// 		"class": 'event__date--checked'
// 	}));
// 	const eventStartTimeChecked = ($('<input/>', {
// 		type: 'text',
// 		"class": 'event__start-time--checked'
// 	}));
// 	const eventFinishTimeChecked = ($('<input/>', {
// 		type: 'text',
// 		"class": 'event__finish-time--checked'
// 	}));
// 	const eventChecked = ($('<label/>', {
// 		for: 'checkbox',
// 		"class": 'event__checked'
// 	}));
// 	const inputChecked = ($('<input/>', {
// 		type: 'checkbox',
// 		id: 'checkbox',
// 		"class": 'input__checked',
// 		checked: true
// 	}));
// 	const eventDelete = ($('<button/>', {
// 		"class": 'event__delete'
// 	}));


// 	const eventName = ($('<div/>', {
// 		"class": 'event__name'
// 	}));
// 	const eventStartTime = ($('<div/>', {
// 		"class": 'event__start-time'
// 	}));
// 	const eventFinishTime = ($('<div/>', {
// 		"class": 'event__finish-time'
// 	}));
// 	const eventUnchecked = ($('<label/>', {
// 		for: 'uncheckbox',
// 		"class": 'event__unchecked'
// 	}));
// 	const inputUnchecked = ($('<input/>', {
// 		type: 'checkbox',
// 		id: 'uncheckbox',
// 		"class": 'input__unchecked',
// 		checked: false
// 	}));
	
// 	const insideBox = box.appendTo(mainField);

// 	const insideBoxDate = boxDate.appendTo(insideBox);
// 	const insideBoxInfo = boxInfo.appendTo(insideBox);
	
// 	const insideDate = date.appendTo(insideBoxDate);
// 	const insideEvent = event.appendTo(insideBoxInfo);
	
// 	// const insideDate = boxDate.appendTo(insideDate);
	
// 	const a = eventName.appendTo(insideEvent);
// 	const b = eventStartTime.appendTo(insideEvent);
// 	const c = eventFinishTime.appendTo(insideEvent);
// 	const d = eventUnchecked.appendTo(insideEvent);
// 	const f = inputUnchecked.appendTo(eventUnchecked);
// 	const insidEventDelete = eventDelete.appendTo(insideEvent);
	
	
	
	
	
// 	let fillNameVal = fillName.val();	
// 	let fillDateVal = fillDate.val();	
// 	let fillStartVal = fillStart.val();	
// 	let fillFinishVal = fillFinish.val();
	
// 	let t = fillDateVal;
// 	let n = fillNameVal;
// 	let s = fillStartVal;
// 	let v = fillFinishVal;
// 	let temp = {};
// 	temp.date = t;
// 	temp.name = n;
// 	temp.start = s;
// 	temp.finish = v;
// 	temp.check = false;
	
// 	let i = arrEvent.length;
// 	arrEvent[i] = temp;
	
// 	out(a, b, c, d, f);
// }

// export {addEvent};
