<template>
	<div class="step">
		<h2>Etapa <span>2</span> de 4</h2>
		<!-- Verifico o tipo de pessoa e condicionalmente renderizo os campos -->
		<h1>{{ isPhysical ? 'Pessoa Física' : 'Pessoa Jurídica' }}</h1>
		<form @submit.prevent="handleSubmit">
			<PersonTypeFields :form :is-physical="isPhysical" />
			<div class="button-group">
				<button type="button" class="back" @click="handleBack">Voltar</button>
				<button type="submit">Continuar</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const PersonTypeFields = defineAsyncComponent(() => import('./PersonTypeFields.vue'))
const props = defineProps(['form']);
const emit = defineEmits(['next', 'back']);
const isPhysical = props.form.tipo === 'fisica'; // Função para verificação do tipo de pessoa
const handleBack = () => emit('back');
const handleSubmit = () => emit('next');
</script>
