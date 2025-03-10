**README: Como Executar o Projeto**

Este projeto é uma aplicação desenvolvida com Vue 3 e Vite, que inclui um servidor para gerenciar requisições. Abaixo estão as instruções para configurar e executar o projeto.

---

**Pré-requisitos**

- Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
- Instale o [Bun](https://bun.sh/) como gerenciador de pacotes.

---

**Configuração do Projeto**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/kakamorsch/desafio-mb-web.git
   cd desafio-mb-web
   ```

2. **Instale as dependências:**

   Execute o seguinte comando na raiz do projeto:

   ```bash
   bun install
   ```

---

**Executando o Servidor**

1. **Navegue até a pasta do servidor:**

   ```bash
   cd server
   ```

2. **Instale as dependências:**

   Execute o seguinte comando na raiz do projeto:

   ```bash
   bun install
   ```

3. **Inicie o servidor:**

   O servidor está configurado para rodar na porta 5000. Para iniciá-lo, execute:

   ```bash
   bun run start
   ```

   O servidor agora deve estar em execução e pronto para receber requisições.

---

**Executando a Aplicação Frontend**

1. **Volte para a raiz do projeto:**

   ```bash
   cd ..
   ```

2. **Inicie a aplicação:**

   Para iniciar a aplicação em modo de desenvolvimento, execute:

   ```bash
   bun dev
   ```

   A aplicação estará disponível em `http://localhost:5173` (ou outra porta se configurada).

---

**Compilando para Produção**

Para compilar a aplicação para produção, execute:

```bash
bun run build
```

Os arquivos compilados serão gerados na pasta `dist`.
