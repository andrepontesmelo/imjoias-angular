# Instalação ambiente de desenvolvimento - Windows

* Git: https://git-scm.com/download/win
* Nodejs: https://nodejs.org/en/download/
* RubyInstaller - http://rubyinstaller.org/

# Baixando o repositório
git clone ssh://root@imj.ignorelist.com:9000/srv/git/angularimj.git

# Pré-requisitos

Usando git bash

```
cd angularimj\frontend
npm install -g bower grunt grunt-cli
npm install -g yo generator-karma generator-angular
npm install

```

# Executando os testes

```
grunt test
```

# Executando a aplicação

```
grunt serve
```
