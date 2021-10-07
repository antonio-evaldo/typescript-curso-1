# TypeScript parte 1: Evoluindo seu JavaScript

## Módulo 1

- Um pouco sobre módulos do ECMAScript
- Modelagem de uma Negociação em Javascript
- Buracos em nossa modelagem por limitações da linguagem Javascript

## Módulo 2

- Download do typescript

Baixando a versão 4.2.2 do typescript para compatibilidade completa com o curso:

```bash
npm install typescript@4.2.2 --save-dev
```

- Configuração do compilador e papel do `tsconfig.json`

Arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "outDir": "dist/js",
    "target": "ES6",
    "noEmitOnError": true
  },
  "include": ["app/**/*"]
}
```

Scripts para adicionar no `package.json`:

```json
    "compile": "tsc",
    "watch": "tsc -w"
```

Script que roda tanto o server quanto as alterações nos arquivos para realizar a compilação:

```json
    "start": "concurrently \"npm run watch\" \"npm run server\"",
```

Para executar o script: `npm run start`.

- Modificadores de accesso private e public
- Benefícios iniciais da linguagem TypeScript

## Módulo 3

- O tipo implícito any
- Benefícios da tipagem estática
- Configuração `"noImplicitAny": true`
- Retorno de método explícito (e o que devemos tipar)

O instrutor fala que devemos tipar principalmente:

1. Propriedades e métodos de classes
2. Retorno de funções e métodos (por exemplo, `void` caso não retorne nada)
3. Parâmetros de funções e métodos

Algumas outras tipagens são desnecessárias, como em atribuições diretas.

- Conversão de valores da interface do usuário

