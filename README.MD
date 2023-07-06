# WebApp Boilerplate

Este projeto é um boilerplate para projetos em reactjs.

## Requisitos

- Node.js
- Yarn

## Instalação

Para instalar todas as dependências necessárias para este projeto, basta rodar o comando abaixo:

```shell
yarn install
```

## Scripts

Este projeto inclui os seguintes scripts no package.json:

- `yarn start`: Inicia o servidor de desenvolvimento do webpack.
- `yarn build`: Compila o código para produção.
- `yarn lint`: Roda o linter ESLint no diretório src.
- `yarn prettier:fix`: Executa o Prettier para formatar automaticamente os arquivos do projeto.
- `yarn prettier:check`: Verifica se os arquivos estão de acordo com as regras do Prettier.
- `yarn test`: Executa os testes com Jest.
- `yarn test:watch`: Executa os testes em modo watch.
- `yarn test:coverage`: Executa os testes e produz um relatório de cobertura.

## Linting e formatação

Este projeto utiliza ESLint para linting e Prettier para formatação de código. Para configurar o autofix no VS Code, você deve ter as extensões do ESLint e Prettier instaladas e então adicionar a seguinte configuração no seu settings.json:

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "eslint.workingDirectories": [{ "mode": "auto" }],
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "[typescript]": {
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },
    "prettier.disableLanguages": ["javascript", "typescript"],
    "files.autoSave": "onFocusChange"
}
```
