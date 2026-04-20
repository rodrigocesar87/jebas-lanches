const MENU_DATA = [
    {
        category: "Lanches",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Misto quente", desc: "Pão, queijo e presunto", price: 8 },
            { name: "X-Bauru", desc: "Pão, queijo, presunto, alface, tomate, batata palha e milho", price: 9 },
            { name: "X-Americano", desc: "Pão, queijo, presunto, ovo, alface, tomate, batata palha e milho", price: 10 },
            { name: "X-Burguer", desc: "Pão, queijo, presunto, carne e batata palha", price: 12 },
            { name: "Cachorro quente na chapa", desc: "Pão, queijo, presunto, salsicha, bacon, calabresa, batata palha e milho", price: 13 },
            { name: "X-Frango", desc: "Pão, queijo, presunto, frango, ovo, alface, tomate, batata palha e milho", price: 14 },
            { name: "X-Bagunça", desc: "Pão, queijo, presunto, carne, ovo, bacon, calabresa, banana, alface, tomate, catupiry ou cheddar, batata palha e milho", price: 18 },
            { name: "X-Calabresa", desc: "Pão, queijo, presunto, carne, calabresa, alface, tomate, batata palha e milho", price: 16 },
            { name: "X-Duplo", desc: "Pão, 2 queijos, 2 presuntos, 2 carnes, 2 ovos, batata palha e milho", price: 18 },
            { name: "X-Tudo", desc: "Pão, queijo, presunto, carne, ovo, bacon, calabresa, salsicha, banana, catupiry ou cheddar, frango, alface, tomate, batata palha e milho", price: 20 },
            { name: "X-Vegetariano", desc: "Pão, queijo, ovo, banana, alface, tomate, batata palha e milho", price: 12 },
            { name: "X-Salada", desc: "Pão, queijo, presunto, carne, ovo, alface, tomate, batata palha e milho", price: 14 },
            { name: "X-Bacon", desc: "Pão, queijo, presunto, carne, ovo, bacon, alface, tomate, batata palha e milho", price: 16 },
            { name: "X-Tropical", desc: "Pão, queijo, presunto, carne, banana, abacaxi, batata palha e milho", price: 14 }
        ]
    },
    {
        category: "Adicionais",
        image: "https://images.unsplash.com/photo-1585238341267-1cfec2046a55?q=80&w=800&auto=format&fit=crop",
        isInformative: true,
        items: [
            { name: "Carne", desc: "Adicional de carne bovina", price: 7 },
            { name: "Frango", desc: "Adicional de frango", price: 6 },
            { name: "Bacon", desc: "Adicional de bacon crocante", price: 6 },
            { name: "Calabresa", desc: "Adicional de calabresa", price: 6 },
            { name: "Salsicha", desc: "Adicional de salsicha", price: 3 },
            { name: "Ovo", desc: "Adicional de ovo", price: 3 },
            { name: "Queijo", desc: "Adicional de queijo", price: 3 },
            { name: "Presunto", desc: "Adicional de presunto", price: 3 },
            { name: "Banana", desc: "Adicional de banana", price: 3 },
            { name: "Catupiry", desc: "Adicional de catupiry", price: 3 },
            { name: "Pão", desc: "Adicional de pão", price: 3 }
        ]
    },
    {
        category: "Porção batata",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Porção P", desc: "Batata frita pequena", price: 10 },
            { name: "Porção M", desc: "Batata frita média", price: 15 },
            { name: "Porção G", desc: "Batata frita grande", price: 20 },
            { name: "Porção Especial", desc: "Batata frita com queijo e bacon", price: 25 }
        ]
    },
    {
        category: "Bebidas",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Suco Natural", desc: "Goiaba, Acerola, Maracujá ou Cupuaçu", price: 8 },
            { name: "Refri Lata", desc: "Lata 350ml", price: 5 },
            { name: "Refri 1 Litro", desc: "Garrafa 1L", price: 8 },
            { name: "Refri 2 Litros", desc: "Garrafa 2L", price: 10 }
        ]
    },
    {
        category: "Combos",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Combo 4 X-Salada", desc: "4 X-Salada + batata + refri", price: 70 },
            { name: "Combo 4 X-Tudo", desc: "4 X-Tudo + batata + refri", price: 90 },
            { name: "Combo 2 X-Salada", desc: "2 X-Salada + batata + refri", price: 35 },
            { name: "Combo 2 X-Tudo", desc: "2 X-Tudo + batata + refri", price: 50 },
            { name: "Combo 1 X-Salada", desc: "1 X-Salada + batata + refri", price: 20 },
            { name: "Combo 1 X-Tudo", desc: "1 X-Tudo + batata + refri", price: 30 }
        ]
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu();
    setupCartLogic();
    setupPaymentLogic();
    checkFirstVisit();
    document.getElementById('btn-help').onclick = openGuide;
});

function checkFirstVisit() {
    const visited = localStorage.getItem('jebas_visited');
    if (!visited) {
        setTimeout(openGuide, 1000);
    }
}

function openGuide() {
    document.getElementById('guide-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeGuide() {
    document.getElementById('guide-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    localStorage.setItem('jebas_visited', 'true');
}

function renderCategories() {
    const nav = document.getElementById('categories-nav');
    MENU_DATA.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = cat.category;
        btn.onclick = () => scrollToCategory(cat.category, btn);
        nav.appendChild(btn);
    });
}

function scrollToCategory(catId, btn) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const el = document.getElementById(`cat-${catId}`);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupPaymentLogic() {
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const changeContainer = document.getElementById('change-container');
    const cardContainer = document.getElementById('card-container');
    const pixContainer = document.getElementById('pix-container');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const method = radio.value;
            
            // Esconde todos inicialmente (usando a classe hidden)
            changeContainer.classList.add('hidden');
            cardContainer.classList.add('hidden');
            pixContainer.classList.add('hidden');

            if (method === 'cash') { // No HTML o valor é 'cash'
                changeContainer.classList.remove('hidden');
            } else if (method === 'card') {
                cardContainer.classList.remove('hidden');
            } else if (method === 'pix') {
                pixContainer.classList.remove('hidden');
                updatePixDetails();
            }
        });
    });
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Limpa antes de renderizar

    MENU_DATA.forEach(cat => {
        const section = document.createElement('section');
        section.id = `cat-${cat.category}`;
        section.className = 'category-section';

        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = cat.category;
        section.appendChild(title);

        cat.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            
            let controlsHtml = '';
            if (!cat.isInformative) {
                const count = cart.filter(idx => idx.name === item.name).length;
                controlsHtml = `
                    <div class="item-controls">
                        <button onclick="changeQty('${item.name}', -1, ${item.price})">-</button>
                        <input type="number" id="qty-${item.name}" value="${count}" min="0" readonly>
                        <button onclick="changeQty('${item.name}', 1, ${item.price})">+</button>
                    </div>
                `;
            } else {
                controlsHtml = `<span class="informative-price">Consultar valor</span>`;
            }

            card.innerHTML = `
                <div class="item-img">
                    <img src="${cat.image}" alt="${item.name}">
                </div>
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p class="description">${item.desc}</p>
                    <p class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                </div>
                ${controlsHtml}
            `;
            section.appendChild(card);
        });

        container.appendChild(section);
    });
}

function changeQty(name, delta, price) {
    if (delta > 0) {
        // Gera um ID único para cada unidade
        cart.push({
            id: Date.now() + Math.random(),
            name: name,
            price: price,
            addons: [],
            obs: "",
            expanded: false
        });
    } else {
        // Encontra o último item desse tipo e remove
        const index = cart.findLastIndex(idx => idx.name === name);
        if (index !== -1) {
            cart.splice(index, 1);
        }
    }

    // Atualiza o input no menu
    const input = document.getElementById(`qty-${name}`);
    if (input) {
        input.value = cart.filter(idx => idx.name === name).length;
    }

    renderComanda();
    calculateTotal();
}

function renderComanda() {
    const comandaSection = document.getElementById('comanda-section');
    const comandaItems = document.getElementById('comanda-items');

    if (cart.length === 0) {
        comandaSection.classList.add('hidden');
        return;
    }

    comandaSection.classList.remove('hidden');
    comandaItems.innerHTML = '';

    // Encontra a lista de adicionais disponíveis (apenas os itens, não a categoria inteira)
    const addonsCategory = MENU_DATA.find(c => c.category === "Adicionais");
    const availableAddons = addonsCategory ? addonsCategory.items : [];

    cart.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'comanda-item';
        
        // Calcula subtotal do item (Base + Adicionais)
        let addonsTotal = 0;
        item.addons.forEach(a => addonsTotal += a.price);
        let itemSubtotal = item.price + addonsTotal;

        // Mostra opcionais apenas para lanches
        const catOfItem = MENU_DATA.find(c => c.items.some(i => i.name === item.name));
        const showAddons = catOfItem && catOfItem.category === "Lanches";

        let addonsHtml = '';
        if (showAddons && availableAddons.length > 0) {
            addonsHtml = `
                <div style="margin: 10px 0;">
                    <button class="btn-toggle-addons" onclick="toggleExpand(${index})">
                        <i class="fas ${item.expanded ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>
                        ${item.expanded ? 'Recolher Adicionais' : 'Personalizar / Adicionais'}
                    </button>
                </div>
                <div class="addons-selection ${item.expanded ? '' : 'collapsed'}">
                    ${availableAddons.map(addon => `
                        <label class="addon-checkbox">
                            <input type="checkbox" onchange="toggleAddon(${index}, '${addon.name}', ${addon.price})" 
                                ${item.addons.some(a => a.name === addon.name) ? 'checked' : ''}>
                            ${addon.name} (+R$ ${addon.price.toFixed(2)})
                        </label>
                    `).join('')}
                </div>
            `;
        }

        itemCard.innerHTML = `
            <div class="comanda-item-header">
                <div>
                    <h3>#${index + 1} - ${item.name}</h3>
                    <div class="price-breakdown">
                        R$ ${item.price.toFixed(2).replace('.', ',')} 
                        ${addonsTotal > 0 ? `<span class="addons-plus">+ R$ ${addonsTotal.toFixed(2).replace('.', ',')} (Adicionais)</span>` : ''}
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span class="item-subtotal">R$ ${itemSubtotal.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-remove" onclick="removeItemFromComanda(${index})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            ${addonsHtml}
            <textarea class="comanda-obs" placeholder="Alguma observação para este item? (Ex: Sem cebola, trocar por cheddar...)" 
                oninput="updateItemObs(${index}, this.value)">${item.obs}</textarea>
        `;
        comandaItems.appendChild(itemCard);
    });
}

function toggleExpand(index) {
    cart[index].expanded = !cart[index].expanded;
    renderComanda();
}

function toggleAddon(index, addonName, addonPrice) {
    const item = cart[index];
    const addonIndex = item.addons.findIndex(a => a.name === addonName);
    
    if (addonIndex === -1) {
        item.addons.push({ name: addonName, price: addonPrice });
    } else {
        item.addons.splice(addonIndex, 1);
    }
    
    renderComanda(); 
    calculateTotal();
}

function updateItemObs(index, value) {
    cart[index].obs = value;
}

function removeItemFromComanda(index) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    
    // Sincroniza com o input do menu
    const input = document.getElementById(`qty-${itemName}`);
    if (input) {
        input.value = cart.filter(idx => idx.name === itemName).length;
    }
    
    renderComanda();
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        item.addons.forEach(addon => {
            total += addon.price;
        });
    });

    const formattedTotal = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('total-price').textContent = formattedTotal;

    // Mobile Bar
    const bar = document.getElementById('mobile-cart-bar');
    if (cart.length > 0) {
        bar.classList.remove('hidden');
        document.getElementById('mobile-cart-count').textContent = `${cart.length} ${cart.length === 1 ? 'item' : 'itens'}`;
        document.getElementById('mobile-cart-total').textContent = formattedTotal;
    } else {
        bar.classList.add('hidden');
    }
}

function setupCartLogic() {
    document.getElementById('btn-send').onclick = sendOrder;
}

function sendOrder() {
    const clientName = document.getElementById('client-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const deliveryObs = document.getElementById('observations').value.trim();
    const paymentRadio = document.querySelector('input[name="payment"]:checked');
    const paymentMethod = paymentRadio ? paymentRadio.value : 'cash';
    let paymentDetails = paymentMethod.toUpperCase();

    if (paymentMethod === 'cash') {
        const change = document.getElementById('change').value;
        paymentDetails = "DINHEIRO" + (change ? ` (Troco para R$ ${parseFloat(change).toFixed(2)})` : " (Sem troco)");
    } else if (paymentMethod === 'card') {
        const cardType = document.querySelector('input[name="card-type"]:checked').value;
        paymentDetails = `CARTÃO (${cardType})`;
    } else if (paymentMethod === 'pix') {
        paymentDetails = "PIX (Pago/A pagar)";
    }

    if (cart.length === 0) {
        alert("Ops! Seu carrinho está vazio.");
        return;
    }

    if (!clientName) { alert("Informe seu nome."); return; }
    if (!address) { alert("Informe o endereço."); return; }

    let message = "🛒 *NOVO PEDIDO - JÊBAS LANCHES*\n";
    message += "----------------------------------------\n";
    message += `*CLIENTE:* ${clientName}\n`;
    message += "----------------------------------------\n\n";
    
    let total = 0;
    cart.forEach((item, index) => {
        let itemTotal = item.price;
        message += `*#${index + 1} - ${item.name}* (R$ ${item.price.toFixed(2)})\n`;
        
        if (item.addons.length > 0) {
            message += `  _Adicionais:_ ${item.addons.map(a => {
                itemTotal += a.price;
                return `${a.name} (+R$ ${a.price})`;
            }).join(', ')}\n`;
        }
        
        if (item.obs) {
            message += `  _Obs:_ ${item.obs}\n`;
        }
        
        message += `  *Subtotal:* R$ ${itemTotal.toFixed(2).replace('.', ',')}\n\n`;
        total += itemTotal;
    });

    message += "----------------------------------------\n";
    message += `*TOTAL DO PEDIDO: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    message += "----------------------------------------\n\n";

    message += "*💳 PAGAMENTO:*\n";
    message += `- ${paymentDetails}\n`;
    
    message += "\n*📍 ENTREGA:*\n";
    message += `${address}\n`;
    if (deliveryObs) message += `_Obs Entrega:_ ${deliveryObs}\n`;

    message += "\n✅ _Pedido realizado via Menu Online_";

    const encodedText = encodeURIComponent(message);
    const phone = "5569993489864";
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
}

