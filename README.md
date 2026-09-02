# Expense Tracker

Aplicacao web para controlar um orcamento pessoal, registrar despesas e acompanhar estatisticas por categoria. O projeto combina uma interface responsiva com calculos em JavaScript e persistencia no navegador.

## Funcionalidades

- Definir o valor do orcamento.
- Adicionar despesas por categoria e valor.
- Remover despesas individualmente.
- Exibir total, media e saldo disponivel.
- Indicar visualmente a situacao do saldo.
- Mostrar a categoria com maior gasto.
- Exibir totais de Mercado, Comer fora, Transporte, Casa e Assinaturas.
- Persistir orcamento e despesas com `localStorage`.
- Restaurar os dados iniciais ao limpar as estatisticas.

## Tecnologias e praticas

- HTML5 semantico e formularios.
- CSS3 responsivo organizado com metodologia BEM.
- JavaScript moderno dividido em modulos de calculo, interface e inicializacao.
- Manipulacao do DOM, eventos, templates e modais.
- `localStorage` para persistencia local.

## Organizacao

- `index.html`: estrutura, estatisticas, formulario e template de despesa.
- `blocks/`: estilos BEM dos componentes da interface.
- `pages/index.css`: ponto de entrada dos estilos.
- `scripts/calculations.js`: regras e calculos financeiros.
- `scripts/handle-html.js`: eventos e atualizacao do DOM.
- `scripts/index.js`: carregamento e persistencia dos dados.
- `vendor/`: normalizacao e fontes locais.

## Como executar

Abra `index.html` em um navegador ou use um servidor estatico local. Os dados ficam salvos no `localStorage` do navegador.
