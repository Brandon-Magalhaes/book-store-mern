# Livraria — CRUD MERN

Cadastro de livros com a stack **MERN**: MongoDB + Express no backend, React + Vite + Tailwind no frontend.

> Projeto de estudo construído a partir do tutorial de [MamadTaheri68](https://github.com/MamadTaheri68), com adaptações próprias. Não é código original meu — está publicado como registro de aprendizado da stack.

## Funcionalidades

- Criar, listar, visualizar, editar e excluir livros (título, autor e ano de publicação).
- Modal de criação/edição e confirmação de exclusão.
- Tabela e visualização em cards na página inicial.
- Feedback de carregamento (spinner) e notificações com `notistack`.
- Navegação com `react-router-dom`.

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `backend/` | Express 4 + Mongoose 7 · modelo em `models/bookModel.js` · rotas em `routes/booksRoute.js` · porta 5555 |
| `frontend/` | Vite + React 18 + Tailwind + axios · páginas em `src/pages` |

## API

| Método | Rota | Ação |
|---|---|---|
| POST | `/books` | cria um livro |
| GET | `/books` | lista todos |
| GET | `/books/:id` | detalhe |
| PUT | `/books/:id` | atualiza |
| DELETE | `/books/:id` | remove |

## Como rodar

Backend:

```bash
cd backend
npm install
cp .env.example .env      # preencha MONGODB_URI
npm run dev               # http://localhost:5555
```

Frontend, em outro terminal:

```bash
cd frontend
npm install
npm run dev               # http://localhost:5173
```

Os scripts `start` e `dev` carregam o `.env` automaticamente (recurso `--env-file` do Node), então é preciso **Node 20.6 ou superior**.

## Variáveis de ambiente

| Variável | Uso |
|---|---|
| `MONGODB_URI` | string de conexão do MongoDB (local ou Atlas) |
| `PORT` | porta do backend (padrão 5555) |

Nenhuma credencial real deve ser commitada.

## Limitações conhecidas

- Sem autenticação: qualquer pessoa com acesso à API pode alterar os dados.
- Validação apenas de campos obrigatórios, sem checagem de tipo.
- Sem testes automatizados.

## Telas

![Listagem](https://github.com/Brandon-Magalhaes/MERN-Book-Store/assets/105319507/67a58e3b-9ea7-4229-adb4-4dc1d6ca3d83)
![Cadastro](https://github.com/Brandon-Magalhaes/MERN-Book-Store/assets/105319507/18c86202-0bd2-4e44-a48f-d43b9a2b6008)
![Detalhe](https://github.com/Brandon-Magalhaes/MERN-Book-Store/assets/105319507/05019de3-135b-46d4-9810-a3f876bdcd69)
