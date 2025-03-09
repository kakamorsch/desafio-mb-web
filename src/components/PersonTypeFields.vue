<template>
	<div v-if="isPhysical">
		<label>Nome</label>
		<input type="text" v-model="form.nome" required :disabled="isDisabled" />
		<label>CPF</label>
		<input type="text" v-model="form.cpf" required :disabled="isDisabled" />
		<label>Data de nascimento</label>
		<input type="date" v-model="form.dataNascimento" required :disabled="isDisabled" />
		<label>Telefone</label>
		<input type="tel" v-model="form.telefone" required :disabled="isDisabled" />
	</div>
	<div v-else>
		<label>Razão social</label>
		<input type="text" v-model="form.razaoSocial" required :disabled="isDisabled" />
		<label>CNPJ</label>
		<input type="text" v-model="form.cnpj" required :disabled="isDisabled" />
		<label>Data de abertura</label>
		<input type="date" v-model="form.dataAbertura" required :disabled="isDisabled" />
		<label>Telefone</label>
		<input type="tel" v-model="form.telefone" required :disabled="isDisabled" />
	</div>
</template>
<script setup>
const props = defineProps(['form','isPhysical', 'isDisabled']);
</script>
