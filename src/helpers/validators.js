export const documentValidator = {
    clean(value) {
        // Função já adequada para a instrução normativa n 2229 da RFB
        return String(value).replace(/[^\w]/g, '').toUpperCase(); // Mantém alfanumério e torna todos os itens em maiúsculos
    },

    cpf(input) {
        const cleaned = this.clean(input);

        if (cleaned.length !== 11 || /^(\d)\1{10}$/.test(cleaned)) {
            return false;
        }

        let sum = 0;
        let remainder;

        // Valida primeiro dígito verificador
        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cleaned.substring(9, 10))) return false;

        // Valida segundo dígito verificador
        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cleaned.substring(10, 11))) return false;

        return true;
    },

    cnpj(input) {
        const cleaned = this.clean(input);

        if (cleaned.length !== 14 || !/^\w{12}\d{2}$/.test(cleaned) || /^(\w)\1{13}$/.test(cleaned)) {
            return false;
        }

        const values = [];
        for (let i = 0; i < 14; i++) {
            values.push(cleaned.charCodeAt(i) - 48);
        }

        // Valida primeiro digito
        let sum = 0;
        let pos = 5;
        for (let i = 0; i < 12; i++) {
            sum += values[i] * pos;
            pos = (pos === 2) ? 9 : pos - 1;
        }

        let result = sum % 11;
        result = result < 2 ? 0 : 11 - result;

        if (result !== values[12]) return false;

        // Valida segundo digito
        sum = 0;
        pos = 6;
        for (let i = 0; i < 13; i++) {
            sum += values[i] * pos;
            pos = (pos === 2) ? 9 : pos - 1;
        }

        result = sum % 11;
        result = result < 2 ? 0 : 11 - result;

        if (result !== values[13]) return false;

        return true;
    },

    validate(value) {
        const cleaned = this.clean(value);

        if (!cleaned) return false;

        if (cleaned.length === 11) {
            return this.cpf(cleaned);
        }

        if (cleaned.length === 14) {
            return this.cnpj(cleaned);
        }

        return false;
    }
};

export const validatePhone = (input) => {
    const cleaned = String(input).replace(/\D/g, '')

    // Verifica números móveis (11 dígitos) e fixos (10 dígitos)
    const regex = /^(\d{2})(9\d{8}|[2-5]\d{7})$/ // Aplica o princípio KISS facilitando o entendimento e manutenção
    return regex.test(cleaned)
}

// Ajusta o telefone no formulário
export const phoneMask = (v) => {
    return v.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .slice(0, 15)
}