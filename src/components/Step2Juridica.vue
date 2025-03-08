<template>
	<div class="step">
		<h2>Etapa <span>2</span> de 4</h2>
		<h1>Pessoa Jurídica</h1>
		<form @submit.prevent="next">
			<label>Razão social</label>
			<input type="text" v-model="form.razaoSocial" required />
			<label>CNPJ</label>
			<input type="text" v-model="form.cnpj" required />
			<label>Data de abertura</label>
			<input type="date" v-model="form.dataAbertura" required />
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
