// Jebas Print - Content Script v1.4 (Otimizado para WhatsApp Web 2025/2026 - Lexical)
console.log('!!! JEBAS PRINT: MONITORANDO MENSAGENS NO WHATSAPP (LEXICAL MODE) !!!');

const ORDER_KEYWORDS = ["PEDIDO", "JÊBAS", "RESUMO", "BURGUE", "LANCHE", "TOTAL"];

function injectPrintButton(messageNode) {
    if (messageNode.querySelector('.jebas-print-btn')) return;

    // Estratégia 1: capturar via innerText do container da mensagem
    // O innerText preserva as quebras de linha naturais da estrutura do DOM
    let textContent = "";

    // Tenta primeiro pegar o span copyable-text que tem o texto completo e limpo
    const copyableText = messageNode.querySelector('[data-testid="balloon-text-content"], [class*="copyable-text"]');
    if (copyableText) {
        textContent = copyableText.innerText || "";
    }

    // Fallback: pegar todos os spans Lexical respeitando linhas
    if (!textContent || textContent.length < 10) {
        const paragraphs = messageNode.querySelectorAll('div[role="row"] > *, span[data-lexical-text]');
        if (paragraphs.length > 0) {
            // Itera pelos elementos pai dos spans para preservar quebras de linha
            const lineElements = messageNode.querySelectorAll('p, div[class*="message"], span[class*="message"]');
            if (lineElements.length > 0) {
                textContent = Array.from(lineElements).map(el => el.innerText).join("\n");
            } else {
                // Último fallback: usa innerText puro do nó
                textContent = messageNode.innerText || "";
            }
        } else {
            textContent = messageNode.innerText || "";
        }
    }

    // Limpar artefatos comuns do WhatsApp Web
    textContent = textContent.trim();

    const isOrder = ORDER_KEYWORDS.some(keyword => textContent.toUpperCase().includes(keyword.toUpperCase()));

    if (isOrder && textContent.length > 20) {
        console.log('%c Jebas Print: PEDIDO DETECTADO! Construindo cupom... ', 'color: #f39c12; font-weight: bold;');
        console.log('Texto capturado:', textContent);
        
        const btn = document.createElement('button');
        btn.className = 'jebas-print-btn';
        btn.innerHTML = '🖨️ Imprimir Cupom';
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            prepareTechnicalPrint(textContent);
        });

        const bubble = messageNode.querySelector('[data-testid="msg-bubble"]') || messageNode;
        bubble.appendChild(btn);
    }
}

// Formatação para impressão térmica
function prepareTechnicalPrint(text) {
    const printWindow = window.open('', '_blank', 'width=450,height=700');

    // Converte marcadores do WhatsApp para HTML
    let formattedText = text
        // Remove emojis problemáticos mas mantém o texto
        .replace(/[\u{1F300}-\u{1FFFF}]/gu, '')
        // Negrito *texto*
        .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
        // Itálico _texto_
        .replace(/_(.*?)_/g, '<em>$1</em>')
        // Quebras de linha
        .replace(/\n/g, '<br>');

    printWindow.document.write(`
        <html>
        <head>
            <title>Jebas Print - Cupom</title>
            <link rel="stylesheet" href="${chrome.runtime.getURL('thermal_print.css')}">
        </head>
        <body onload="window.print(); window.close();">
            <div class="ticket">
                <div class="header">
                    <h2>JÊBAS BURGUER</h2>
                    <p>PEDIDO RECEBIDO VIA WHATSAPP</p>
                    <p>${new Date().toLocaleString('pt-BR')}</p>
                </div>
                <div class="divider">--------------------------------</div>
                <div class="content">${formattedText}</div>
                <div class="divider">--------------------------------</div>
                <div class="footer"><p>Gerado por Jebas Print Extension</p></div>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// Observer focado no painel de conversa ativo
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType === 1) {
                // Seletores atualizados para 2025
                const containers = node.querySelectorAll ? node.querySelectorAll('[data-testid="msg-container"], [role="row"], .message-in') : [];
                containers.forEach(injectPrintButton);
                
                if (node.getAttribute && (node.getAttribute('data-testid') === 'msg-container' || node.getAttribute('role') === 'row')) {
                    injectPrintButton(node);
                }
            }
        }
    }
});

function init() {
    // Tenta observar o painel de mensagens específico para ser mais performático
    const chatPanel = document.querySelector('[data-testid="conversation-panel-messages"]');
    const target = chatPanel || document.body;
    
    observer.observe(target, { childList: true, subtree: true });
    
    // Varredura inicial
    document.querySelectorAll('[data-testid="msg-container"]').forEach(injectPrintButton);
}

// Tenta iniciar a cada 3 segundos até encontrar o chat
const checkExist = setInterval(() => {
    if (document.querySelector('[data-testid="msg-container"]')) {
        console.log('Jebas Print: Chat detectado, iniciando rastreamento...');
        init();
        clearInterval(checkExist);
    }
}, 3000);
