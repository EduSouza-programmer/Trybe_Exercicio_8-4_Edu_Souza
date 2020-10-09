<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  <strike>Exercício 8-2: JS_ES6 - Higher Order Functions--map, filter - Concluído o/ o/ o/ :star:</strike>
	<h4>Em resolução :runner:</h4>
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Hoje você vai aprender sete features do ES6 que são muito úteis na hora de desenvolver:

- spread operator;
- parâmetro rest;
- object destructuring;
- array destructuring;
- default destructuring;
- abbreviation object literal;
- default params.

Saber fazer uso adequado desses recursos vai te auxiliar na escrita de código mais conciso e limpo, facilitando na compreensão de quem for lê-lo futuramente. Object destructuring, por exemplo, é muito útil na hora de realizar uma tarefa recorrente de desenvolvedor: selecionar certos campos vindos da resposta de uma API. Com object destructuring você consegue declarativamente realizar essa tarefa, deixando seu código mais legível.

# :postbox: Entrega

### :clipboard: Sumário

- <p><a href="#1"> :pushpin: 1.</a> Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54;</p>

- <p><a href="#2"> :pushpin: 2.</a> Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos;</p>

- <p><a href="#3"> :pushpin: 3.</a> Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA;</p>

- <p><a href="#4"> :pushpin: 4.</a> Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA;</p>

- <p><a href="#5"> :pushpin: 5.</a> Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA;</p>

- <p><a href="#6"> :pushpin: 6.</a> Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA;</p>

- <p><a href="#7"> :pushpin: 7.</a> Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA;</p>

- <p><a href="#8"> :pushpin: 8.</a> Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA;</p>

## :books: Exercícios

### 1°

Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

for (rectangle of rectangles) {
  assert.equal(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
}
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. 

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const assert = require('assert');

const sum = (...values) => values.reduce((acc, value) => acc + value, 0);

assert.equal(sum(), 0);
assert.equal(sum(1), 1);
assert.equal(sum(1, 2), 3);
assert.equal(sum(1, 2, 3), 6);
assert.equal(sum(1, 2, 3, 4), 10);
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 5°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 6°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 7°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 8°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
