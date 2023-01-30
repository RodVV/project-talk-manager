
Aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações:
1. Desenvolver uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
2. Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

Rodando no Docker:
> Rode o serviço `node` com o comando `docker-compose up -d`.
- Esse serviço irá inicializar um container chamado `talker_manager`.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

> Use o comando `docker exec -it talker_manager bash`.
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as dependências [**Caso existam**] com `npm install`

---
Rodando sem Docker:
> Instale as dependências [**Caso existam**] com `npm install`
Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.


1. Clone o repositório

2. Crie uma branch a partir da branch `master`


---
Passos do projeto:
1 - Crie o endpoint GET `/talker` para que a requisição retorne o <code>status 200</code> e um array com todas as pessoas palestrantes cadastradas. 

2 - Crie o endpoint GET `/talker/:id` para que a requisição retorne o <code>status 200</code> e uma pessoa palestrante com base no <code>id</code> da rota. Por exemplo, ao fazer uma requisição <code>/talker/1</code>, a resposta deve ser:</summary><br />

3 - Crie o endpoint POST `/login`, o endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

4 - Validações para o endpoint `/login`

5 - Crie o endpoint POST `/talker`para que seja possivel adicionar uma nova pessoa palestrante ao seu arquivo;

6 - Crie o endpoint PUT `/talker/:id`, endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

7 - Crie o endpoint DELETE `/talker/:id` para que seja possivel deletar uma pessoa palestrante. (com token de autenticação)

8 - Crie o endpoint GET `/talker/search?q=searchTerm`, oendpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. 
