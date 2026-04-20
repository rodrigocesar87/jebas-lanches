const MENU_DATA = [
    {
        category: "Lanches",
        column: "left",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Misto quente", desc: "Pão, queijo e presunto.", price: 8.00 },
            { name: "X-Bauru", desc: "Pão, queijo, presunto, alface, tomate, batata palha e milho.", price: 9.00 },
            { name: "X-Americano", desc: "Pão, queijo, presunto, ovo, alface, tomate, batata palha e milho.", price: 10.00 },
            { name: "X-Burguer", desc: "Pão, queijo, presunto, carne e batata palha.", price: 12.00 },
            { name: "Cachorro quente na chapa", desc: "Pão, queijo, presunto, salsicha, bacon, calabresa, batata palha e milho.", price: 13.00 },
            { name: "X-Frango", desc: "Pão, queijo, presunto, frango, ovo, alface, tomate, batata palha e milho.", price: 14.00 },
            { name: "X-Bagunça", desc: "Pão, queijo, presunto, carne, ovo, bacon, calabresa, banana, alface, tomate, catupiry ou cheddar, batata palha e milho.", price: 18.00 },
            { name: "X-Calabresa", desc: "Pão, queijo, presunto, carne, calabresa, alface, tomate, batata palha e milho.", price: 16.00 },
            { name: "X-Duplo", desc: "Pão, 2 queijos, 2 presuntos, 2 carnes, 2 ovos, batata palha e milho.", price: 18.00 },
            { name: "X-Tudo", desc: "Pão, queijo, presunto, carne, ovo, bacon, calabresa, salsicha, banana, catupiry ou cheddar, frango, alface, tomate, batata palha e milho.", price: 20.00 },
            { name: "X-Vegetariano", desc: "Pão, queijo, ovo, banana, alface, tomate, batata palha e milho.", price: 12.00 },
            { name: "X-Salada", desc: "Pão, queijo, presunto, carne, ovo, alface, tomate, batata palha e milho.", price: 14.00 },
            { name: "X-Bacon", desc: "Pão, queijo, presunto, carne, ovo, bacon, alface, tomate, batata palha e milho.", price: 16.00 },
            { name: "X-Tropical", desc: "Pão, queijo, presunto, carne, banana, abacaxi, batata palha e milho.", price: 20.00 }
        ]
    },
    {
        category: "Adicionais",
        column: "right",
        isInformative: true,
        image: "https://images.unsplash.com/photo-1585238341267-1cfec2046a55?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Carne", desc: "Adicional de carne bovina.", price: 7.00 },
            { name: "Frango", desc: "Adicional de frango.", price: 6.00 },
            { name: "Bacon", desc: "Adicional de bacon crocante.", price: 6.00 },
            { name: "Calabresa", desc: "Adicional de calabresa.", price: 6.00 },
            { name: "Salsicha", desc: "Adicional de salsicha.", price: 3.00 },
            { name: "Ovo", desc: "Adicional de ovo.", price: 3.00 },
            { name: "Queijo", desc: "Adicional de queijo.", price: 3.00 },
            { name: "Presunto", desc: "Adicional de presunto.", price: 3.00 },
            { name: "Banana", desc: "Adicional de banana.", price: 3.00 },
            { name: "Catupiry", desc: "Adicional de catupiry.", price: 3.00 },
            { name: "Pão", desc: "Adicional de pão.", price: 3.00 }
        ]
    },
    {
        category: "Porção batata",
        column: "right",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Porção P", desc: "Batata frita pequena.", price: 10.00 },
            { name: "Porção M", desc: "Batata frita média.", price: 15.00 },
            { name: "Porção G", desc: "Batata frita grande.", price: 20.00 },
            { name: "Porção Especial", desc: "Batata frita com queijo e bacon.", price: 25.00 }
        ]
    },
    {
        category: "Bebidas",
        column: "left",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Suco Natural", desc: "Goiaba, Acerola, Maracujá ou Cupuaçu.", price: 8.00 },
            { name: "Refri Lata", desc: "Lata 350ml.", price: 5.00 },
            { name: "Refri 1 Litro", desc: "Garrafa 1L.", price: 8.00 },
            { name: "Refri 2 Litros", desc: "Garrafa 2L.", price: 10.00 }
        ]
    },
    {
        category: "Combos",
        column: "right",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
        items: [
            { name: "Combo 4 X-Salada", desc: "4 X-Salada + batata + refri.", price: 70.00 },
            { name: "Combo 4 X-Tudo", desc: "4 X-Tudo + batata + refri.", price: 90.00 },
            { name: "Combo 2 X-Salada", desc: "2 X-Salada + batata + refri.", price: 35.00 },
            { name: "Combo 2 X-Tudo", desc: "2 X-Tudo + batata + refri.", price: 50.00 },
            { name: "Combo 1 X-Salada", desc: "1 X-Salada + batata + refri.", price: 20.00 },
            { name: "Combo 1 X-Tudo", desc: "1 X-Tudo + batata + refri.", price: 30.00 }
        ]
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderMenu();
    setupSearch();
    setupFilters();
    setupPaymentLogic();
    checkFirstVisitPremium();
    document.getElementById('btn-help-premium').onclick = openGuidePremium;
});

function checkFirstVisitPremium() {
    const visited = localStorage.getItem('jebas_premium_visited');
    if (!visited) {
        setTimeout(openGuidePremium, 1000);
    }
}

function openGuidePremium() {
    document.getElementById('guide-modal-premium').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeGuidePremium() {
    document.getElementById('guide-modal-premium').classList.add('hidden');
    document.body.style.overflow = 'auto';
    localStorage.setItem('jebas_premium_visited', 'true');
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    document.getElementById('theme-toggle').onclick = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    };
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

function renderMenu(filterTerm = "", categoryFilter = "All") {
    const leftCol = document.getElementById('left-column');
    const rightCol = document.getElementById('right-column');
    
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';

    MENU_DATA.forEach(cat => {
        if (categoryFilter !== "All" && cat.category !== categoryFilter) return;

        const filteredItems = cat.items.filter(item => 
            item.name.toLowerCase().includes(filterTerm.toLowerCase()) || 
            item.desc.toLowerCase().includes(filterTerm.toLowerCase())
        );

        if (filteredItems.length === 0) return;

        const section = document.createElement('div');
        section.className = 'menu-section';
        section.innerHTML = `<h2 class="section-title fast-food-font">${cat.category}</h2>`;

        filteredItems.forEach(item => {
            const count = cart.filter(i => i.name === item.name).length;
            const card = document.createElement('div');
            card.className = 'menu-item';
            
            let controlsHtml = '';
            if (!cat.isInformative) {
                controlsHtml = `
                    <div class="item-controls-premium">
                        <button onclick="changeQty('${item.name}', -1, ${item.price})">-</button>
                        <input type="number" id="qty-${item.name}" value="${count}" min="0" readonly>
                        <button onclick="changeQty('${item.name}', 1, ${item.price})">+</button>
                    </div>
                `;
            } else {
                controlsHtml = `<span class="informative-note">Consultar na Comanda</span>`;
            }

            card.innerHTML = `
                <div class="item-img-premium">
                    <img src="${cat.image}" alt="${item.name}">
                </div>
                <div class="item-content-premium">
                    <div class="item-header">
                        <h3>${item.name}</h3>
                        <span class="item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <p class="item-desc">${item.desc}</p>
                    <div class="item-footer">
                        ${controlsHtml}
                    </div>
                </div>
            `;
            section.appendChild(card);
        });

        if (cat.column === 'left') {
            leftCol.appendChild(section);
        } else {
            rightCol.appendChild(section);
        }
    });

    setTimeout(() => {
        document.querySelectorAll('.menu-item').forEach((item, index) => {
            setTimeout(() => item.classList.add('visible'), index * 30);
        });
    }, 50);
}

function changeQty(name, delta, price) {
    if (delta > 0) {
        cart.push({
            id: Date.now() + Math.random(),
            name: name,
            price: price,
            addons: [],
            obs: "",
            expanded: false
        });
    } else {
        const index = cart.findLastIndex(i => i.name === name);
        if (index !== -1) cart.splice(index, 1);
    }
    
    // Atualiza input
    const input = document.getElementById(`qty-${name}`);
    if (input) input.value = cart.filter(i => i.name === name).length;
    
    renderComanda();
    calculateTotal();
}

function renderComanda() {
    const comandaSection = document.getElementById('comanda-section-premium');
    const comandaItems = document.getElementById('comanda-items-premium');

    if (cart.length === 0) {
        comandaSection.classList.add('hidden');
        return;
    }

    comandaSection.classList.remove('hidden');
    comandaItems.innerHTML = '';

    const addonsCategory = MENU_DATA.find(c => c.category === "Adicionais");
    const availableAddons = addonsCategory ? addonsCategory.items : [];

    cart.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'comanda-item-premium';
        
        // Calcula subtotal do item
        let addonsTotal = 0;
        item.addons.forEach(a => addonsTotal += a.price);
        let itemSubtotal = item.price + addonsTotal;

        const catOfItem = MENU_DATA.find(c => c.items.some(i => i.name === item.name));
        const showAddons = catOfItem && catOfItem.category === "Lanches";

        let addonsHtml = '';
        if (showAddons && availableAddons.length > 0) {
            addonsHtml = `
                <div style="margin: 10px 0;">
                    <button class="btn-toggle-premium" onclick="toggleExpand(${index})">
                        <i class="fas ${item.expanded ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>
                        ${item.expanded ? 'Recolher Adicionais' : 'Personalizar / Adicionais'}
                    </button>
                </div>
                <div class="addons-selection-premium ${item.expanded ? '' : 'collapsed'}">
                    ${availableAddons.map(addon => `
                        <label class="addon-checkbox-premium">
                            <input type="checkbox" onchange="toggleAddon(${index}, '${addon.name}', ${addon.price})" 
                                ${item.addons.some(a => a.name === addon.name) ? 'checked' : ''}>
                            ${addon.name} (+R$ ${addon.price.toFixed(2)})
                        </label>
                    `).join('')}
                </div>
            `;
        }

        itemCard.innerHTML = `
            <div class="comanda-item-header-premium">
                <div>
                    <h3>#${index + 1} - ${item.name}</h3>
                    <div class="price-breakdown-premium">
                        R$ ${item.price.toFixed(2).replace('.', ',')} 
                        ${addonsTotal > 0 ? `<span class="addons-plus-premium">+ R$ ${addonsTotal.toFixed(2).replace('.', ',')} (Adicionais)</span>` : ''}
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span class="item-subtotal-premium">R$ ${itemSubtotal.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-remove-premium" onclick="removeItemFromComanda(${index})">Remover</button>
                </div>
            </div>
            ${addonsHtml}
            <textarea class="comanda-obs-premium" placeholder="Obs: Sem cebola, trocar queijo..." 
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
    renderComanda(); // Re-render para atualizar subtotal do item
    calculateTotal();
}

function updateItemObs(index, value) {
    cart[index].obs = value;
}

function removeItemFromComanda(index) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    
    const input = document.getElementById(`qty-${itemName}`);
    if (input) input.value = cart.filter(i => i.name === itemName).length;
    
    renderComanda();
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        item.addons.forEach(a => total += a.price);
    });

    const totalEl = document.getElementById('total-price-premium');
    if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    const btnSend = document.getElementById('btn-send-premium');
    if (cart.length > 0) {
        btnSend.innerHTML = `<i class="fab fa-whatsapp"></i> Finalizar Pedido (${cart.length})`;
        btnSend.classList.add('pulse');
    } else {
        btnSend.innerHTML = `<i class="fab fa-whatsapp"></i> Finalizar Pedido`;
        btnSend.classList.remove('pulse');
    }

    // Atualiza Barra Mobile Premium
    const mobileBar = document.getElementById('mobile-cart-bar-premium');
    const mobileCount = document.getElementById('mobile-cart-count-premium');
    const mobileTotal = document.getElementById('mobile-cart-total-premium');

    if (cart.length > 0) {
        mobileBar.classList.remove('hidden');
        mobileCount.textContent = `${cart.length} ${cart.length === 1 ? 'item' : 'itens'}`;
        mobileTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    } else {
    return total;
}

function copyPixCodePremium() {
    const copyText = document.getElementById('pix-copy-paste-premium');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    const btn = document.getElementById('btn-copy-pix-premium');
    const originalText = btn.innerText;
    btn.innerText = "COPIADO!";
    
    setTimeout(() => {
        btn.innerText = originalText;
    }, 2000);
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.oninput = (e) => {
        const activeCat = document.querySelector('.category-pill.active').textContent;
        renderMenu(e.target.value, activeCat);
    };
}

function setupFilters() {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        pill.onclick = () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const term = document.getElementById('search-input').value;
            renderMenu(term, pill.textContent);
        };
    });
}

function setupPaymentLogic() {
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const changeContainer = document.getElementById('change-group-premium'); // No HTML premium o ID é change-group-premium
    const cardContainer = document.getElementById('card-container-premium');
    const pixContainer = document.getElementById('pix-container-premium');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const method = radio.value;
            
            changeContainer.classList.add('hidden');
            cardContainer.classList.add('hidden');
            pixContainer.classList.add('hidden');

            if (method === 'cash') {
                changeContainer.classList.remove('hidden');
            } else if (method === 'card') {
                cardContainer.classList.remove('hidden');
            } else if (method === 'pix') {
                pixContainer.classList.remove('hidden');
                updatePixDetailsPremium();
            }
        });
    });
    
    // Trigger inicial se já houver algo selecionado
    const selected = document.querySelector('input[name="payment"]:checked');
    if (selected && selected.value === 'pix') updatePixDetailsPremium();
}

function sendOrder() {
    const name = document.getElementById('client-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const deliveryObs = document.getElementById('observations').value.trim();
    const paymentRadio = document.querySelector('input[name="payment"]:checked');
    const paymentMethod = paymentRadio ? paymentRadio.value : 'pix';
    let paymentDetails = paymentMethod.toUpperCase();

    if (paymentMethod === 'cash') {
        const change = document.getElementById('change-amount-premium').value;
        paymentDetails = "DINHEIRO" + (change ? ` (Troco para R$ ${change})` : " (Sem troco)");
    } else if (paymentMethod === 'card') {
        const cardType = document.querySelector('input[name="card-type-premium"]:checked').value;
        paymentDetails = `CARTÃO (${cardType})`;
    } else if (paymentMethod === 'pix') {
        paymentDetails = "PIX (Pago/A pagar)";
    }

    if (cart.length === 0) {
        alert("Carrinho vazio!");
        return;
    }

    if (!name || !address) {
        alert("Preencha nome e endereço!");
        return;
    }

    let message = "🛒 *NOVO PEDIDO PREMIUM - JÊBAS BURGUER*\n";
    message += "----------------------------------------\n";
    message += `*CLIENTE:* ${name}\n`;
    message += "----------------------------------------\n\n";
    
    let total = 0;
    cart.forEach((item, index) => {
        let itemTotal = item.price;
        message += `*#${index + 1} - ${item.name}* (R$ ${item.price.toFixed(2)})\n`;
        if (item.addons.length > 0) {
            message += `  _Extras:_ ${item.addons.map(a => {
                itemTotal += a.price;
                return `${a.name}`;
            }).join(', ')}\n`;
        }
        if (item.obs) message += `  _Obs:_ ${item.obs}\n`;
        message += `  *Subtotal:* R$ ${itemTotal.toFixed(2).replace('.', ',')}\n\n`;
        total += itemTotal;
    });

    message += "----------------------------------------\n";
    message += `*TOTAL FINAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    message += "----------------------------------------\n\n";

    message += "*💳 PAGAMENTO:*\n";
    message += `- ${paymentDetails}\n`;
    
    message += `\n*📍 ENTREGA:* ${address}\n`;
    if (deliveryObs) message += `_Obs Entrega:_ ${deliveryObs}\n`;

    const phone = "5569993489864";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}
