document.addEventListener("DOMContentLoaded", function () {
    // Ouvinte de submit para gerar o recibo
    document.getElementById("receiptForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obter os dados do formulário
        const clientName = document.getElementById("clientName").value;
        const serviceName = document.getElementById("serviceName").value;
        const amount = parseFloat(document.getElementById("amount").value).toFixed(2);
        const paymentDate = document.getElementById("paymentDate").value;

        // Exibir o recibo gerado na tela
        document.getElementById("outputName").textContent = clientName;
        document.getElementById("outputService").textContent = serviceName;
        document.getElementById("outputAmount").textContent = `R$ ${amount}`;
        document.getElementById("outputDate").textContent = paymentDate;
        document.getElementById("receiptOutput").style.display = "block";

        // Salvar os dados do recibo para o PDF gerado
        window.receiptData = { clientName, serviceName, amount, paymentDate };
    });

    // Ouvinte para o botão de download do PDF
    document.getElementById("downloadBtn").addEventListener("click", function () {
        // Verificar se os dados estão disponíveis
        if (!window.receiptData) {
            alert("Por favor, preencha o formulário primeiro.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Configurações gerais
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // Fundo branco
        doc.setFillColor(255, 255, 255); // Branco
        doc.rect(0, 0, pageWidth, pageHeight, "F");

        // Título
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0); // Preto
        const title = "RECIBO";
        const shopName = "Barbearia Santos";
        const titleWidth = doc.getTextWidth(title);
        const shopNameWidth = doc.getTextWidth(shopName);
        doc.text(title, (pageWidth - titleWidth) / 2, 20);
        doc.setFontSize(14);
        doc.text(shopName, (pageWidth - shopNameWidth) / 2, 30);

        // Dados da Barbearia
        doc.setFontSize(12);
        doc.text("CNPJ: 45.678.901/0001-23", 10, 50);
        doc.text("Endereço: Rua dos Barbeiros, 45, Centro, Cidade", 10, 60);
        doc.text("Telefone: (11) 9876-5432", 10, 70);

        // Caixa branca com borda azul para dados do cliente
        doc.setFillColor(255, 255, 255); // Branco (fundo da caixa)
        doc.setDrawColor(0, 0, 255); // Azul (borda da caixa) - Usando setDrawColor no lugar de setStrokeColor
        doc.setLineWidth(2); // Largura da borda
        doc.rect(10, 85, pageWidth - 20, 70, "FD"); // "FD" para preencher e desenhar a borda
        doc.setTextColor(0, 0, 0); // Preto (texto)

        doc.text("DADOS DO CLIENTE", 15, 95);
        doc.text(`Nome do Cliente: ${window.receiptData.clientName}`, 15, 110);
        doc.text(`Serviço: ${window.receiptData.serviceName}`, 15, 120);
        doc.text(`Valor Pago: R$ ${window.receiptData.amount}`, 15, 130);
        doc.text(`Data de Pagamento: ${window.receiptData.paymentDate}`, 15, 140);

        // Assinaturas
        doc.setTextColor(0, 0, 0); // Preto
        doc.text("_________________________________", 15, 170);
        doc.text("Assinatura do Emitente", 15, 180);
        doc.text("_________________________________", pageWidth - 110, 170);
        doc.text("Assinatura do Cliente", pageWidth - 110, 180);

        // Baixar o PDF
        doc.save(`recibo_${window.receiptData.clientName}.pdf`);
    });
});
