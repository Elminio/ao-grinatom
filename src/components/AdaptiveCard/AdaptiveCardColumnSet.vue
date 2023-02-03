<template>
	<div
		v-if="content.columns"
		:class="allClassBlock(content.style)"
		:data-bleed="content.bleed"
	>
		<div
			v-for="(column, index) in content.columns"
			:key="column.type + index"
			:class="allClassBlockItem(column.width, column.align)"
		>
			<component
				v-for="(item, index) in column.items"
				:key="item.type + index"
				:is="componentName + item.type"
				:componentName="componentName"
				:content="item"
			/>
		</div>
	</div>
</template>

<script>
import AdaptiveCardImage from './AdaptiveCardImage.vue'; // Компонент: создание картинки
import AdaptiveCardTextBlock from './AdaptiveCardTextBlock.vue'; // Компонент: создание текста

export default {
	props: {
		// Имя компонента "AdaptiveCard"
		componentName: {
			type: String,
			default: '',
		},

		// Данные для текущего компонента
		content: {
			type: Object,
			default: () => {},
		},
	},

	components: {
		AdaptiveCardImage,
		AdaptiveCardTextBlock,
	},

	setup() {
		// Классы для удобства
		const classBlock = 'card__column-set';
		const classBlockModify = classBlock + '--';
		const classBlockItem = classBlock + '-item';
		const classBlockItemModify = classBlockItem + '--';

		// Формируем классы для обертки колонок
		const allClassBlock = (...mods) => {
			return [
				classBlock,
				mods[0] && [classBlockModify + mods[0]],
			]
		};

		// Формируем классы для колонок
		const allClassBlockItem = (...mods) => {
			return [
				classBlockItem,
				mods[0] && [classBlockItemModify + mods[0]],
				mods[1] && [classBlockItemModify + mods[1]],
			]
		};

		return {
			allClassBlock,
			allClassBlockItem,
		}
	},
};
</script>

<style scoped>
	.card__column-set {
		display: flex;
		padding: 10px;
		width: 100%;
		background: #ebebeb;
		box-sizing: border-box;
	}

	.card__column-set--accent {
		background: #D7E7FA;
	}

	.card__column-set--passive {
		background: #EEEBD4;
	}

	.card__column-set-item {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex: 1 1 auto;
	}

	.card__column-set-item + .card__column-set-item {
		margin-left: 10px;
	}

	.card__column-set-item--auto {
		flex: 0 1 auto;
	}

	.card__column-set-item--align-right {
		text-align: right;
	}

	.card__column-set-item--align-center {
		text-align: center;
	}

	.card__text-block {
		margin: 0;
	}
</style>
