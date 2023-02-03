/**
 * Формирование и вывод данных по нужному полю/свойству/значению
 * @param {Object} allData - все данные
 * @param {Object|Array|String} chosenData - данные, которым хотим получить
 * @param {Boolean} getOnlyName - получить только название переменной вставки
 * @param {Boolean} isSet - получить объект данных
 * @returns 
 */
export function getData(allData, chosenData, getOnlyName = false, isSet = false) {
	let data = '';
	let insertStart = '${';
	let insertEnd = '}';

	// Находим фрагмент предполагаемой вставки типа ${text}
	let insertText = chosenData.slice(chosenData.indexOf(insertStart), chosenData.indexOf(insertEnd) + 1);

	// Получаем из фрагмента вставки название переменной
	let dataProperty = insertText.replace(/\${|}/gi, '');

	// Получить только название переменной вставки
	if (getOnlyName) {
		return dataProperty;
	}

	// Создаем массив свойств
	let arrProps = dataProperty.split('.');

	// Ищет нужное свойство по глубокому объекту
	const findProperty = (currentData, n = 0) => {
		for (let i = n; i < arrProps.length; i++) {
			if (Object.hasOwnProperty.call(currentData, arrProps[i])) {
				let item = arrProps[i];
				if ((typeof currentData[item] === 'object') && (currentData[item] !== null)) {
					if (isSet) {
						return data = currentData[item];
					} else {
						return findProperty(currentData[item], i + 1);
					}
				} else {
					return data = currentData[item];
				}
			}
		}
	}

	// Преобразование текста
	const characterСonversion = (text) => {
		data = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // * -> в курсив
		data = data.replace(/\*(.*?)\*/g, '<i>$1</i>'); // ** -> в жирный
		return data
	}

	// Есть ли вставка текста
	if (chosenData.includes(insertStart)) {
		// Запускаем поиск свойства по данным
		findProperty(allData); 

		// Не получение объекта данных
		if (!isSet) {
			data = chosenData.replace(insertText, data); // Вставляем найденный текст
		}
	} else {
		data = chosenData; // Иначе просто отдаем найденный текст (без вставки)
	}

	// Не получение объекта данных
	if (!isSet) {
		characterСonversion(data);
	}

	return data;
}
