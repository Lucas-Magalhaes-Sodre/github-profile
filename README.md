## Github Profile

Em sintese a aplicação utiliza a api do GITHUB,consome alguns endpoints e é constituida por três componentes principais:

the search field.

Results view.

Dois botões para executar um determinado resultado(repos e starred).
Ao clicar nos botões de repos e starred, deverá mostrar uma lista simples de cada.

Para acessar as funcionalidades da aplicação o usuário deve estar logado através de uma autenticação com o github, a qual é requerida para tal acesso.

No campo de busca, ao digitar o nome do perfil do github desejado, são mostradas algumas informações do deste perfil e dois botões que quando clicados deverão mostrar uma lista simples de cada.
Ao clicar no botão de repos, são listados os repositorios do usuario pesquisado.
Ao clicar no botão de starred, são listados os repositorios mais visitados por aquele usuario.





## PARA UTILIZAR A APLICAÇÃO:

Para utilizar os Endpoints da aplicação, você precisará estar autenticado, para isso você irá utilizar a autenticação do GITHUB:

Guia Autenticação: https://docs.github.com/pt/developers/apps/building-oauth-apps

Insira as informações (Client ID e Client secrets) obtidas após a seguir passo a passo o guia autenticação, as insira no arquivo ".env".

## Observação:
Ao criar seu "OAuth Apps" ultilize a <strong>(Homepage URL e a Authorization callback URL)</strong> de acordo com o exemplo abaixo:


![WhatsApp Image 2021-09-27 at 15 27 10](https://user-images.githubusercontent.com/82623967/134965062-3c2dc1d3-07a5-4d55-a7ff-11f2355be26f.jpeg)


Instale as dependências necessárias como por exemplo o "yarn" antes de colocar a aplicação para rodar.

Por fim, dê um "yarn dev" no terminal terminal do seu editor e utilize a aplicação.

Muito obrigado pela sua atenção!




(Aplicação feita em Next.js).
(Next.js é um framework para React. O que isso quer dizer? O React é uma biblioteca Javascript para construção de interfaces e o Next é considerado um framework pois adiciona várias funcionalidades em cima do React).
