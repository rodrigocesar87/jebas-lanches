const MENU_DATA = [
    {
        category: "Lanches",
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
            { name: "X-Tropical", desc: "Pão, queijo, presunto, carne, banana, abacaxi, batata palha e milho", price: 20 }
        ]
    },
    {
        category: "Adicionais",
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
        items: [
            { name: "Porção P", desc: "Batata frita pequena", price: 10 },
            { name: "Porção M", desc: "Batata frita média", price: 15 },
            { name: "Porção G", desc: "Batata frita grande", price: 20 },
            { name: "Porção Especial", desc: "Batata frita com queijo e bacon", price: 25 }
        ]
    },
    {
        category: "Bebidas - Sucos",
        items: [
            { name: "Suco de Goiaba", desc: "Natural 400ml", price: 8 },
            { name: "Suco de Acerola", desc: "Natural 400ml", price: 8 },
            { name: "Suco de Maracujá", desc: "Natural 400ml", price: 8 },
            { name: "Suco de Cupuaçu", desc: "Natural 400ml", price: 8 }
        ]
    },
    {
        category: "Bebidas - Refrigerantes",
        items: [
            { name: "Refri Lata", desc: "Lata 350ml", price: 5 },
            { name: "Refri 1 Litro", desc: "Garrafa 1L", price: 8 },
            { name: "Refri 2 Litros", desc: "Garrafa 2L", price: 10 }
        ]
    },
    {
        category: "Combos",
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

let cart = {};

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu();
    setupCartLogic();
});

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

function renderMenu() {
    const container = document.getElementById('menu-container');
    MENU_DATA.forEach(cat => {
        const section = document.createElement('section');
        section.id = `cat-${cat.category}`;
        section.className = 'category-section';
        
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = cat.category;
        section.appendChild(title);

        cat.items.forEach(item => {
            const itemId = item.name.replace(/\s+/g, '-').toLowerCase();
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.innerHTML = `
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p class="description">${item.desc}</p>
                    <p class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="item-controls">
                    <button onclick="changeQty('${item.name}', -1, ${item.price})">-</button>
                    <input type="number" id="qty-${item.name}" value="0" min="0" onchange="updateQtyManually('${item.name}', this.value, ${item.price})">
                    <button onclick="changeQty('${item.name}', 1, ${item.price})">+</button>
                </div>
            `;
            section.appendChild(card);
        });
        
        container.appendChild(section);
    });
}

function changeQty(name, delta, price) {
    const input = document.getElementById(`qty-${name}`);
    let val = parseInt(input.value) + delta;
    if (val < 0) val = 0;
    input.value = val;
    updateCart(name, val, price);
}

function updateQtyManually(name, value, price) {
    let val = parseInt(value);
    if (isNaN(val) || val < 0) val = 0;
    document.getElementById(`qty-${name}`).value = val;
    updateCart(name, val, price);
}

function updateCart(name, qty, price) {
    if (qty > 0) {
        cart[name] = { qty, price };
    } else {
        delete cart[name];
    }
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    let count = 0;
    for (let name in cart) {
        total += cart[name].qty * cart[name].price;
        count += cart[name].qty;
    }

    document.getElementById('total-price').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Update mobile bar
    const bar = document.getElementById('mobile-cart-bar');
    if (count > 0) {
        bar.classList.remove('hidden');
        document.getElementById('mobile-cart-count').textContent = `${count} ${count === 1 ? 'item' : 'itens'}`;
        document.getElementById('mobile-cart-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    } else {
        bar.classList.add('hidden');
    }
}

function setupCartLogic() {
    document.getElementById('btn-send').onclick = sendOrder;
}

function sendOrder() {
    const name = document.getElementById('client-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const observations = document.getElementById('observations').value.trim();

    if (Object.keys(cart).length === 0) {
        alert("Ops! Seu carrinho está vazio. Selecione pelo menos um item.");
        return;
    }

    if (!name) {
        alert("Por favor, informe seu nome.");
        document.getElementById('client-name').focus();
        return;
    }

    if (!address) {
        alert("Por favor, informe o endereço de entrega.");
        document.getElementById('address').focus();
        return;
    }

    let total = 0;
    let itemsText = "";
    
    // Formatting for production (receipt style)
    itemsText += "🛒 *NOVO PEDIDO - JÊBAS LANCHES*\n";
    itemsText += "----------------------------------------\n";
    itemsText += `*CLIENTE:* ${name}\n`;
    itemsText += "----------------------------------------\n";
    itemsText += "*ITENS:*\n";
        const item = cart[name];
        const subtotal = item.qty * item.price;
        total += subtotal;
        itemsText += `*${item.qty}x* ${name.padEnd(20)} R$ ${subtotal.toFixed(2)}\n`;
    }
    
    itemsText += "----------------------------------------\n";
    itemsText += `*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    itemsText += "----------------------------------------\n\n";
    
    itemsText += "*📍 ENTREGA:*\n";
    itemsText += `${address}\n\n`;
    
    if (observations) {
        itemsText += "*📝 OBSERVAÇÕES:*\n";
        itemsText += `${observations}\n\n`;
    }
    
    itemsText += "----------------------------------------\n";
    itemsText += "✅ _Pedido realizado via Menu Online_";

    const encodedText = encodeURIComponent(itemsText);
    const phone = "5569993489864";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
}
