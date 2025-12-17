<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# LogiFlow - Sistema de Governança Logística

Sistema de governança e monitoramento de processos logísticos com suporte para automação RPA e integração com agentes de IA.

## 🚀 Executar Localmente

**Pré-requisitos:** Node.js 18+

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo de exemplo e configure suas credenciais:

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:

```env
# Supabase (opcional - para persistência de dados)
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-publica-anon

# Google Gemini API (opcional - para Central Inteligente)
GEMINI_API_KEY=sua-chave-gemini
```

> ⚠️ **Importante:** O arquivo `.env.local` nunca deve ser versionado. Ele já está no `.gitignore`.

### 3. Executar a aplicação
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
├── App.tsx              # Rotas e layout principal
├── frontend/src/
│   ├── components/      # Componentes React
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Hooks customizados
│   ├── config/          # Configurações (env, etc)
│   └── types/           # Definições TypeScript
├── backend/src/         # API Express
└── .env.example         # Template de variáveis de ambiente
```

## 🔧 Integrações (Futuras)

O sistema está preparado para integração com:

- **Supabase** - Persistência de dados e autenticação
- **Google Gemini** - IA para Central Inteligente
- **n8n** - Workflows de automação

Para ativar as integrações, configure as variáveis de ambiente conforme `.env.example`.

