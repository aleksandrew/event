// import $ from 'jquery';
// import {addEvent} from './addEvent';

// function createdEvent() {

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

	
// 	const dateE = ($('<span/>', {
// 		"class": 'date'
// 	}));
	
// 	const event = ($('<span/>', {
// 		"class": 'event'
// 	}));
// 	const eventDelete = ($('<button/>', {
// 		"class": 'event__delete'
// 	}));

// 	// checked

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

// 	// unchecked

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
// 	const eventDeconste = ($('<button/>', {
// 		"class": 'event__deconste'
// 	}));



// 	const insideBox = box.appendTo(mainField);

// 	const insideBoxDate = boxDate.appendTo(insideBox);
// 	const insideBoxInfo = boxInfo.appendTo(insideBox);
	
// 	const insideDate = dateE.appendTo(insideBoxDate);

// 	const insideEvent = event.appendTo(insideBoxInfo);

// 	const insidEventName = eventName.appendTo(insideEvent);
// 	const insidEventStartTime = eventStartTime.appendTo(insideEvent);
// 	const insidEventFinish = eventFinishTime.appendTo(insideEvent);
// 	const insidEventUnchecked = eventUnchecked.appendTo(insideEvent);
// 	const insideInputUnchecked = inputUnchecked.appendTo(eventUnchecked);
// 	const insidEventDelete = eventDelete.appendTo(insideEvent);

// 	// addEvent(dateA, nameA, startA, finishA, checkA);

// 	// insideDate = dateA.text();
// 	// insidEventName = nameA.text();
// 	// insidEventStartTime = startA.text();
// 	// insidEventFinish = finishA.text();
// 	// insideInputUnchecked = checkA.text(); 

// 	out();
// 	console.log(arrEvent);

// 	function out() {
// 		const arrEvent = [];
// 		// let out = '';
	
// 		for (let key in arrEvent) {
// 			// if (arrEvent[key].check === true) {}
// 			insideDate = arrEvent[key].date;
// 			insidEventName = arrEvent[key].name;
// 			insidEventStartTime = arrEvent[key].start;
// 			insidEventFinish = arrEvent[key].finish;
// 			insideInputUnchecked = arrEvent[key].check;
// 		}// 9.09
// 	}
// }

// export {createdEvent};
