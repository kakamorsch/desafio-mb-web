<template>
	<div class="step">
		<h2>Etapa <span>1</span> de 4</h2>
		<h1>Seja bem vindo(a)</h1>
		<form @submit.prevent="handleSubmit">
			<label>Endereço de e-mail</label>
			<input type="email" v-model="form.email" required />
			<div class="radio-group">
				<label>
					<input type="radio" v-model="form.tipo" value="fisica" required />
					Pessoa física
				</label>
				<label>
					<input type="radio" v-model="form.tipo" value="juridica" required />
					Pessoa jurídica
				</label>
			</div>
			<button type="submit">Continuar</button>
		</form>
	</div>
</template>
<script setup>
const props = defineProps(['form']);
const emit = defineEmits(['next']);

// Função para lidar com o envio do formulário
const handleSubmit = () => {
	emit('next');
};
</script>
