


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="https://media.licdn.com/dms/image/C4D0BAQFK7bRgmryn0Q/company-logo_200_200/0/1649165120647?e=1690416000&v=beta&t=DdPk_TeqiACWtAiV663WyGOsa1TA6KJyIPhmH81WDdE" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Ammo Varejo</h3>

  <p align="center">
    Teste prático como desenvolvedor full stack para o grupo Ammo Varejo
  </p>
</div>


<!-- SOBRE O PROJETO -->
## Sobre o projeto

O desafio tem como objetivo  desenvolver uma aplicação que permita a listagem de produtos em um e-commerce. A mesma contém algumas funcionalidades, como busca pelo nome do produto, paginação e limite de produtos por página. Os produtos já estão cadastrados em um banco de dados utilizando migrations e seeds.

### Desenvolvido com 

O projeto foi desenvolvido com as seguintes tecnologias/plataformas:

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
* ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
* ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
* ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

De forma resumida no projeto foi utilizado Node.JS atrelado ao Typescript, utilizando MYSQL (ambiente local) e PostgreSQL (ambiente publicado), utilizando o ORM Prisma juntamente com o Swagger e sendo publicada na plataforma Render.

<!-- Primeiros passos -->

### Pré requisitos

Você poderá seguir o passo a passo para rodar o projeto localmente ou acessá-lo no ambiente publicado: 
</br>
</br>
https://ammo-varejo-api.onrender.com/doc

### Instalação

_Siga os seguintes passos para rodar localmente, **fique atento a utilizar a branch develop**._

1. Clone o repositório
   ```sh
   git clone https://github.com/rogeriomarquesamancio/teste-ammo-frontend.git
   ```
2. Instale os pacotes NPM
   ```sh
   npm install
   ```
4. Ajuste seu ambiente de conexão em `.env`
   ```js
   const PORT = 'PORTA';
   const DATABASE_URL = 'URL BANCO DE DADOS';
   ```
5. Ajuste seu ambiente de conexão no swagger em `/doc/Swagger.ts`
   ```js
   const host = 'HOST PARA APONTAMENTO';
   const schemes = 'TIPO DE CONEXÃO (exemplo: http,https...)';
   ```
6. Ajuste o tipo de banco de dados `/prisma/schema.prisma`
   ```js
   const provider = 'TIPO BANCO DE DADOS (exemplo: postegre,mysql)';
   ```
7. Execute o comando para ajustar o seu Swagger de acordo com as novas modificações
   ```js
   npm run doc
   ```
8. Execute o comando para ajustar executar seeder e migrations de acordo com o seu banco de dados
   ```js
   npm run migrate
   ```
9. Execute o comando para executar o projeto
   ```js
   npm run dev
   ```

<!-- UTILIZAÇÃO EXEMPLOS -->
## Utilização

Utilize o swagger para facilitar o uso, o mesmo contém a documentação necessária para o entendimento das requests criadas. 

<!-- BANCO DE DADOS -->
## Banco de dados

Localmente foi utilizado o banco de dados MYSQL e no ambiente de produção o banco POSTGRESQL os mesmos seguem as mesmas entidades e dados.

<img src="https://media.discordapp.net/attachments/850486663184777236/1099742064494784713/image.png" alt="Logo" width="1000" height="700">

Verifique o arquivo `/seeders/Seed.ts` para adicionar dados ao seed.

<!-- CONTATO -->
## Contato

Linkedin - (https://www.linkedin.com/in/rogerio-marques-11b442207/)

<!-- CURIOSIDADES -->
## Curiosidades

Informações aleatórias sobre a construção do projeto.

* No projeto inicialmente foi utilizado Sequelize.
* Foram feitos 26 commits ( main e develop )
* Inicialmente o projeto seria todo em MYSQL, porém a plataforma Render suporta apenas PostgreSQL.
