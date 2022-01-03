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

## Módulo 4

- Modelagem da classe `Negociacoes`
- Utilização de Generics
- Adição de negociações em nossa lista

A classe `NegociacaoController` é responsável pela interação entre o `app.js` e os modelos `negociacao` e `negociacoes`. Nela, temos o método `adiciona()`, que cria a negociação, usamos o método `adiciona(negociacao)` da classe `negociacoes` e por fim limpamos o formulário.

- Revisão sobre encapsulamento
- Questões de mutabilidade e como solucioná-la
- O tipo `ReadonlyArray`

## Módulo 5

É possível trocrar declarações de uma classe como essa:

```ts
export class Negociacao {
  private data: Date;
  private quantidade: number;
  private valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }
}
```

Por isso:

```ts
export class Negociacao {
  constructor(
    private data: Date,
    private quantidade: number,
    private valor: number
  ) { }
}
```

- Nova maneira de declaração de array com generics
- O tipo ReadonlyArray
- O modificador readonly
- Getters vs propriedades públicas em modo de leitura

No caso de propriedades privadas com *getters*, podemos alterá-las para públicas e adicionar o modificador `readonly`, assim:

```js
export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }
}
```

- Programação defensiva

Se o atributo de uma classe é um objeto, por exemplo uma instância de `Date`, ele está sujeito a mudanças, mesmo se for `readonly` ou acessando através de um *getter*. Afinal, em ambos os casos, estamos acessando a **referência** do objeto. Podemos então aplicar técnicas de **programação defensiva**, para proteger, encapsular, blindar ainda mais nosso código. Por exemplo:

```ts
export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }

  get data() {
    const data = new Date(this._data.getTime())
    return data;
  }
}
```

Não precisamos nos preocupar com os atributos `quantidade` e `valor`, já que são do tipo `number`. Mas com o atributo do tipo `Date`, precisamos retornar uma cópia do objeto, caso contrário, poderíamos alterar o atributo original com um comando como `negociacao.data.setDate(12)`.
