<script lang="ts">

import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingredients: { type: Object , required: true }
    }
}
</script>

<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
            Sua lista:
        </span>
        <ul v-if="ingredients.length" class="ingredientes-sua-lista">
            <li v-for="(ingrediente, index) in ingredients" :key="index" class="ingrediente">
                <Tag :texto="ingrediente" :ativa="true" />
            </li>
        </ul>

        <p v-else class="paragrafo lista-vazia">
            <img src="../assets/images/icones/lista-vazia.svg">
            Sua lista está vazia, selecione ingredientes para iniciar
        </p>
    </section>
</template>

<style scoped>
.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}

.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}
</style>