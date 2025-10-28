# Plataforma Web para a "ONG Saber Liberta"

## 📖 Sobre o Projeto

Este projeto consiste no desenvolvimento de uma plataforma web completa e profissional para a **ONG Saber Liberta**, uma organização fictícia dedicada ao combate à desigualdade social através da educação e capacitação. O site serve como a principal presença digital da ONG, permitindo a divulgação de sua missão, a captação de voluntários e doadores, e a apresentação de seus projetos.

Este trabalho foi desenvolvido como parte da avaliação da disciplina de Desenvolvimento Front-End, aplicando de forma integrada os conceitos de HTML5, CSS3 e JavaScript para criar uma interface moderna, responsiva, acessível e implementada como uma Single Page Application (SPA).

### 🎯 Objetivo da ONG

A **ONG Saber Liberta** atua em comunidades vulneráveis com a missão de levar conhecimento como ferramenta de transformação. Seus principais pilares são:
*   **Educação e Alfabetização:** Erradicar o analfabetismo e promover a cidadania.
*   **Capacitação Profissional:** Ensinar habilidades práticas para geração de renda.
*   **Conscientização e Prevenção:** Abordar temas como violência e saúde pública.

---

## 🚀 Tecnologias Utilizadas

*   **HTML5:** Para a estruturação semântica do conteúdo, seguindo as melhores práticas de acessibilidade.
*   **CSS3:** Para estilização, layout responsivo (Flexbox e Grid) e um sistema de design baseado em variáveis (custom properties).
*   **JavaScript (ES6+):** Para interatividade, manipulação do DOM, validação de formulários e a arquitetura de Single Page Application (SPA).

---

## ✨ Funcionalidades Implementadas

*   **Navegação SPA:** Carregamento de páginas dinâmico sem recarregar o navegador, utilizando a History API (`pushState`).
*   **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
*   **Menu Hambúrguer:** Navegação otimizada para telas pequenas.
*   **Formulários Interativos:** Validação nativa e máscaras de input para CPF, CEP e telefone.
*   **Acessibilidade (WCAG):**
    *   Navegação completa por teclado com indicadores de foco visíveis.
    *   Estrutura semântica e uso de atributos ARIA.
    *   Modo de Alto Contraste para melhor legibilidade.
    *   Textos alternativos descritivos para imagens.

---

## 📂 Estrutura de Pastas

O projeto está organizado de forma modular para facilitar a manutenção e a escalabilidade.

```
/
├── css/
│   └── style.css         # Folha de estilo principal com sistema de design
├── imagens/
│   └── ...               # Imagens e ícones utilizados
├── js/
│   └── scripts.js        # Lógica da SPA, interatividade e manipulação do DOM
├── apoiadores.html
├── cadastro.html
├── contato.html
├── cursos.html
├── index.html            # Página principal e estrutura base
├── projetos.html
└── README.md             # Documentação do projeto
```

---

## 🏁 Como Executar o Projeto

Como este é um projeto front-end puro (HTML, CSS, JS), não há necessidade de um servidor complexo.

1.  Clone o repositório:
    ```bash
    git clone https://github.com/JuNiNhOolr/ONG-Saber-Liberta.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd ONG-Saber-Liberta
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

> **Nota:** Para uma experiência mais fiel (especialmente com a lógica de `fetch` ), é recomendado usar uma extensão como o "Live Server" no Visual Studio Code, que simula um ambiente de servidor local.
