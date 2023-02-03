<template>
	<template v-if="isTypeCardAdaptive">
		<div
			v-if="cardTemplate.version === '1.0'"
			class="card card--version-1-0"
		>
			<div v-if="cardTemplate.body" class="card__body">
				<component
					v-for="(block, index) in cardTemplate.body"
					:key="block.type + index"
					:is="componentName + block.type"
					:componentName="componentName"
					:content="block"
				/>
			</div>
		</div>
		<div
			v-if="cardTemplate.version === '2.0'"
			class="card card--version-2-0"
		>
			<p>Still in development :)</p>
		</div>
	</template>
	<h3 v-else>This is not an adaptive card :(</h3>
</template>

<script>
import { toRefs, provide } from 'vue';

import AdaptiveCardColumnSet from './AdaptiveCardColumnSet.vue'; // Компонент: создание колонок
import AdaptiveCardTextBlock from './AdaptiveCardTextBlock.vue'; // Компонент: создание текста
import AdaptiveCardFactSet from './AdaptiveCardFactSet.vue'; // Компонент: список в таблице

export default {
	props: {
		// Данные для текущего компонента
		cardData: {
			type: Object,
			default: () => {},
		},

		// Шаблон для текущего компонента
		cardTemplate: {
			type: Object,
			default: () => {},
		},
	},

	components: {
		AdaptiveCardColumnSet,
		AdaptiveCardTextBlock,
		AdaptiveCardFactSet,
	},

	setup(props) {
		const { cardData, cardTemplate } = toRefs(props);

		const componentName = 'AdaptiveCard'; // Имя компонента "AdaptiveCard"
		const isTypeCardAdaptive = cardTemplate.value.type === componentName; // Тип карточки является "AdaptiveCard"

		// Отправляем данные в дочерние компоненты
		provide('getCardData', cardData);

		return {
			componentName,
			isTypeCardAdaptive,
		}
	},
};
</script>

<style scoped>
	.card {
		display: flex;
		width: 400px;
		padding: 8px;
		background: #eceff1;
		border: 1px solid #e6e6e6;
	}

	.card__body {
		width: 100%;
		background: #ffffff;
	}

	h3 {
		margin: 70px 50px 0;
	}
</style>
