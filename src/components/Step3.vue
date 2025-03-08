<template>
	<div class="step">
		<h2>Etapa <span>3</span> de 4</h2>
		<h1>Senha de acesso</h1>
		<form @submit.prevent="handleSubmit">
			<label>Sua senha</label>
			<input type="password" v-model="form.senha" required />
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
