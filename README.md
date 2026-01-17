# Projeto Full Stack — CRUD com Autenticação e API de Usuários

## Descrição

Aplicação full stack desenvolvida para consolidar fundamentos essenciais para nível júnior em Ciência da Computação / Desenvolvimento de Software.

O sistema implementa autenticação, gerenciamento de usuários e um CRUD principal protegido por login, seguindo boas práticas de arquitetura, organização e segurança.

---

## Objetivo

Demonstrar, na prática:

- Arquitetura backend organizada
- Autenticação com JWT
- Proteção de rotas
- Relacionamento entre entidades
- Integração frontend e backend
- Estrutura de projeto próxima do mercado

---

## Arquitetura Geral

Frontend (React + TypeScript + Tailwind)
↓
Backend (Node ou Java ou C#)
↓
Banco de Dados

---

## Módulos do Sistema

### Usuários (Users API)

Responsável por gerenciar os dados do usuário.

Campos principais:
- id
- name
- email
- passwordHash
- role
- createdAt

Rotas:
- POST /users
- GET /users/{id}
- PUT /users/{id}

Observação: senhas nunca são retornadas pela API.

---

### Autenticação (Auth)

Responsável por autenticar usuários e gerar tokens JWT.

Rotas:
- POST /auth/register
- POST /auth/login

Informações presentes no token:
- id do usuário
- email
- role

---

### CRUD Principal (exemplo: Tarefas)

Cada registro pertence a um usuário autenticado.

Campos principais:
- id
- title
- description
- userId
- createdAt

Rotas protegidas:
- POST /tasks
- GET /tasks
- PUT /tasks/{id}
- DELETE /tasks/{id}

Regra principal:
O usuário só pode acessar, editar ou remover os próprios dados.

---

## Middleware de Autenticação

Responsabilidades:
- Validar o token JWT
- Identificar o usuário autenticado
- Bloquear acesso não autorizado

Comportamento esperado:
- Requisições sem token retornam erro 401 (Unauthorized)
- Requisições válidas recebem o usuário autenticado no contexto da requisição

---

## Frontend

Páginas principais:
- /login
- /register
- /dashboard
- /tasks

Fluxo de autenticação:
1. Usuário realiza login
2. Backend retorna um token
3. Token é armazenado no frontend
4. Token é enviado em todas as requisições protegidas

Proteção de rotas:
- Usuário não autenticado é redirecionado para a tela de login

---

## Organização de Pastas (Backend)

Estrutura sugerida:

src
├── modules
│   ├── users
│   ├── auth
│   ├── tasks
├── middlewares
├── routes
├── config
└── server

---

## Boas Práticas

- Validação de dados de entrada
- Separação de responsabilidades
- Tratamento de erros consistente
- Uso de variáveis de ambiente
- Commits pequenos e descritivos
- Código limpo e organizado

---

## Checklist do Projeto

- CRUD completo
- Autenticação funcional
- JWT validado
- Rotas protegidas
- Usuário acessa apenas seus próprios dados
- Frontend integrado
- Documentação clara

---

## Evoluções Futuras

- Refresh token
- Controle de permissões (roles)
- Paginação e filtros
- Testes unitários
- Documentação da API
- Deploy em produção

---

## Tecnologias

Backend:
- Node.js ou Java
- Express ou Spring Boot ou ASP.NET
- JWT
- PostgreSQL ou MySQL

Frontend:
- React
- TypeScript
- Tailwind CSS

---

## Observação Final

Este projeto tem como foco aprendizado prático, boas práticas e preparação para vagas júnior, simulando um sistema utilizado no mercado real.
