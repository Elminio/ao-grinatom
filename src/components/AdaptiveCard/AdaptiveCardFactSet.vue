<template>
	<div :class="classBlock">
		<table v-if="content.facts[0].$data">
			<tr
				v-for="(item, index) in getData(cardData, content.facts[0].$data, false, true)"
				:key="item + index"
			>
				<td>
					<b>{{ item[getData(cardData, content.facts[0].title, true)] }}</b>
				</td>
				<td>
					{{ item[getData(cardData, content.facts[0].value, true)] }}
				</td>
			</tr>
		</table>
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
		const classBlock = 'card__fact-set';

		return {
			cardData,
			getData,
			classBlock,
		}
	},
};
</script>

<style scoped>
	.card__fact-set {
		margin: 10px 4px;
		font-size: 14px;
	}

	.card__fact-set td{
		padding: 2px 6px;
	}
</style>
