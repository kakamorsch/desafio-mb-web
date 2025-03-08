<template>
	<div class="step">
		<h2>Etapa <span>4</span> de 4</h2>
		<h1>Revise suas informações</h1>
		<form @submit.prevent="handleSubmit">
			<label>Endereço de e-mail</label>
			<input type="email" v-model="form.email" disabled />
			<label v-if="form.tipo === 'fisica'">Nome</label>
			<input
				type="text"
				v-model="form.nome"
				disabled
				v-if="form.tipo === 'fisica'"
			/>
			<label v-if="form.tipo === 'fisica'">CPF</label>
			<input
				type="text"
				v-model="form.cpf"
				disabled
				v-if="form.tipo === 'fisica'"
			/>
			<label v-if="form.tipo === 'fisica'">Data de nascimento</label>
			<input
				type="date"
				v-model="form.dataNascimento"
				disabled
				v-if="form.tipo === 'fisica'"
			/>
			<label v-if="form.tipo === 'juridica'">Razão social</label>
			<input
				type="text"
				v-model="form.razaoSocial"
				disabled
				v-if="form.tipo === 'juridica'"
			/>
			<label v-if="form.tipo === 'juridica'">CNPJ</label>
			<input
				type="text"
				v-model="form.cnpj"
				disabled
				v-if="form.tipo === 'juridica'"
			/>
			<label v-if="form.tipo === 'juridica'">Data de abertura</label>
			<input
				type="date"
				v-model="form.dataAbertura"
				disabled
				v-if="form.tipo === 'juridica'"
			/>
			<label>Telefone</label>
			<input type="tel" v-model="form.telefone" disabled />
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
const props = defineProps(['form']);
const emit = defineEmits(['submit', 'back']);
const handleBack = () => emit('back');
const handleSubmit = () => emit('submit');
</script>
