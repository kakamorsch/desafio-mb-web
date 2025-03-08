<template>
	<div class="step">
		<h2>Etapa <span>2</span> de 4</h2>
		<h1>Pessoa Física</h1>
		<form @submit.prevent="handleSubmit">
			<label>Nome</label>
			<input type="text" v-model="form.nome" required />
			<label>CPF</label>
			<input type="text" v-model="form.cpf" required />
			<label>Data de nascimento</label>
			<input type="date" v-model="form.dataNascimento" required />
			<label>Telefone</label>
			<input type="tel" v-model="form.telefone" required />
			<div class="button-group">
				<button type="button" class="back" @click="handleBack">Voltar</button>
				<button type="submit">Continuar</button>
			</div>
		</form>
	</div>
</template>

<script setup>
const props = defineProps(['form']);
const emit = defineEmits(['next', 'back']);

const handleBack = () => emit('back');
const handleSubmit = () => emit('next');
</script>
