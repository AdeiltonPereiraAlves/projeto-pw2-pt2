# Projeto PW2 - PT2

Equipe: Adeilton pereira alves,
        Felipe Lira de Oliveira 
Este é um projeto fullstack com **frontend** em React e **backend** em Express + TypeScript + Prisma + SQLite.

---

## ⚙️ Tecnologias Utilizadas

**Frontend:**
- React
- Vite
- TailwindCSS
- React Router
- Redux (opcional, se usado)

**Backend:**
- Node.js
- Express
- TypeScript
- Prisma
- SQLite

---

## 📝 Pré-requisitos

Certifique-se de ter instalado:
- Node.js (versão >= 18)
- npm ou yarn
- Git (opcional)

---

## 🚀 Rodando o Projeto

### 1. Clonar o repositório


git clone <URL_DO_REPOSITORIO>
cd projeto-pw2-pt2


2. Rodar o Backend

cd backend
Instalar dependências:
npm install
# ou
yarn
Criar o banco de dados e gerar o cliente Prisma:


npx prisma migrate dev --name init
Rodar o servidor em desenvolvimento:

npm run dev
# ou
yarn dev
A API será executada em http://localhost:3000.

3. Rodar o Frontend

cd ../frontend
Instalar dependências:


npm install
# ou
yarn
Rodar o frontend em desenvolvimento:


npm run dev
# ou
yarn dev
O Vite abrirá a aplicação geralmente em http://localhost:5173.

4. Testes

yarn test
Frontend:
Se houver testes com React Testing Library ou Vitest:


npm run test
# ou
yarn test
Cypress (opcional, e2e):


npx cypress open
⚠️ Configurações importantes
O backend usa SQLite via Prisma. O arquivo do banco (dev.db) fica na pasta prisma do backend.

Para redefinir o banco, delete o arquivo SQLite e rode npx prisma migrate dev novamente.

5. Scripts Úteis
Backend (package.json):

"scripts": {
  "dev": "ts-node-dev src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "prisma": "prisma"
}
Frontend (package.json):

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest"
}
