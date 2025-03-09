<template>
	<div class="container">
		<Step1 v-if="step === 1" @next="nextStep" :form="form" />
		<Step2
			v-if="step === 2"
			@next="nextStep"
			@back="prevStep"
			:form="form"
		/>
		<Step3 v-if="step === 3" @next="nextStep" @back="prevStep" :form="form" />
		<Step4
			v-if="step === 4"
			@submit="submitForm"
			@back="prevStep"
			:form="form"
		/>
	</div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
const Step1 = defineAsyncComponent(() => import('./components/Step1.vue'));
const Step2 = defineAsyncComponent(() =>
	import('./components/Step2.vue'),
);
const Step3 = defineAsyncComponent(() => import('./components/Step3.vue'));
const Step4 = defineAsyncComponent(() => import('./components/Step4.vue'));

// Gerenciamento de estado
const step = ref(1);
const form = ref({
	tipo: 'fisica', // Definimos o padrão como pessoa física
	// Os demais campos serão alimentados conforme avançamos nos passos
});

// Metodos para navegação entre os passos
const nextStep = () => {
	if (step.value < 4) {
		step.value++;
	}
};

const prevStep = () => {
	if (step.value > 1) {
		step.value--;
	}
};

const submitForm = () => {
	// TODO: adicionar lógica de envio para o backend
	console.log('Form:', form.value);
};
</script>
