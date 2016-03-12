

# API

GET /api/v1/setores/

```json
[{"codigo":1,"nome":"Varejo","atendimento":true,"empresa":300000},
{"codigo":2,"nome":"Atacado","atendimento":true,"empresa":300000},
{"codigo":4,"nome":"Oficina","atendimento":false,"empresa":300000},
{"codigo":5,"nome":"Financeiro","atendimento":false,"empresa":300000},
{"codigo":7,"nome":"Contabilidade","atendimento":false,"empresa":300000}]
```

GET /api/v1/setores/atendimento


```json
[{"codigo":1,"nome":"Varejo","atendimento":true,"empresa":300000},
{"codigo":2,"nome":"Atacado","atendimento":true,"empresa":300000}]
```

GET /api/v1/setor/1

```json
{"codigo":1,"nome":"Varejo","atendimento":true,"empresa":300000,
"faixas":[{"faixa":"a","setor":1,"valor":3},
          {"faixa":"b","setor":1,"valor":2},
          {"faixa":"c","setor":1,"valor":1}]}
```

GET /api/v1/mercadorias

```json
[{"referencia":"10000101035","nome":"Brilhante 0.0057k",
  "teor":750,"peso":0.01,"faixa":"C","grupo":null,"digito":true,
  "foradelinha":false,"depeso":false},
  {"referencia":"10000101075","nome":"Brilhante 0.0308 K",
    "teor":750,"peso":0.01,"faixa":"C","grupo":null,"digito":true,
    "foradelinha":false,"depeso":false}]
```

GET /api/v1/mercadoria/10232513100/

```json
{"referencia":"10232513100","nome":"Anel de Ouro","teor":750,"peso":5.0,"faixa":"H","grupo":null,"digito":true,
  "foradelinha":true,"depeso":false,"componentes":[{
    "mercadoria":"10232513100","componentecusto":"31","quantidade":5.0},
    {"mercadoria":"10232513100","componentecusto":"AA","quantidade":4.01},
    {"mercadoria":"10232513100","componentecusto":"21","quantidade":7.28}],
    "novosPrecos":{"mercadoria":"10232513100","novoIndiceAtacado":8.31,"novoPrecoCusto":767.51},
    "novosPrecosVarejo":{"mercadoria":"10232513100","novoValorVarejoConsulta":1903.42,"novoValorVarejo":2016.29}}
```
