<template>
	<div class="step">
		<h2>Etapa <span>4</span> de 4</h2>
		<h1>Revise suas informações</h1>
		<form @submit.prevent="handleSubmit">
			<PersonTypeFields :form :is-physical="isPhysical" :is-disabled="true"/>
			<label>Senha</label>
			<input type="password" v-model="form.senha" disabled />
			<div class="button-group">
				<button type="button" class="back" @click="handleBack">Voltar</button>
				<button type="submit">Cadastrar</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const PersonTypeFields = defineAsyncComponent(() => import('./PersonTypeFields.vue'))
const props = defineProps(['form']);
const emit = defineEmits(['submit', 'back']);
const handleBack = () => emit('back');
const handleSubmit = () => emit('submit');
const isPhysical = props.form.tipo === 'fisica'; // Função para verificação do tipo de pessoa
</script>
