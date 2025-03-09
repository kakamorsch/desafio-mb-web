<template>
	<div class="step">
		<h2>Etapa <span>2</span> de 4</h2>
		<!-- Verifico o tipo de pessoa e condicionalmente renderizo os campos -->
		<h1>{{ isPhysical ? 'Pessoa Física' : 'Pessoa Jurídica' }}</h1>
		<form @submit.prevent="handleSubmit">
			<div v-if="isPhysical">
				<label>Nome</label>
				<input type="text" v-model="form.nome" required />
				<label>CPF</label>
				<input type="text" v-model="form.cpf" required />
				<label>Data de nascimento</label>
				<input type="date" v-model="form.dataNascimento" required />
				<label>Telefone</label>
				<input type="tel" v-model="form.telefone" required />
			</div>
			<div v-else>
				<label>Razão social</label>
				<input type="text" v-model="form.razaoSocial" required />
				<label>CNPJ</label>
				<input type="text" v-model="form.cnpj" required />
				<label>Data de abertura</label>
				<input type="date" v-model="form.dataAbertura" required />
				<label>Telefone</label>
				<input type="tel" v-model="form.telefone" required />
			</div>
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
const isPhysical = props.form.tipo === 'fisica'; // Função para verificação do tipo de pessoa
const handleBack = () => emit('back');
const handleSubmit = () => emit('next');
</script>
