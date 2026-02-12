# 🏠 Xbnb - Sistema de Gestão de Imóveis

> **Plataforma Full Stack para gerenciamento de propriedades com autenticação JWT e interface moderna**

[![Java](https://img.shields.io/badge/Java-21-orange?style=flat&logo=openjdk)](https://www.java.com)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.5-green?style=flat&logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

[Sobre](#-sobre-o-projeto) • [Funcionalidades](#-funcionalidades) • [Tecnologias](#-stack-tecnológica) • [Instalação](#-instalação-e-execução) • [Estrutura](#-estrutura-do-projeto)

---

## 📖 Sobre o Projeto

O **Xbnb** é um projeto pessoal de estudos focado em desenvolvimento Full Stack, criado para praticar e consolidar conhecimentos em:

- 🔐 **Autenticação e Segurança**: JWT tokens, Spring Security, password encoding
- 🏗️ **Arquitetura REST**: API RESTful com boas práticas (DTOs, repositories, services)
- ⚛️ **React Moderno**: Hooks, Context API, TypeScript, Routing
- 🎨 **UI/UX**: TailwindCSS para design responsivo e componentes estilizados
- 🗄️ **Persistência de Dados**: JPA/Hibernate com relacionamentos de entidades

**Objetivo**: Criar um sistema completo de gestão de imóveis (CRUD) com sistema de autenticação robusto, explorando padrões de projeto e tecnologias atuais do mercado.

---

## ✨ Funcionalidades

### 🔑 Autenticação e Autorização
- ✅ Cadastro de usuários com senha criptografada (BCrypt)
- ✅ Login com geração de JWT token
- ✅ Proteção de rotas com Spring Security
- ✅ Autenticação persistente no frontend (React Context)

### 🏘️ Gestão de Imóveis
- ✅ **Criar** propriedades com informações detalhadas
- ✅ **Listar** todos os imóveis cadastrados
- ✅ **Visualizar** detalhes de propriedades específicas
- ✅ **Editar** informações de imóveis
- ✅ **Deletar** propriedades (com confirmação)
- ✅ Associação automática de propriedades aos usuários criadores

### 💻 Interface Moderna
- ✅ Design responsivo com TailwindCSS
- ✅ Navegação intuitiva com React Router
- ✅ Componentes reutilizáveis (PropertyCard, ProtectedRoute)
- ✅ Feedback visual para ações do usuário

---

## 🛠️ Stack Tecnológica

### Backend
- **Framework**: Spring Boot 3.2.5
- **Linguagem**: Java 21
- **Persistência**: Spring Data JPA + Hibernate
- **Banco de Dados**: PostgreSQL (ou H2 para testes)
- **Segurança**: Spring Security + JWT
- **Criptografia**: BCrypt Password Encoder
- **Build**: Maven

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilização**: TailwindCSS 3 + PostCSS
- **HTTP Client**: Axios
- **Roteamento**: React Router DOM
- **Gerenciamento de Estado**: Context API + Hooks

### Ferramentas de Desenvolvimento
- **Linting**: ESLint
- **Formatação**: Prettier (via ESLint)
- **Git**: Controle de versão

---

## 📁 Estrutura do Projeto

```plaintext
Xbnb/
├── 📂 backend/                     # API REST em Spring Boot
│   ├── src/main/java/com/uca/
│   │   ├── ImoveisApiApplication.java   # 🚀 Entry point
│   │   ├── 📂 config/
│   │   │   └── SecurityConfig.java      # Configuração Spring Security + JWT
│   │   ├── 📂 controller/               # Endpoints REST
│   │   │   ├── AuthController.java      # /auth/login, /auth/register
│   │   │   └── PropertyController.java  # /api/properties (CRUD)
│   │   ├── 📂 dto/                      # Data Transfer Objects
│   │   │   ├── AuthResponse.java        # Token + User info
│   │   │   ├── LoginRequest.java        # Email + Password
│   │   │   ├── PropertyDTO.java         # Dados de imóvel
│   │   │   └── RegisterRequest.java     # Name + Email + Password
│   │   ├── 📂 model/                    # Entidades JPA
│   │   │   ├── User.java                # @Entity usuário
│   │   │   └── Property.java            # @Entity propriedade
│   │   ├── 📂 repository/               # Interfaces JPA Repository
│   │   ├── 📂 security/                 # JWT Provider + Filters
│   │   │   ├── JwtTokenProvider.java    # Geração/validação token
│   │   │   ├── JwtAuthenticationFilter.java
│   │   │   └── CustomUserDetailsService.java
│   │   └── 📂 service/                  # Lógica de negócio
│   │       ├── AuthService.java         # Login/Register
│   │       └── PropertyService.java     # CRUD imóveis
│   ├── src/main/resources/
│   │   └── application.properties       # Config DB + JWT secret
│   └── pom.xml                          # Dependências Maven
│
└── 📂 frontend/                    # React + TypeScript + Vite
    ├── src/
    │   ├── App.tsx                      # Rotas principais
    │   ├── main.tsx                     # Entry point React
    │   ├── 📂 components/
    │   │   ├── ProtectedRoute.tsx       # HOC para rotas privadas
    │   │   └── Imoveis/
    │   │       └── PropertyCard.tsx     # Card de imóvel
    │   ├── 📂 hooks/
    │   │   ├── AuthContext.tsx          # Context de autenticação
    │   │   └── useAuth.ts               # Hook customizado
    │   ├── 📂 pages/
    │   │   ├── Login.tsx                # Página de login
    │   │   ├── Register.tsx             # Página de cadastro
    │   │   ├── Dashboard.tsx            # Home autenticada
    │   │   ├── PropertyList.tsx         # Lista de imóveis
    │   │   ├── PropertyCreate.tsx       # Criar imóvel
    │   │   ├── PropertyDetail.tsx       # Detalhes do imóvel
    │   │   └── PropertyEdit.tsx         # Editar imóvel
    │   ├── 📂 services/
    │   │   └── api.ts                   # Configuração Axios + Interceptors
    │   └── 📂 types/
    │       └── index.ts                 # Tipos TypeScript
    ├── package.json                     # Dependências npm
    ├── vite.config.ts                   # Configuração Vite
    ├── tsconfig.json                    # Configuração TypeScript
    └── tailwind.config.js               # Configuração TailwindCSS
```

---

## 🚀 Instalação e Execução

### Pré-requisitos

```bash
# Backend
- Java JDK 21 ou superior
- Maven 3.8+
- PostgreSQL (ou outro banco SQL)

# Frontend
- Node.js 18+ e npm/yarn
```

### Backend (API REST)

1. **Configure o banco de dados** em `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/xbnb
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

# JWT Secret (altere para produção)
jwt.secret=sua-chave-secreta-super-segura
jwt.expiration=86400000
```

2. **Execute o backend**:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

A API estará rodando em `http://localhost:8080`

### Frontend (React)

1. **Instale as dependências**:

```bash
cd frontend
npm install
```

2. **Configure a URL da API** em `api.ts`:

```typescript
const api = axios.create({
  baseURL: 'http://localhost:8080', // Altere conforme necessário
});
```

3. **Execute o frontend**:

```bash
npm run dev
```

A aplicação estará rodando em `http://localhost:5173`

---

## 🔐 Fluxo de Autenticação

### Registro de Usuário
1. Cliente envia `POST /auth/register` com `{ name, email, password }`
2. Backend criptografa senha com BCrypt
3. Salva usuário no banco de dados
4. Retorna JWT token + dados do usuário

### Login
1. Cliente envia `POST /auth/login` com `{ email, password }`
2. Backend valida credenciais
3. Gera JWT token (válido por 24h)
4. Frontend armazena token no localStorage
5. Token é incluído em todas as requisições subsequentes via Axios Interceptor

### Rotas Protegidas
- Todas as requisições para `/api/properties` requerem header `Authorization: Bearer <token>`
- `JwtAuthenticationFilter` valida token em cada requisição
- Frontend usa `ProtectedRoute` para bloquear acesso não autorizado

---

## 🎨 Endpoints da API

### Autenticação
```http
POST /auth/register
Body: { "name": "string", "email": "string", "password": "string" }
Response: { "token": "string", "user": { "id", "name", "email" } }

POST /auth/login
Body: { "email": "string", "password": "string" }
Response: { "token": "string", "user": { "id", "name", "email" } }
```

### Imóveis (Requer Autenticação)
```http
GET /api/properties
Response: [ { "id", "title", "description", "price", "location", "owner": {...} } ]

POST /api/properties
Body: { "title": "string", "description": "string", "price": number, "location": "string" }
Response: { "id", "title", ... }

GET /api/properties/{id}
Response: { "id", "title", "description", "price", "location", "owner": {...} }

PUT /api/properties/{id}
Body: { "title": "string", "description": "string", "price": number, "location": "string" }
Response: { "id", "title", ... }

DELETE /api/properties/{id}
Response: 204 No Content
```

---

## 💡 Decisões Técnicas

### Por que Spring Boot?
- ✅ Ecossistema robusto para APIs REST
- ✅ Spring Security integrado para autenticação
- ✅ JPA/Hibernate simplifica persistência
- ✅ Ótima documentação e comunidade ativa

### Por que React + TypeScript?
- ✅ Tipagem estática previne erros em tempo de desenvolvimento
- ✅ Hooks modernos (useState, useEffect, useContext)
- ✅ Vite oferece build ultra-rápido
- ✅ Grande demanda no mercado

### Por que TailwindCSS?
- ✅ Desenvolvimento rápido com classes utilitárias
- ✅ Design responsivo sem CSS customizado
- ✅ Fácil manutenção e consistência visual

---

## 🧪 Testando o Sistema

1. **Crie um usuário**:
   - Acesse `http://localhost:5173/register`
   - Preencha: Nome, Email, Senha
   - Clique em "Cadastrar"

2. **Faça login**:
   - Use as credenciais criadas
   - Você será redirecionado para o Dashboard

3. **Crie um imóvel**:
   - Clique em "Criar Imóvel"
   - Preencha: Título, Descrição, Preço, Localização
   - Clique em "Criar"

4. **Explore funcionalidades**:
   - Visualize a lista de imóveis
   - Edite um imóvel (botão "Editar")
   - Delete um imóvel (botão "Deletar")
   - Faça logout

---

## 🐛 Troubleshooting

### Erro: "CORS policy"
**Solução**: Verifique se `SecurityConfig` tem:
```java
http.cors(cors -> cors.configurationSource(request -> {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOrigins(List.of("http://localhost:5173"));
    config.setAllowedMethods(List.of("*"));
    config.setAllowedHeaders(List.of("*"));
    return config;
}));
```

### Erro: "Unable to connect to database"
**Solução**: Certifique-se que o PostgreSQL está rodando e as credenciais em `application.properties` estão corretas.

### Erro: "JWT token expired"
**Solução**: Faça logout e login novamente. Tokens expiram após 24h por padrão.

---

## 📚 Aprendizados

Este projeto permitiu consolidar conhecimentos em:

- ✅ Arquitetura de APIs REST com camadas bem definidas (Controller → Service → Repository)
- ✅ Implementação de segurança com JWT do zero
- ✅ Relacionamentos JPA (`@ManyToOne`, `@OneToMany`)
- ✅ React Context API para gerenciamento de estado global
- ✅ Axios Interceptors para tratamento automático de autenticação
- ✅ TailwindCSS para prototipagem rápida de interfaces
- ✅ TypeScript para código mais seguro e escalável

---

## 🤝 Sobre o Desenvolvimento

**Projeto Individual de Estudos**

Desenvolvido por: Rafael
Objetivos: Prática de Full Stack, consolidação de tecnologias modernas
Status: Concluído (funcional para estudos)

---

## 📞 Contato

Este é um projeto **open-source para fins educacionais**. Sinta-se à vontade para:

- 🍴 **Fork** o projeto e adaptá-lo às suas necessidades
- 🐛 **Reportar bugs** (se encontrar)
- 💡 **Sugerir melhorias** ou novos recursos
- 📖 **Usar como referência** para seus próprios estudos

---

<div align="center">

**⭐ Se este projeto te ajudou nos estudos, considere dar uma estrela!**

Feito com ☕ e muita documentação de Spring Boot e React

</div>


