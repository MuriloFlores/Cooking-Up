<script lang="ts">
import List from './List.vue';
import SelectIngredient from './SelectIngredient.vue';
import ShowRecipes from './ShowRecipes.vue';
import Tag from './Tag.vue';

type Page = "SelectIngredient" | "ShowRecipes"

export default {
    data() {
        return {
            ingredients: [] as string[],
            content: "SelectIngredient" as Page
        };
    },
    components: { SelectIngredient, Tag, List, ShowRecipes },
    methods: {
        addIngredient(ingredient: string) {
            this.ingredients.push(ingredient)
        },
        removeIngredient(ingredient: string) {
            for (let i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i] === ingredient) {
                    this.ingredients.splice(i, 1)
                }
            }
        },
        nav(page: Page) {
            this.content = page
        }
    }
}

</script>
<template>
    <main class="conteudo-principal">
        <List :ingredients="ingredients" />
        <KeepAlive include="selectIngredient">
            <SelectIngredient @add-ingredient="addIngredient($event)" @remove-ingredient="removeIngredient($event)"
                @search-recipes="nav('ShowRecipes')" v-if="content === 'SelectIngredient'" />
            <ShowRecipes v-else-if="content === 'ShowRecipes'" @select-ingredient="nav('SelectIngredient')" :ingredients="ingredients"/>
        </KeepAlive>
    </main>
</template>
<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}


@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>