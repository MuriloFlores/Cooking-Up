<script lang="ts">
import { deLista1ParaLista2 } from '@/operations/lists'
import type IReceita from '@/interfaces/IReceita';
import ReceipeCard from './ReceipeCard.vue';
import { GetReceitas } from '@/HTTP';
import MainButton from './MainButton.vue';
import type { PropType } from 'vue';


export default {
    props: {
        ingredients: { type: Array as PropType<string[]>, required: true }
    },
    components: { ReceipeCard, MainButton },
    data() {
        return {
            receitasEncontradas: [] as IReceita[]
        };
    },
    async created() {
        const receitas = await GetReceitas()
        this.receitasEncontradas = receitas.filter((receita) => {
            const makeRecipe = deLista1ParaLista2(receita.ingredientes, this.ingredients)
            
            return makeRecipe
        })


    },
    emits: ['SelectIngredient']
}

</script>

<template>
    <section class="mostrar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>

        <p class="paragrafo-lg resultados-encontrados">
            Resultados Encontrados: {{ receitasEncontradas.length }}
        </p>

        <div v-if="receitasEncontradas.length" class="receitas-wrapper">
            <p class="paragrafo-lg informacoes">
                Veja as opções de receitas que encontramos com os ingredientes que você tem por ai!
            </p>

            <ul class="receitas">
                <li v-for="(receita, index) of receitasEncontradas" :key="index">
                    <ReceipeCard :receita="receita" />
                </li>
            </ul>
        </div>

        <MainButton texto="Editar Lista" @click="$emit('SelectIngredient')" class="center" />
    </section>
</template>
<style scoped>
.mostrar-receitas {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.titulo-receitas {
    color: var(--verde-medio);
}

.receitas-wrapper,
.resultados-encontrados {
    color: var(--cinza-medio);
}

.informacoes {
    padding-bottom: 1rem;
    text-align: center;
}

.receitas {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    cursor: default;
}
</style>