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
    renderCategories();
    renderMenu();
    setupCartLogic();
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

function renderCategories() {
    const nav = document.getElementById('category-nav-premium');
    nav.innerHTML = '';
    MENU_DATA.forEach(cat => {
        const btn = document.createElement('button');
        btn.innerHTML = getCategoryIcon(cat.category) + ' ' + cat.category;
        btn.onclick = () => scrollToCategory(cat.category.toLowerCase());
        nav.appendChild(btn);
    });
}

function getCategoryIcon(cat) {
    const icons = {
        "Lanches": "🍔",
        "Porção batata": "🍟",
        "Bebidas": "🥤",
        "Combos": "📦",
        "Adicionais": "➕"
    };
    return icons[cat] || "🍴";
}

function scrollToCategory(catId) {
    const sections = document.querySelectorAll('.section-title');
    sections.forEach(s => {
        if (s.textContent.toLowerCase().includes(catId)) {
            window.scrollTo({
                top: s.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    });
}

function renderMenu(filter = '') {
    const leftCol = document.getElementById('left-column');
    const rightCol = document.getElementById('right-column');
    
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';

    MENU_DATA.forEach(cat => {
        const filteredItems = cat.items.filter(item => 
            item.name.toLowerCase().includes(filter.toLowerCase()) || 
            item.desc.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredItems.length === 0) return;

        const section = document.createElement('div');
        section.className = 'menu-section-premium';
        section.innerHTML = `<h2 class="section-title fast-food-font">${cat.category}</h2>`;

        const grid = document.createElement('div');
        grid.className = 'menu-grid-v2';

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.onclick = () => openProductModal(item, cat);
            
            // Logica v3.0 para imagem: se item tem imagem usa ela, senão usa a da categoria
            const itemImage = item.image || cat.image;

            card.innerHTML = `
                <div class="item-img-premium">
                    <img src="${itemImage}" alt="${item.name}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="item-content-premium">
                    <div class="item-header">
                        <h3>${item.name}</h3>
                    </div>
                    <p class="item-desc">${item.desc}</p>
                    <span class="item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                </div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);

        if (cat.column === 'left') {
            leftCol.appendChild(section);
        } else {
            rightCol.appendChild(section);
        }
    });

    // Animação de entrada
    setTimeout(() => {
        document.querySelectorAll('.menu-item').forEach((item, index) => {
            setTimeout(() => item.classList.add('visible'), index * 30);
        });
    }, 50);
}

// Lógica de Busca Premium
document.getElementById('menu-search').addEventListener('input', (e) => {
    renderMenu(e.target.value);
});

// Lógica do Modal Premium
let currentModalItem = null;
let currentModalCategory = null;
let modalQty = 1;

function openProductModal(item, cat) {
    currentModalItem = item;
    currentModalCategory = cat;
    modalQty = 1;
    updateModalDisplay();
    
    document.getElementById('product-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateModalDisplay() {
    const body = document.getElementById('modal-body');
    const addonsCategory = MENU_DATA.find(c => c.category === "Adicionais");
    const availableAddons = addonsCategory ? addonsCategory.items : [];
    const isBurger = currentModalCategory.category === "Lanches";

    body.innerHTML = `
        <img src="${currentModalCategory.image}" class="modal-header-img" alt="${currentModalItem.name}">
        <div class="modal-info">
            <h2 class="fast-food-font" style="font-size: 2.5rem; color: var(--primary);">${currentModalItem.name}</h2>
            <p class="description" style="font-size: 1.1rem; opacity: 0.8; margin-bottom: 25px;">${currentModalItem.desc}</p>
            
            ${isBurger ? `
                <div class="modal-addons-premium">
                    <h3 class="fast-food-font" style="font-size: 1.5rem; margin-bottom: 15px; border-bottom: 2px solid var(--primary); display: inline-block;">Adicionais Premium</h3>
                    <div class="addons-selection-premium">
                        ${availableAddons.map(addon => `
                            <label class="addon-checkbox-premium">
                                <input type="checkbox" name="modal-addon" data-name="${addon.name}" data-price="${addon.price}">
                                <span>${addon.name} <small>(+R$ ${addon.price.toFixed(2)})</small></span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div style="margin-top: 30px;">
                <h3 class="fast-food-font" style="font-size: 1.5rem; margin-bottom: 10px;">Toque Especial (Obs)</h3>
                <textarea id="modal-obs" class="comanda-obs-premium" placeholder="Ex: Sem cebola, trocar por cheddar..."></textarea>
            </div>
        </div>
    `;

    document.getElementById('modal-qty').textContent = modalQty;
}

function adjustModalQty(delta) {
    modalQty = Math.max(1, modalQty + delta);
    document.getElementById('modal-qty').textContent = modalQty;
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.querySelector('.close-modal').onclick = closeModal;

document.getElementById('add-to-cart-modal').onclick = () => {
    const selectedAddons = [];
    document.querySelectorAll('input[name="modal-addon"]:checked').forEach(input => {
        selectedAddons.push({
            name: input.dataset.name,
            price: parseFloat(input.dataset.price)
        });
    });

    const obs = document.getElementById('modal-obs').value;

    for (let i = 0; i < modalQty; i++) {
        cart.push({
            id: Date.now() + Math.random(),
            name: currentModalItem.name,
            price: currentModalItem.price,
            addons: [...selectedAddons],
            obs: obs
        });
    }

    closeModal();
    renderComanda();
    calculateTotal();
};

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

    cart.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'comanda-item-premium';
        itemCard.style.padding = '15px';
        itemCard.style.borderBottom = '1px dashed #eee';
        itemCard.style.marginBottom = '10px';
        
        let addonsTotal = 0;
        item.addons.forEach(a => addonsTotal += a.price);
        let itemSubtotal = item.price + addonsTotal;

        itemCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="flex: 1;">
                    <h4 style="margin: 0; color: #1a1a1a;">${item.name}</h4>
                    <div style="font-size: 0.85rem; color: #666; margin-top: 4px;">
                        R$ ${item.price.toFixed(2).replace('.', ',')} 
                        ${item.addons.length > 0 ? `<br><small style="color: var(--primary);">+ ${item.addons.map(a => a.name).join(', ')}</small>` : ''}
                        ${item.obs ? `<br><small style="font-style: italic;">Obs: ${item.obs}</small>` : ''}
                    </div>
                </div>
                <div style="text-align: right; margin-left: 10px;">
                    <div style="font-weight: 700; color: var(--primary);">R$ ${itemSubtotal.toFixed(2).replace('.', ',')}</div>
                    <button onclick="removeItemFromComanda(${index})" style="background: none; border: none; color: #ff4d4d; font-size: 0.75rem; cursor: pointer; padding: 5px 0; text-transform: uppercase; font-weight: 700;">Remover</button>
                </div>
            </div>
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

function copyPixCodePremium() {
    const pixInput = document.getElementById('pix-copy-paste-premium');
    const btn = document.getElementById('btn-copy-pix-premium');
    
    pixInput.value = "jebas.burguer@contato.com"; // Simplificado para exemplo, ideal seria chave real
    pixInput.select();
    document.execCommand('copy');
    
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> COPIADO!';
    btn.style.background = '#28a745';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = 'var(--primary)';
    }, 2000);
}

function calculateTotal() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price;
        item.addons.forEach(a => subtotal += a.price);
    });
    
    const totalElement = document.getElementById('total-price-premium');
    if (totalElement) totalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    
    const mobileTotal = document.getElementById('mobile-cart-total-premium');
    if (mobileTotal) mobileTotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    
    const mobileCount = document.getElementById('mobile-cart-count-premium');
    if (mobileCount) mobileCount.textContent = `${cart.length} ${cart.length === 1 ? 'item' : 'itens'}`;
    
    const mobileBar = document.getElementById('mobile-cart-bar-premium');
    if (mobileBar) {
        if (cart.length > 0) mobileBar.classList.remove('hidden');
        else mobileBar.classList.add('hidden');
    }

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
