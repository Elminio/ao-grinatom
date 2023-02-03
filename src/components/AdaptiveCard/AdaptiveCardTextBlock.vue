<template>
	<p
		v-html="getData(cardData, content.text)"
		:class="allClassBlock(content.size, content.spacing)"
	/>
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
		const classBlock = 'card__text-block';
		const classBlockModify = classBlock + '--';

		// Формируем классы для изображения
		const allClassBlock = (...mods) => {
			return [
				classBlock,
				mods[0] && [classBlockModify + 'size-' + mods[0].toLowerCase()],
				mods[1] && [classBlockModify + 'spacing-' + mods[1].toLowerCase()],
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
	.card__text-block {
		margin: 10px;
		font-size: 14px;
	}

	.card__text-block--spacing-none {
		margin-top: 0 !important;
	}

	.card__text-block--size-small {
		font-size: 12px;
	}

	.card__text-block--size-medium {
		margin-top: 2px !important;
		font-size: 17px;
	}

	.card__text-block--size-big {
		margin-top: 4px !important;
		font-size: 24px;
	}
</style>
