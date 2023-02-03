<template>
	<h1>Welcome to the adaptive card page!</h1>
	<div
		v-if="!isLoadingCardData && !isLoadingCardTemplate"
		class="wrapper-cards"
	>
		<div class="wrapper-card">
			<adaptive-card
				:card-data="cardData"
				:card-template="cardTemplate"
			/>
		</div>
		<div class="wrapper-card">
			<adaptive-card
				:card-data="cardData_2"
				:card-template="cardTemplate_2"
			/>
		</div>
	</div>
	<h2 v-else-if="isLoadingCardData">Card data is loading ...</h2>
	<h2 v-else-if="isLoadingCardTemplate">Card template is loading ...</h2>
</template>

<script>
import { ref } from 'vue';

import AdaptiveCard from '@/components/AdaptiveCard/AdaptiveCard.vue'; // Компонент: адаптивная карточка

export default {
	components: {
		AdaptiveCard,
	},

	setup() {
		const cardData = ref({}); // Данные карточки №1
		const cardData_2 = ref({}); // Данные карточки №2

		const cardTemplate = ref({}); // Шаблон карточки №1
		const cardTemplate_2 = ref({}); // Шаблон карточки №2

		const isLoadingCardData = ref(true); // Грузятся ли данные карточки
		const isLoadingCardTemplate = ref(true); // Грузятся ли шаблоны карточки
	
		// Загружаем данные для карточки
		const getEmployeeData = async () => {
			try {
				cardData.value = await require("../data/EmployeeData.json");
				cardData_2.value = await require("../data/EmployeeData_2.json");
			} catch (error) {
				alert('Ошибка при получении данных!');
			} finally {
				// TODO: убрать setTimeout, временно, чтобы увидеть последовательность загрузки и loader
				setTimeout(() => {
					isLoadingCardData.value = false;
				}, 1000);
			}
		}

		// Загружаем шаблон карточки
		const getCardTemplate = async () => {
			try {
				cardTemplate.value = await require("../data/EmployeeCardTemplate.json");
				cardTemplate_2.value = await require("../data/EmployeeCardTemplate_2.json");
			} catch (error) {
				alert('Ошибка при получении данных!');
			} finally {
				// TODO: убрать setTimeout, временно, чтобы увидеть последовательность загрузки и loader
				setTimeout(() => {
					isLoadingCardTemplate.value = false;
				}, 2000);
			}
		}

		getEmployeeData();
		getCardTemplate();

		return {
			cardData,
			cardData_2,
			cardTemplate,
			cardTemplate_2,
			isLoadingCardData,
			isLoadingCardTemplate,
		}
	},
};
</script>

<style scoped>
	h1, h2 {
		text-align: center;
	}

	h2 {
		margin-top: 30px;
	}

	.wrapper-cards {
		display: flex;
		justify-content: center;
		margin: 30px;
	}

	.wrapper-card {
		margin: 20px;
	}
</style>
