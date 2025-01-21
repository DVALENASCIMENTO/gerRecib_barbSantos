![image](https://github.com/user-attachments/assets/4f3e08a0-395b-42c2-9aa9-92e7af2b9a34)

# Gerador de Recibos - Barbearia Santos
https://dvalenascimento.github.io/gerRecib_barbSantos/

Este projeto permite a geração de recibos personalizados para a **Barbearia Santos**. O usuário pode preencher um formulário com os dados do cliente, serviço prestado, valor pago e data de pagamento. Após o preenchimento, o recibo será gerado e pode ser baixado como um arquivo PDF.

## Funcionalidades

- **Preenchimento do Formulário**: O usuário preenche os dados do cliente, serviço prestado, valor e data de pagamento.
- **Exibição do Recibo Gerado**: O recibo gerado será mostrado na página com as informações preenchidas.
- **Download do Recibo em PDF**: Após a visualização, o recibo pode ser baixado como um arquivo PDF, pronto para ser impresso.

## Estrutura do Projeto

A estrutura do projeto é composta por:

- **HTML**: O formulário e a exibição do recibo gerado.
- **CSS**: Estilo da página, incluindo o layout responsivo.
- **JavaScript**: Lógica para a geração e download do recibo em PDF usando a biblioteca `jsPDF`.

### Estrutura de Arquivos

```
/gerador-recibos
├── index.html            // Página principal com o formulário
├── css
│   └── styles.css       // Estilos da página
└── js
    └── script.js        // Lógica para geração do recibo e download em PDF
```

## Como Usar

1. **Preencha o Formulário**: Insira as informações do cliente, serviço prestado, valor pago e a data de pagamento no formulário.
2. **Clique em "Gerar Recibo"**: O recibo será gerado na própria página.
3. **Baixe o Recibo**: Após visualizar o recibo, clique no botão "Baixar Recibo" para fazer o download do recibo gerado em formato PDF.

## Tecnologias Utilizadas

- **HTML5**: Para estruturar o conteúdo da página.
- **CSS3**: Para estilizar a página de forma responsiva.
- **JavaScript**: Para manipulação do DOM e geração do PDF.
- **jsPDF**: Biblioteca para gerar o arquivo PDF.

## Exemplo de Uso

1. Acesse o formulário e preencha os dados.
2. O recibo gerado será exibido com os detalhes do cliente e serviço.
3. O arquivo PDF estará disponível para download com os detalhes do recibo.

---

Esse sistema é uma maneira simples e eficiente de emitir recibos para a Barbearia Santos, facilitando o processo de registro de pagamentos.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
