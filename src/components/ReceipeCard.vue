<script lang="ts">
import type IReceita from '@/interfaces/IReceita';
import type { PropType } from 'vue';


export default {
    props: {
        receita: { type: Object as PropType<IReceita>, required: true }
    }
}

</script>

<template>
    <article class="categoria">
        <header class="categoria__cabecalho">
            <img :src="`/imagens/receitas/${receita.imagem}`" class="categoria__imagem">

            <h2 class="paragrafo categoria__nome">{{ receita.nome }}</h2>
        </header>
    </article>
</template>
<style scoped>
.categoria {
    width: 19.5rem;

    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
}

.categoria__cabecalho {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
}

.categoria__imagem {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
}

.categoria__nome {
    text-align: center;
    color: var(--cinza, #444444);
    font-weight: 700;
    padding: 1rem;
}

.categoria__ingredientes {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}
</style>