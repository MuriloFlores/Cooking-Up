<script lang="ts">

import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        OnClick() {
            this.selected = !this.selected

            if (this.selected){
                this.$emit('addIngredient', this.ingrediente)
            }
            if (!this.selected) {
                this.$emit('removeIngredient', this.ingrediente)
            }
        }
    },
    emits: ['addIngredient', 'removeIngredient']
}

</script>

<template>
    <button class="ingrediente" @click="OnClick" :aria-pressed="selected">
        <Tag :texto="ingrediente" :ativa="selected"/>
    </button>
</template>

<style scoped>

.ingrediente {
    cursor: pointer;
}

</style>