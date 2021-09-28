# Nginx com Node.js

```
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.
```

### Não há a necessidade de inserir os dados no banco pois isso está sendo feito de maneira aleatória no endpoint listagem

sei que isso é uma má prática, mas é para fazer com que você não precise ficar entrando no banco de dados
pra fazer essa operação. Do mesmo jeito que a migration é rodada automaticamente, sem a necessidade de gerar
a tabela na mão.