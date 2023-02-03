<template>
	<div class="card__image">
		<img
			:src="getData(cardData, content.url)"
			:alt="content.altText"
			:class="allClassBlock(content.size, content.style)"
		>
	</div>
</template>

<script>
import { inject } from 'vue';

import { getData } from '@/helpers/getData.js'; // Helper: формирование и вывод данных по нужному полю/свойству/значению

export default {
	props: {
		content: {
			type: Object,
			default: () => {},
		},
	},

	setup() {
		const { value: cardData } = inject('getCardData'); // Получить данные

		// Классы для удобства
		const classBlock = 'card__image';
		const classBlockModify = classBlock + '--';

		// Формируем классы для изображения
		const allClassBlock = (...mods) => {
			return [
				classBlock,
				mods[0] && [classBlockModify + mods[0].toLowerCase()],
				mods[1] && [classBlockModify + mods[1].toLowerCase()],
			]
		};

		return {
			cardData,
			getData,
			allClassBlock,
		}
	},
};
</script>

<style scoped>
	.card__image {
		display: block;
	}

	.card__image--small {
		width: 40px;
		width: 40px;
	}

	.card__image--big {
		width: 100px;
		width: 100px;
	}

	.card__image--person {
		border-radius: 50%;
	}
</style>
