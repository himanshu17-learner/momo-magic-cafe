document.getElementById('year').textContent = new Date().getFullYear();

/* ============================= ICONS ============================= */
const ICONS = {
  flame:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-2-1-3.5-2-5 0 2-1 3-2 3-1.5 0-1-2-1-4 0-2-1-3-1-5z"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a5 5 0 0 0 0-10"/></svg>',
  family:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><path d="M17 13.5a3.5 3.5 0 0 1 4 3.5V21"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="1" y="6" width="14" height="12" rx="1"/><path d="M15 10h4l3 3v5h-7z"/><circle cx="6" cy="20" r="1.6"/><circle cx="17.5" cy="20" r="1.6"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="12 2 15.09 8.63 22 9.24 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.24 8.91 8.63 12 2"/></svg>',
};
function starRow(n){let s='<div class="review-stars">';for(let i=0;i<5;i++){s+=`<svg viewBox="0 0 24 24" fill="${i<n?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.63 22 9.24 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.24 8.91 8.63 12 2"/></svg>`;}return s+'</div>';}

/* ============================= MENU DATA ============================= */
const menuData = [
  {cat:"Steamed Momos", emoji:"🥟", items:[
    {name:"Classic Veg Steamed Momos",desc:"Cabbage, carrot & spring onion, hand-pleated and steamed fresh.",price:130,veg:true,pop:true,img:"image/1.png"},
    {name:"Chicken Steamed Momos",desc:"Juicy minced chicken, ginger & garlic, steamed to order.",price:160,veg:false,pop:true,img:"image/Paneer Steamed Momos.png"},
    {name:"Paneer Steamed Momos",desc:"Crumbled paneer with bell pepper and a hint of chilli.",price:150,veg:true,pop:false,img:"image/chicken Steamed Momos.jpg"},
  ]},
  {cat:"Fried Momos", emoji:"🥟", items:[
    {name:"Crispy Fried Veg Momos",desc:"Golden fried, tossed lightly in Sichuan pepper.",price:150,veg:true,pop:true,img:"image/crispy Fried Veg Momos.png"}, 
    {name:"Fried Chicken Momos",desc:"Deep fried till crackly, served with spicy mayo dip.",price:180,veg:false,pop:false,img:"image/Fried Chicken Momos.png"},
    {name:"Fried Paneer Momos",desc:"Cottage cheese momos, crisp shell, soft centre.",price:170,veg:true,pop:false,img:"image/Panner Fried Momos.png"},
  ]},
  {cat:"Tandoori Momos", emoji:"🍢", items:[
    {name:"Tandoori Chicken Momos",desc:"Skewered, char-grilled in a smoky tandoori marinade.",price:200,veg:false,pop:true,img:"image/Tandoori Chicken Momos.png"},
    {name:"Tandoori Paneer Momos",desc:"Yogurt-marinated paneer momos off the charcoal grill.",price:190,veg:true,pop:false,img:"image/Tandoori Paneer Momos.jpg"},
    {name:"Peri Peri Tandoori Momos",desc:"Fiery peri-peri rub, finished with butter glaze.",price:210,veg:false,pop:false,img:"image/Peri Peri Tandoori Momos.jpg"},
  ]},
  {cat:"Kurkure Momos", emoji:"🥟", items:[
    {name:"Kurkure Veg Momos",desc:"Crunch-coated momos fried until shatteringly crisp.",price:170,veg:true,pop:true,img:"image/Kurkure Veg Momos.png"},
    {name:"Kurkure Chicken Momos",desc:"Crispy-coated chicken momos, chilli garlic glaze.",price:200,veg:false,pop:true,img:"image/Kurkure Chicken Momos.png"},
    {name:"Kurkure Cheese Momos",desc:"Molten cheese centre in a crunchy shell.",price:190,veg:true,pop:false,img:"image/Kurkure Cheese Momos.png"},
  ]},
  {cat:"Afghani Momos", emoji:"🥟", items:[
    {name:"Afghani Chicken Momos",desc:"Creamy cashew-yogurt marinade, mildly spiced, grilled.",price:210,veg:false,pop:true,img:"image/Afghani Chicken Momos.png"},
    {name:"Afghani Paneer Momos",desc:"Rich malai marinade, char-grilled paneer momos.",price:195,veg:true,pop:false,img:"image/Afghani Paneer Momos.png"},
  ]},
  {cat:"Chinese", emoji:"🍜", items:[
    {name:"Veg Hakka Noodles",desc:"Wok-tossed noodles with crunchy seasonal vegetables.",price:170,veg:true,pop:true,img:"photo-1585032226651-759b368d7246"},
    {name:"Chicken Manchurian",desc:"Crispy chicken in a tangy Indo-Chinese gravy.",price:220,veg:false,pop:true,img:"image/chicken manchurian.png"},
    {name:"Veg Fried Rice",desc:"Wok-fried rice with garlic, spring onion & vegetables.",price:160,veg:true,pop:false,img:"photo-1603133872878-684f208fb84b"},
  ]},
  {cat:"Pizza", emoji:"🍕", items:[
    {name:"Margherita Pizza",desc:"Tomato base, mozzarella, fresh basil.",price:220,veg:true,pop:true,img:"photo-1513104890138-7c749659a591"},
    {name:"Peppy Paneer Pizza",desc:"Loaded paneer, capsicum, red pepper flakes.",price:260,veg:true,pop:false,img:"image/peppy paneer pizza.webp"},
    {name:"Chicken Tikka Pizza",desc:"Tandoori chicken tikka, onion, mint drizzle.",price:290,veg:false,pop:true,img:"image/chicken tikka pizza.jpg"},
  ]},
  {cat:"Burgers", emoji:"🍔", items:[
    {name:"Classic Veg Burger",desc:"Crisp potato patty, lettuce, house sauce.",price:110,veg:true,pop:false,img:"photo-1550547660-d9450f859349"},
    {name:"Crispy Chicken Burger",desc:"Buttermilk-fried chicken fillet, slaw, spicy mayo.",price:150,veg:false,pop:true,img:"photo-1568901346375-23c9450c58cd"},
    {name:"Cheese Blast Burger",desc:"Double patty, double cheese, molten centre.",price:170,veg:true,pop:true,img:"image/cheese blast burger.png"},
  ]},
  {cat:"Sandwiches", emoji:"🥪", items:[
    {name:"Veg Grilled Sandwich",desc:"Loaded vegetables, mint chutney, grilled to a crisp.",price:110,veg:true,pop:false,img:"image/Veg Grilled Sandwich.png"},
    {name:"Chicken Tikka Sandwich",desc:"Smoky chicken tikka, onion, mayo, toasted bread.",price:150,veg:false,pop:false,img:"photo-1528735602780-2552fd46c7af"},
    {name:"Cheese Corn Sandwich",desc:"Sweet corn, melted cheese, herb butter.",price:130,veg:true,pop:false,img:"photo-1567234669003-dce7a7a88821"},
  ]},
  {cat:"Pasta", emoji:"🍝", items:[
    {name:"Red Sauce Pasta",desc:"Penne in a slow-cooked tomato basil sauce.",price:190,veg:true,pop:false,img:"image/Red Sauce Pasta.png"},
    {name:"White Sauce Pasta",desc:"Creamy alfredo, garlic, parmesan, herbs.",price:200,veg:true,pop:true,img:"image/White Sauce Pasta.png"},
    {name:"Chicken Pink Sauce Pasta",desc:"Shredded chicken, blended tomato-cream sauce.",price:230,veg:false,pop:false,img:"image/Chicken Pink Sauce Pasta.png"},
  ]},
  {cat:"Rolls", emoji:"🌯", items:[
    {name:"Veg Kathi Roll",desc:"Spiced vegetables rolled in a flaky paratha.",price:100,veg:true,pop:false,img:"photo-1626700051175-6818013e1d4f"},
    {name:"Chicken Seekh Roll",desc:"Charcoal-grilled seekh kebab, onion, mint chutney.",price:150,veg:false,pop:true,img:"photo-1529006557810-274b9b2fc783"},
    {name:"Paneer Tikka Roll",desc:"Char-grilled paneer, capsicum, tangy chutney.",price:140,veg:true,pop:false,img:"image/Paneer Tikka Roll.png"},
  ]},
  {cat:"Fries", emoji:"🍟", items:[
    {name:"Peri Peri Fries",desc:"Crispy fries tossed in a peri-peri seasoning.",price:110,veg:true,pop:true,img:"photo-1573080496219-bb080dd4f877"},
    {name:"Cheesy Loaded Fries",desc:"Fries buried under molten cheese sauce.",price:150,veg:true,pop:true,img:"image/Cheesy Loaded Fries.png"},
  ]},
  {cat:"Mocktails", emoji:"🍹", items:[
    {name:"Virgin Mojito",desc:"Fresh mint, lime, soda, a hint of sugar.",price:120,veg:true,pop:true,img:"photo-1546171753-97d7676e4602"},
    {name:"Blue Lagoon",desc:"Blue curaçao syrup, lemon, chilled soda.",price:130,veg:true,pop:false,img:"image/Blue Lagoon.png"},
  ]},
  {cat:"Cold Coffee", emoji:"☕", items:[
    {name:"Classic Cold Coffee",desc:"Chilled espresso blended with cream and ice.",price:110,veg:true,pop:true,img:"photo-1461023058943-07fcbe16d735"},
    {name:"Hazelnut Cold Coffee",desc:"Nutty hazelnut syrup, cold espresso, whipped cream.",price:140,veg:true,pop:false,img:"photo-1517701604599-bb29b565090c"},
  ]},
  {cat:"Shakes", emoji:"🥤", items:[
    {name:"Oreo Shake",desc:"Thick vanilla shake blended with crushed Oreo.",price:140,veg:true,pop:true,img:"photo-1541658016709-82535e94bc69"},
    {name:"Kitkat Shake",desc:"Chocolate malt shake loaded with Kitkat chunks.",price:150,veg:true,pop:true,img:"image/Kitkat Shake.jpg"},
  ]},
  {cat:"Desserts", emoji:"🍰", items:[
    {name:"Molten Chocolate Lava Cake",desc:"Warm cake, oozing dark chocolate centre.",price:130,veg:true,pop:true,img:"image/Molten Chocolate Lava Cake.jpg"},
    {name:"Brownie with Ice Cream",desc:"Fudgy brownie, vanilla scoop, chocolate drizzle.",price:150,veg:true,pop:false,img:"image/Brownie with Ice Cream.jpg"},
  ]},
];

function imgUrl(id,w=600){
  if(id.startsWith('image/')){
    return id;
  }

  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
}
/* Render menu tabs + grid */
const menuTabsEl = document.getElementById('menuTabs');
const menuGridEl = document.getElementById('menuGrid');
const footerMenuLinks = document.getElementById('footerMenuLinks');

menuData.forEach((c,i)=>{
  const tab = document.createElement('button');
  tab.className = 'menu-tab'+(i===0?' active':'');
  tab.dataset.cat = c.cat;
  tab.innerHTML = `<span class="tdot"></span>${c.cat}`;
  menuTabsEl.appendChild(tab);
  if(i<6){
    const li=document.createElement('li');
    li.innerHTML = `<a href="#menu" data-jump="${c.cat}">${c.cat}</a>`;
    footerMenuLinks.appendChild(li);
  }
});

/* give every item a stable unique id */
menuData.forEach(group=>{
  group.items.forEach(it=>{ it.id = (group.cat+'-'+it.name).toLowerCase().replace(/[^a-z0-9]+/g,'-'); it.emoji = group.emoji; });
});

/* ============================= CONFIG (single source of truth) ============================= */
/* Tweak these to reconfigure tax, delivery fee & business info without touching logic below. */
const CONFIG = {
  restaurantName: "Momo Magic Cafe",
  address: "First Floor, A-13, Main Road, Krishna Park Colony, Jawahar Park, Khanpur, New Delhi 110080",
  phone: "+91 93156 96669",
  whatsappNumber: "919315696669", // digits only, country code first
  supportEmail: "orders@momomagiccafe.in",
  gstRate: 0.05,          // 5% GST
  deliveryFee: 40,        // ₹ flat delivery fee
  freeDeliveryAbove: 499, // ₹ order value that waives delivery fee
  currency: "₹",
};

/* ============================= CART STATE (declared early — menu cards need it on first render) ============================= */
let cart = {}; // id -> {item, qty}
let favorites = new Set();
let appliedCoupon = null; // {code, type, value, label}

const COUPONS = {
  MOMO10:  {type:'percent', value:10,  label:'10% off your order', minOrder:200},
  FLAT50:  {type:'flat',    value:50,  label:'₹50 off',            minOrder:300},
  WELCOME15:{type:'percent',value:15,  label:'15% off — welcome offer', minOrder:250},
};

function findItemById(id){
  for(const g of menuData){ const found=g.items.find(i=>i.id===id); if(found) return found; }
  return null;
}

/* --- localStorage persistence --- */
function saveCart(){
  try{
    const slim = {}; Object.entries(cart).forEach(([id,c])=>{ slim[id]=c.qty; });
    localStorage.setItem('momo_cart', JSON.stringify(slim));
  }catch(e){ /* storage unavailable — cart just won't persist */ }
}
function loadCart(){
  try{
    const raw = localStorage.getItem('momo_cart');
    if(!raw) return;
    const slim = JSON.parse(raw);
    Object.entries(slim).forEach(([id,qty])=>{
      const item=findItemById(id);
      if(item && qty>0) cart[id]={item, qty};
    });
  }catch(e){ /* corrupt/blocked storage — start fresh */ }
}
function saveFavorites(){
  try{ localStorage.setItem('momo_favorites', JSON.stringify([...favorites])); }catch(e){}
}
function loadFavorites(){
  try{
    const raw = localStorage.getItem('momo_favorites');
    if(raw) favorites = new Set(JSON.parse(raw));
  }catch(e){}
}
function saveRecent(items){
  try{ localStorage.setItem('momo_recent', JSON.stringify(items)); }catch(e){}
}
function loadRecent(){
  try{ return JSON.parse(localStorage.getItem('momo_recent')||'[]'); }catch(e){ return []; }
}
loadCart();
loadFavorites();

/* --- cart mutators --- */
function addToCart(id){
  const item = findItemById(id);
  if(!item) return;
  if(!cart[id]) cart[id] = {item, qty:0};
  cart[id].qty++;
  onCartChange();
}
function decCart(id){
  if(!cart[id]) return;
  cart[id].qty--;
  if(cart[id].qty<=0) delete cart[id];
  onCartChange();
}
function removeFromCart(id){ delete cart[id]; onCartChange(); }
function cartCount(){ return Object.values(cart).reduce((s,c)=>s+c.qty,0); }
function cartSubtotal(){ return Object.values(cart).reduce((s,c)=>s+c.qty*c.item.price,0); }

function toggleFavorite(id){
  if(favorites.has(id)) favorites.delete(id); else favorites.add(id);
  saveFavorites();
  renderAllFavButtons();
  if(activeMenuCatValue==='__favorites__') renderMenu('__favorites__');
}

/* --- coupon logic --- */
function computeDiscount(subtotal){
  if(!appliedCoupon) return 0;
  if(subtotal < appliedCoupon.minOrder) return 0;
  return appliedCoupon.type==='percent' ? Math.round(subtotal*appliedCoupon.value/100) : appliedCoupon.value;
}
function applyCouponCode(rawCode, showMsg){
  const code=(rawCode||'').trim().toUpperCase();
  const coupon=COUPONS[code];
  const subtotal=cartSubtotal();
  if(!coupon){ showMsg('Invalid code', 'That promo code does not exist.'); return; }
  if(subtotal < coupon.minOrder){ showMsg('Almost there', `Add ₹${coupon.minOrder-subtotal} more to use ${code}.`); return; }
  appliedCoupon = {code, ...coupon};
  showMsg('Coupon applied!', coupon.label);
  renderDrawer();
}
function removeCoupon(){ appliedCoupon=null; renderDrawer(); }

/* Central totals calculator — used by the drawer, checkout, invoice and the admin order object,
   so every part of the app always agrees on the bill. */
function computeOrderTotals(orderType){
  const subtotal = cartSubtotal();
  const discount = computeDiscount(subtotal);
  const taxable = subtotal - discount;
  const gst = Math.round(taxable * CONFIG.gstRate);
  const deliveryApplies = orderType === 'delivery';
  const delivery = deliveryApplies ? (subtotal >= CONFIG.freeDeliveryAbove ? 0 : CONFIG.deliveryFee) : 0;
  const total = taxable + gst + delivery;
  return {subtotal, discount, gst, delivery, deliveryApplies, total};
}

/* onCartChange fans out to every renderer that depends on cart state (all defined further below,
   but this function is only ever *called* after the whole script has finished running once). */
function onCartChange(){
  saveCart();
  renderCartBtn();
  renderAllCardControls();
  renderDrawer();
}

function renderMenu(cat){
  menuGridEl.innerHTML='';
  const isFav = cat === '__favorites__';
  const items = isFav
    ? menuData.flatMap(g=>g.items.filter(it=>favorites.has(it.id)).map(it=>({...it, __cat:g.cat, __emoji:g.emoji})))
    : menuData.find(c=>c.cat===cat).items.map(it=>({...it, __cat:cat, __emoji:it.emoji}));

  if(isFav && items.length===0){
    menuGridEl.innerHTML = `<div class="cart-empty" style="grid-column:1/-1;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      <p>No favorites yet.<br>Tap the heart on any item to save it here.</p>
    </div>`;
    return;
  }

  items.forEach((it,idx)=>{
    const card=document.createElement('div');
    card.className='menu-card';
    card.style.animationDelay=(idx*0.08)+'s';
    card.innerHTML = `
      <div class="mc-media">
        <img src="${imgUrl(it.img)}" alt="${it.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <div class="mc-fallback" style="display:none;background:linear-gradient(135deg,var(--surface-2),var(--surface-3));">${it.__emoji}</div>
        <div class="mc-badges">
          <span class="veg-badge ${it.veg?'':'non'}"></span>
          <button type="button" class="fav-btn${favorites.has(it.id)?' active':''}" data-fav="${it.id}" aria-label="Toggle favorite">
            <svg viewBox="0 0 24 24" fill="${favorites.has(it.id)?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          </button>
        </div>
        ${it.pop?`<span class="pop-badge" style="position:absolute;bottom:12px;left:12px;">${ICONS.flame}Popular</span>`:''}
      </div>
      <div class="mc-body">
        <span class="mc-cat">${it.__cat}</span>
        <div class="mc-top"><h3>${it.name}</h3><span class="mc-price">₹${it.price}</span></div>
        <p>${it.desc}</p>
        <div class="mc-order" data-item-id="${it.id}"></div>
      </div>`;
    menuGridEl.appendChild(card);
    renderCardOrderControl(it.id);
  });
}
function renderAllFavButtons(){
  document.querySelectorAll('.fav-btn').forEach(btn=>{
    const on = favorites.has(btn.dataset.fav);
    btn.classList.toggle('active', on);
    btn.querySelector('svg').setAttribute('fill', on?'currentColor':'none');
  });
}
let activeMenuCatValue = menuData[0].cat;
renderMenu(activeMenuCatValue);

/* Favorites pinned tab */
const favTab=document.createElement('button');
favTab.className='menu-tab fav-tab';
favTab.dataset.cat='__favorites__';
favTab.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg> Favorites';
menuTabsEl.appendChild(favTab);

/* ============================= RECENTLY ORDERED STRIP ============================= */
function renderRecentStrip(){
  const recentStripEl=document.getElementById('recentStrip');
  const recent = loadRecent().filter(r=>findItemById(r.id));
  if(recent.length===0){ recentStripEl.style.display='none'; recentStripEl.innerHTML=''; return; }
  recentStripEl.style.display='flex';
  recentStripEl.innerHTML = `<span style="flex-shrink:0;align-self:center;font-size:12px;color:var(--cream-dim);font-weight:600;margin-right:2px;">Order again:</span>` +
    recent.map(r=>{
      const item=findItemById(r.id);
      return `<button type="button" class="recent-chip" data-recent-add="${r.id}">
        <span class="rc-emoji">${item.emoji}</span><b>${item.name}</b><span>+ Add</span>
      </button>`;
    }).join('');
}
document.getElementById('recentStrip').addEventListener('click', e=>{
  const chip=e.target.closest('[data-recent-add]'); if(!chip) return;
  addToCart(chip.dataset.recentAdd);
  showToast('Added to cart', findItemById(chip.dataset.recentAdd).name+' added from your recent order.');
});
renderRecentStrip();

menuTabsEl.addEventListener('click', e=>{
  const btn = e.target.closest('.menu-tab');
  if(!btn) return;
  menuTabsEl.querySelectorAll('.menu-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  activeMenuCatValue = btn.dataset.cat;
  renderMenu(activeMenuCatValue);
  btn.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
});

footerMenuLinks.addEventListener('click', e=>{
  const a=e.target.closest('a[data-jump]');
  if(!a) return;
  const cat=a.dataset.jump;
  const tabBtn=[...menuTabsEl.children].find(t=>t.dataset.cat===cat);
  if(tabBtn){menuTabsEl.querySelectorAll('.menu-tab').forEach(t=>t.classList.remove('active'));tabBtn.classList.add('active');activeMenuCatValue=cat;renderMenu(cat);}
});

/* ============================= WHY CHOOSE US DATA ============================= */
const whyData = [
  {icon:ICONS.leaf, title:"Fresh Ingredients", desc:"Sourced and prepped every single morning."},
  {icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2a4 4 0 0 0-4 4c0 1.5.7 2.6 1.5 3.5C8 11 6 12 6 15v1h12v-1c0-3-2-4-3.5-5.5.8-.9 1.5-2 1.5-3.5a4 4 0 0 0-4-4z"/><path d="M6 20h12"/></svg>', title:"Handmade Momos", desc:"Every pleat folded by hand, not a machine."},
  {icon:ICONS.bolt, title:"Fast Service", desc:"From order to table, faster than you'd expect."},
  {icon:ICONS.rupee, title:"Affordable Prices", desc:"Premium taste, honest ₹200–₹400 pricing."},
  {icon:ICONS.family, title:"Family Friendly", desc:"Comfortable seating for every generation."},
  {icon:ICONS.shield, title:"Hygienic Kitchen", desc:"Clean counters, inspected equipment, daily."},
  {icon:ICONS.truck, title:"Online Delivery", desc:"No-contact delivery, straight to your door."},
  {icon:ICONS.star, title:"Premium Taste", desc:"Recipes refined until every batch is right."},
];
const whyGrid=document.getElementById('whyGrid');
whyData.forEach(w=>{
  const el=document.createElement('div');
  el.className='why-card reveal';
  el.innerHTML=`<div class="why-icon">${w.icon}</div><h3>${w.title}</h3><p>${w.desc}</p>`;
  whyGrid.appendChild(el);
});

/* ============================= GALLERY DATA ============================= */
const galleryData = [
  {img:"image/2.avif", cap:"Fresh steamed momos, straight off the basket", tall:true},
  {img:"photo-1517248135467-4c7edcad34c4", cap:"Cafe interior — warm and welcoming"},
  {img:"photo-1541014741259-de529411b96a", cap:"Chef folding momos by hand"},
  {img:"photo-1414235077428-338989a2e8c0", cap:"Guests enjoying their meal"},
  {img:"photo-1552566626-52f8b828add9", cap:"Kitchen in full swing", tall:true},
  {img:"photo-1600891964092-4316c288032e", cap:"Chef's special kurkure momos"},
  {img:"photo-1496116218417-1a781b1c416c", cap:"Seating corner"},
  {img:"photo-1504674900247-0877df9cc836", cap:"Every table, ready to welcome you"},
];
const galleryGrid=document.getElementById('galleryGrid');
galleryData.forEach((g,i)=>{
  const el=document.createElement('div');
  el.className='g-item reveal'+(g.tall?' tall':'');
  el.innerHTML=`<img src="${imgUrl(g.img,700)}" alt="${g.cap}" loading="lazy" onerror="this.style.background='linear-gradient(135deg,var(--surface-2),var(--surface-3))'"><div class="g-overlay"><span>${g.cap}</span></div>`;
  el.addEventListener('click', ()=>openLightbox(i));
  galleryGrid.appendChild(el);
});

/* Lightbox */
const lightbox=document.getElementById('lightbox'), lbImg=document.getElementById('lbImg'), lbCaption=document.getElementById('lbCaption');
let lbIndex=0;
function openLightbox(i){lbIndex=i;updateLightbox();lightbox.classList.add('open');document.body.style.overflow='hidden';}
function updateLightbox(){const g=galleryData[lbIndex];lbImg.src=imgUrl(g.img,1200);lbImg.alt=g.cap;lbCaption.textContent=g.cap;}
document.getElementById('lbClose').addEventListener('click', ()=>{lightbox.classList.remove('open');document.body.style.overflow='';});
document.getElementById('lbNext').addEventListener('click', ()=>{lbIndex=(lbIndex+1)%galleryData.length;updateLightbox();});
document.getElementById('lbPrev').addEventListener('click', ()=>{lbIndex=(lbIndex-1+galleryData.length)%galleryData.length;updateLightbox();});
lightbox.addEventListener('click', e=>{if(e.target===lightbox){lightbox.classList.remove('open');document.body.style.overflow='';}});
document.addEventListener('keydown', e=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key==='Escape'){lightbox.classList.remove('open');document.body.style.overflow='';}
  if(e.key==='ArrowRight'){lbIndex=(lbIndex+1)%galleryData.length;updateLightbox();}
  if(e.key==='ArrowLeft'){lbIndex=(lbIndex-1+galleryData.length)%galleryData.length;updateLightbox();}
});

/* ============================= REVIEWS DATA ============================= */
const reviewData = [
  {name:"Aarav Mehta", role:"Khanpur, Delhi", rating:5, text:"Best steamed momos in the area, hands down. The tandoori ones are a revelation — smoky and juicy every time.", init:"AM"},
  {name:"Simran Kaur", role:"Regular customer", rating:5, text:"Cosy place, fast service, and the kurkure momos are ridiculously addictive. My go-to weekend spot.", init:"SK"},
  {name:"Rohit Sharma", role:"Food blogger", rating:4, text:"Great value for money — full meal under ₹300. The Afghani momos deserve way more hype than they get.", init:"RS"},
  {name:"Priya Nair", role:"First-time visitor", rating:5, text:"Ordered online for no-contact delivery — arrived hot, packed well, and tasted just as good as dine-in.", init:"PN"},
  {name:"Vikram Anand", role:"Local resident", rating:4, text:"Family friendly, clean, and the staff genuinely care. Our kids love the cheese shakes.", init:"VA"},
];
const reviewSlides=document.getElementById('reviewSlides'), reviewDots=document.getElementById('reviewDots');
reviewData.forEach((r,i)=>{
  const slide=document.createElement('div');
  slide.className='review-slide';
  slide.innerHTML=`
    <div class="review-card glass">
      <svg class="review-quote" viewBox="0 0 24 24" fill="currentColor"><path d="M7 17c-2 0-3-1.5-3-3.5C4 9 7 6 11 5v3c-2 1-3 2.5-3 4 1 0 2 1 2 2.5S9 17 7 17zm10 0c-2 0-3-1.5-3-3.5C14 9 17 6 21 5v3c-2 1-3 2.5-3 4 1 0 2 1 2 2.5S19 17 17 17z"/></svg>
      ${starRow(r.rating)}
      <p class="review-text">"${r.text}"</p>
      <div class="review-person">
        <div class="review-avatar">${r.init}</div>
        <div style="text-align:left;"><b>${r.name}</b><span>${r.role}</span></div>
      </div>
    </div>`;
  reviewSlides.appendChild(slide);
  const dot=document.createElement('button');
  if(i===0) dot.classList.add('active');
  dot.addEventListener('click', ()=>goToReview(i));
  reviewDots.appendChild(dot);
});
let reviewIndex=0;
function goToReview(i){
  reviewIndex=(i+reviewData.length)%reviewData.length;
  reviewSlides.style.transform=`translateX(-${reviewIndex*100}%)`;
  [...reviewDots.children].forEach((d,idx)=>d.classList.toggle('active', idx===reviewIndex));
}
document.getElementById('revNext').addEventListener('click', ()=>goToReview(reviewIndex+1));
document.getElementById('revPrev').addEventListener('click', ()=>goToReview(reviewIndex-1));
let reviewAuto=setInterval(()=>goToReview(reviewIndex+1), 5500);
document.querySelector('.review-slider').addEventListener('mouseenter', ()=>clearInterval(reviewAuto));
document.querySelector('.review-slider').addEventListener('mouseleave', ()=>{reviewAuto=setInterval(()=>goToReview(reviewIndex+1), 5500);});

/* ============================= PRELOADER ============================= */
window.addEventListener('load', ()=>{
  setTimeout(()=>document.getElementById('preloader').classList.add('hide'), 500);
});

/* ============================= NAV SCROLL / BURGER ============================= */
const siteNav=document.getElementById('siteNav');
window.addEventListener('scroll', ()=>{
  siteNav.classList.toggle('scrolled', window.scrollY>40);
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY>600);
}, {passive:true});

const mobileMenu=document.getElementById('mobileMenu');
document.getElementById('burgerBtn').addEventListener('click', ()=>mobileMenu.classList.add('open'));
document.getElementById('mobileCloseBtn').addEventListener('click', ()=>mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mobileMenu.classList.remove('open')));

document.getElementById('scrollTop').addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ============================= SCROLL REVEAL ============================= */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); revealObserver.unobserve(entry.target); }
  });
}, {threshold:0.12});
function observeReveals(){document.querySelectorAll('.reveal:not(.in)').forEach(el=>revealObserver.observe(el));}
observeReveals();
new MutationObserver(observeReveals).observe(document.body, {childList:true, subtree:true});

/* ============================= FORMS ============================= */
const toast=document.getElementById('toast'), toastTitle=document.getElementById('toastTitle'), toastMsg=document.getElementById('toastMsg');
function showToast(title,msg){
  toastTitle.textContent=title; toastMsg.textContent=msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>toast.classList.remove('show'), 4200);
}
document.getElementById('reserveForm').addEventListener('submit', e=>{
  e.preventDefault();
  if(!e.target.checkValidity()){ e.target.reportValidity(); return; }
  showToast('Table Reserved!', "We'll call to confirm shortly.");
  e.target.reset();
});
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  if(!e.target.checkValidity()){ e.target.reportValidity(); return; }
  showToast('Message Sent!', "We'll get back to you soon.");
  e.target.reset();
});
document.getElementById('newsletterForm').addEventListener('submit', e=>{
  e.preventDefault();
  showToast('Subscribed!', "You're on the list for offers & updates.");
  e.target.reset();
});

/* Set min date for reservation to today */
document.getElementById('rDate').min = new Date().toISOString().split('T')[0];

/* ============================= ORDER / CART SYSTEM ============================= */
/* cart/favorites state, CONFIG, coupon logic & findItemById are declared earlier —
   right after menuData gets its ids — so the very first menu render can use them safely. */

const orderTypes = [
  {id:'delivery', label:'Delivery', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="1" y="6" width="14" height="12" rx="1"/><path d="M15 10h4l3 3v5h-7z"/><circle cx="6" cy="20" r="1.6"/><circle cx="17.5" cy="20" r="1.6"/></svg>'},
  {id:'dinein', label:'Dine-In', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>'},
  {id:'takeaway', label:'Takeaway', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/></svg>'},
  {id:'drivethru', label:'Drive-Through', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 17V9l2-5h10l3 5h3v8"/></svg>'},
];
let activeOrderType = 'delivery';

const paymentMethods = [
  {id:'cod', label:'Cash on Delivery', sub:'Pay when your order arrives', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>'},
  {id:'upi', label:'UPI', sub:'Google Pay, PhonePe, Paytm & more', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 12h16M4 12l6-6M4 12l6 6"/></svg>', extra:'You will be redirected to your UPI app to complete payment of the exact order amount.'},
  {id:'card', label:'Credit / Debit Card', sub:'Visa, Mastercard, RuPay', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>', extra:'Card details are collected securely at the next step — never stored on this site.'},
  {id:'netbanking', label:'Net Banking', sub:'All major Indian banks', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 21h18M3 10h18M5 6l7-4 7 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>'},
  {id:'counter', label:'Pay at Counter', sub:'For dine-in & takeaway guests', icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>'},
];
let selectedPayment = null;

function renderCardOrderControl(id){
  const holder = document.querySelector(`.mc-order[data-item-id="${id}"]`);
  if(!holder) return;
  const inCart = cart[id];
  if(inCart){
    holder.innerHTML = `
      <div class="qty-stepper">
        <button type="button" data-dec="${id}" aria-label="Decrease quantity">−</button>
        <span>${inCart.qty}</span>
        <button type="button" data-inc="${id}" aria-label="Increase quantity">+</button>
      </div>`;
  } else {
    holder.innerHTML = `
      <button type="button" class="add-cart-btn" data-add="${id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add to Order
      </button>`;
  }
}
function renderAllCardControls(){
  document.querySelectorAll('.mc-order').forEach(el=>renderCardOrderControl(el.dataset.itemId));
}
menuGridEl.addEventListener('click', e=>{
  const add=e.target.closest('[data-add]'); if(add){ addToCart(add.dataset.add); return; }
  const inc=e.target.closest('[data-inc]'); if(inc){ addToCart(inc.dataset.inc); return; }
  const dec=e.target.closest('[data-dec]'); if(dec){ decCart(dec.dataset.dec); return; }
  const fav=e.target.closest('[data-fav]'); if(fav){ toggleFavorite(fav.dataset.fav); return; }
});

/* Cart button */
const cartBtn=document.getElementById('cartBtn'), cartCountEl=document.getElementById('cartCount'), cartBtnTotal=document.getElementById('cartBtnTotal');
function renderCartBtn(){
  const count=cartCount();
  cartCountEl.textContent=count;
  cartBtnTotal.textContent='₹'+cartSubtotal();
  cartBtn.classList.toggle('hide', count===0);
}

/* Drawer */
const drawerOverlay=document.getElementById('drawerOverlay'), cartDrawer=document.getElementById('cartDrawer');
const orderTypeRow=document.getElementById('orderTypeRow'), cartItemsWrap=document.getElementById('cartItemsWrap'), drawerSummary=document.getElementById('drawerSummary');

orderTypes.forEach(t=>{
  const pill=document.createElement('button');
  pill.type='button'; pill.className='order-type-pill'+(t.id===activeOrderType?' active':'');
  pill.dataset.type=t.id;
  pill.innerHTML=`${t.icon}${t.label}`;
  orderTypeRow.appendChild(pill);
});
orderTypeRow.addEventListener('click', e=>{
  const pill=e.target.closest('.order-type-pill'); if(!pill) return;
  activeOrderType=pill.dataset.type;
  orderTypeRow.querySelectorAll('.order-type-pill').forEach(p=>p.classList.toggle('active', p===pill));
  renderDrawer();
});

function openDrawer(){ drawerOverlay.classList.add('open'); cartDrawer.classList.add('open'); document.body.style.overflow='hidden'; }
function closeDrawer(){ drawerOverlay.classList.remove('open'); cartDrawer.classList.remove('open'); document.body.style.overflow=''; }
cartBtn.addEventListener('click', openDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
document.getElementById('drawerClose').addEventListener('click', closeDrawer);

function renderDrawer(){
  const entries=Object.entries(cart);
  if(entries.length===0){
    cartItemsWrap.innerHTML=`<div class="cart-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      <p>Your basket is empty.<br>Add some momos to get started!</p>
      <button class="btn btn-ghost btn-sm" onclick="closeDrawer();document.getElementById('menu').scrollIntoView({behavior:'smooth'});">Browse Menu</button>
    </div>`;
    drawerSummary.innerHTML='';
    return;
  }
  cartItemsWrap.innerHTML = entries.map(([id,c])=>`
    <div class="cart-item">
      <img class="cart-item-img" src="${imgUrl(c.item.img,120)}" alt="${c.item.name}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'cart-item-emoji',textContent:'${c.item.emoji}'}))">
      <div class="cart-item-info">
        <b>${c.item.name}</b>
        <span>₹${c.item.price} each</span>
      </div>
      <div class="cart-item-right">
        <span class="cart-item-price">₹${c.item.price*c.qty}</span>
        <div class="qty-stepper">
          <button type="button" data-dec="${id}" aria-label="Decrease">−</button>
          <span>${c.qty}</span>
          <button type="button" data-inc="${id}" aria-label="Increase">+</button>
        </div>
      </div>
    </div>`).join('');

  const t = computeOrderTotals(activeOrderType);

  drawerSummary.innerHTML=`
    <div class="coupon-row">
      <input type="text" id="drawerCouponInput" placeholder="Have a promo code?" value="${appliedCoupon?appliedCoupon.code:''}" ${appliedCoupon?'disabled':''}>
      <button type="button" id="drawerCouponBtn">${appliedCoupon?'Applied':'Apply'}</button>
    </div>
    ${appliedCoupon?`<div class="coupon-applied"><b>${appliedCoupon.code} applied — ${appliedCoupon.label}</b><button type="button" id="drawerCouponRemove">Remove</button></div>`:''}
    <div class="summary-row"><span>Subtotal</span><span>₹${t.subtotal}</span></div>
    ${t.discount>0?`<div class="summary-row discount"><span>Discount</span><span>−₹${t.discount}</span></div>`:''}
    <div class="summary-row"><span>GST (${Math.round(CONFIG.gstRate*100)}%)</span><span>₹${t.gst}</span></div>
    <div class="summary-row"><span>${t.deliveryApplies?(t.delivery?'Delivery Fee':'Delivery Fee (free over ₹'+CONFIG.freeDeliveryAbove+')'):'Delivery Fee'}</span><span>${t.delivery?('₹'+t.delivery):'₹0'}</span></div>
    <div class="summary-row total"><span>Grand Total</span><b>₹${t.total}</b></div>
    <button class="btn btn-primary" id="checkoutBtn" style="width:100%;margin-top:14px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>
      Proceed to Checkout
    </button>`;
  document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
  document.getElementById('drawerCouponBtn').addEventListener('click', ()=>{
    applyCouponCode(document.getElementById('drawerCouponInput').value, showToast);
  });
  const removeBtn=document.getElementById('drawerCouponRemove');
  if(removeBtn) removeBtn.addEventListener('click', removeCoupon);
}
cartItemsWrap.addEventListener('click', e=>{
  const inc=e.target.closest('[data-inc]'); if(inc){ addToCart(inc.dataset.inc); return; }
  const dec=e.target.closest('[data-dec]'); if(dec){ decCart(dec.dataset.dec); return; }
});
renderCartBtn();
renderDrawer();

/* Checkout modal */
const checkoutOverlay=document.getElementById('checkoutOverlay'), payMethodsEl=document.getElementById('payMethods'), payExtraEl=document.getElementById('payExtra');
const checkoutTotalDisplay=document.getElementById('checkoutTotalDisplay'), ckAddressField=document.getElementById('ckAddressField');

paymentMethods.forEach(pm=>{
  const label=document.createElement('label');
  label.className='pay-method';
  label.dataset.id=pm.id;
  label.innerHTML=`
    <input type="radio" name="payMethod" value="${pm.id}">
    <span class="pm-icon">${pm.icon}</span>
    <span class="pm-text"><b>${pm.label}</b><span>${pm.sub}</span></span>`;
  payMethodsEl.appendChild(label);
});
payMethodsEl.addEventListener('change', e=>{
  const input=e.target.closest('input[name="payMethod"]'); if(!input) return;
  selectedPayment=input.value;
  payMethodsEl.querySelectorAll('.pay-method').forEach(el=>el.classList.toggle('selected', el.dataset.id===selectedPayment));
  const pm=paymentMethods.find(p=>p.id===selectedPayment);
  if(pm.extra){ payExtraEl.textContent=pm.extra; payExtraEl.classList.add('show'); }
  else { payExtraEl.classList.remove('show'); payExtraEl.textContent=''; }
});

const checkoutOrderTypeRow=document.getElementById('checkoutOrderTypeRow');
orderTypes.forEach(t=>{
  const pill=document.createElement('button');
  pill.type='button'; pill.className='order-type-pill'+(t.id===activeOrderType?' active':'');
  pill.dataset.type=t.id;
  pill.innerHTML=`${t.icon}${t.label}`;
  checkoutOrderTypeRow.appendChild(pill);
});
checkoutOrderTypeRow.addEventListener('click', e=>{
  const pill=e.target.closest('.order-type-pill'); if(!pill) return;
  activeOrderType=pill.dataset.type;
  checkoutOrderTypeRow.querySelectorAll('.order-type-pill').forEach(p=>p.classList.toggle('active', p===pill));
  orderTypeRow.querySelectorAll('.order-type-pill').forEach(p=>p.classList.toggle('active', p.dataset.type===activeOrderType));
  syncCheckoutAddressFields();
  updateCheckoutTotal();
});

function syncCheckoutAddressFields(){
  const needsAddress = activeOrderType==='delivery';
  ckAddressField.style.display = needsAddress ? 'flex' : 'none';
  document.getElementById('ckAddressExtraRow').style.display = needsAddress ? 'grid' : 'none';
  document.getElementById('ckAddress').required = needsAddress;
  document.getElementById('ckPincode').required = needsAddress;
}
function updateCheckoutTotal(){
  const t=computeOrderTotals(activeOrderType);
  checkoutTotalDisplay.textContent='₹'+t.total;
}
function renderCheckoutCoupon(){
  const box=document.getElementById('couponAppliedBox');
  const row=document.getElementById('checkoutCouponRow');
  if(appliedCoupon){
    row.style.display='none';
    box.innerHTML=`<div class="coupon-applied"><b>${appliedCoupon.code} applied — ${appliedCoupon.label}</b><button type="button" id="checkoutCouponRemove">Remove</button></div>`;
    document.getElementById('checkoutCouponRemove').addEventListener('click', ()=>{ removeCoupon(); renderCheckoutCoupon(); updateCheckoutTotal(); });
  } else {
    row.style.display='flex';
    box.innerHTML='';
  }
}
document.getElementById('couponApplyBtn').addEventListener('click', ()=>{
  applyCouponCode(document.getElementById('couponInput').value, showToast);
  renderCheckoutCoupon();
  updateCheckoutTotal();
});

function openCheckout(){
  if(cartCount()===0) return;
  closeDrawer();
  syncCheckoutAddressFields();
  updateCheckoutTotal();
  renderCheckoutCoupon();
  checkoutOverlay.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCheckout(){ checkoutOverlay.classList.remove('open'); document.body.style.overflow=''; }
document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
checkoutOverlay.addEventListener('click', e=>{ if(e.target===checkoutOverlay) closeCheckout(); });

/* --- Estimated time per order type --- */
function estimateTime(orderType){
  switch(orderType){
    case 'delivery': return '35–45 minutes';
    case 'dinein': return '20–25 minutes';
    case 'takeaway': return '15–20 minutes';
    case 'drivethru': return '10–15 minutes';
    default: return '30–40 minutes';
  }
}
function orderTypeLabel(orderType){ return (orderTypes.find(t=>t.id===orderType)||{}).label || orderType; }

/* --- Build the admin-friendly structured order object --- */
function buildOrderObject(orderId, customer, orderType, paymentMethod, totals){
  return {
    orderId,
    timestamp: new Date().toISOString(),
    status: 'placed', // placed -> preparing -> out_for_delivery/ready -> completed (backend would update this)
    orderType,
    customer,
    items: Object.values(cart).map(c=>({
      id: c.item.id, name: c.item.name, category: c.item.desc ? undefined : undefined,
      quantity: c.qty, unitPrice: c.item.price, lineTotal: c.qty*c.item.price, veg: c.item.veg
    })),
    pricing: {
      currency: CONFIG.currency,
      subtotal: totals.subtotal,
      discount: totals.discount,
      couponCode: appliedCoupon ? appliedCoupon.code : null,
      gstRate: CONFIG.gstRate,
      gst: totals.gst,
      deliveryFee: totals.delivery,
      grandTotal: totals.total
    },
    payment: { method: paymentMethod.id, label: paymentMethod.label },
  };
}

/* --- Invoice rendering (used by success modal's "View Invoice" and the print/PDF button) --- */
let lastOrder = null;
function renderInvoice(order){
  const dt = new Date(order.timestamp);
  const itemRows = order.items.map(it=>`
    <tr><td>${it.name}${it.veg===false?' 🍗':' 🥦'}</td><td>${it.quantity}</td><td>₹${it.unitPrice}</td><td>₹${it.lineTotal}</td></tr>`).join('');
  document.getElementById('invoiceBox').innerHTML = `
    <h2>${CONFIG.restaurantName}</h2>
    <div class="inv-sub">${CONFIG.address}<br>${CONFIG.phone}</div>
    <div class="inv-meta"><span><b>Order ID:</b> ${order.orderId}</span><span><b>${dt.toLocaleDateString()} ${dt.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</b></span></div>
    <div class="inv-meta"><span><b>Customer:</b> ${order.customer.name}</span><span>${order.customer.phone}</span></div>
    <div class="inv-meta"><span><b>Order Type:</b> ${orderTypeLabel(order.orderType)}</span><span><b>Payment:</b> ${order.payment.label}</span></div>
    ${order.orderType==='delivery' ? `<div class="inv-meta"><span><b>Deliver to:</b> ${order.customer.address}${order.customer.landmark?', near '+order.customer.landmark:''} — ${order.customer.pincode}</span></div>`:''}
    <hr>
    <table>
      <thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
      <tbody>${itemRows}</tbody>
    </table>
    <div class="inv-totals">
      <div><span>Subtotal</span><span>₹${order.pricing.subtotal}</span></div>
      ${order.pricing.discount>0?`<div><span>Discount ${order.pricing.couponCode?'('+order.pricing.couponCode+')':''}</span><span>−₹${order.pricing.discount}</span></div>`:''}
      <div><span>GST (${Math.round(order.pricing.gstRate*100)}%)</span><span>₹${order.pricing.gst}</span></div>
      <div><span>Delivery Charges</span><span>₹${order.pricing.deliveryFee}</span></div>
      <div class="inv-grand"><span>Grand Total</span><span>₹${order.pricing.grandTotal}</span></div>
    </div>
    <div class="inv-footer">Thank you for ordering from ${CONFIG.restaurantName}! · This is a computer-generated invoice.</div>`;
}

/* --- Payment gateway hooks — modular so any of these can be wired to a real gateway later.
   Each function's job is to resolve (or reject) before the order is confirmed. COD/Pay-at-Counter
   and UPI/Net-banking are handled inline for this demo; Razorpay/Stripe/PayPal are stubbed so a
   backend integration can drop straight in without touching the checkout flow above. --- */
const paymentGateways = {
  cod: async ()=>({ok:true}),
  counter: async ()=>({ok:true}),
  upi: async ()=>({ok:true}), // in production: redirect to UPI intent / collect flow, then confirm via webhook
  card: async ()=>({ok:true}), // in production: Razorpay/Stripe Checkout, confirm via webhook
  netbanking: async ()=>({ok:true}),
};

document.getElementById('checkoutForm').addEventListener('submit', async e=>{
  e.preventDefault();
  if(!e.target.checkValidity()){ e.target.reportValidity(); return; }
  if(!selectedPayment){ showToast('Choose a payment method', 'Pick how you would like to pay before placing the order.'); return; }

  const totals=computeOrderTotals(activeOrderType);
  const pm=paymentMethods.find(p=>p.id===selectedPayment);
  const submitBtn=e.target.querySelector('button[type="submit"]');
  submitBtn.disabled=true; submitBtn.textContent='Placing order…';

  const gateway = paymentGateways[selectedPayment] || paymentGateways.cod;
  const result = await gateway();
  submitBtn.disabled=false; submitBtn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>Place Order';
  if(!result.ok){ showToast('Payment failed', 'Please try a different payment method.'); return; }

  const orderId='#MM'+Math.floor(1000+Math.random()*9000);
  const customer = {
    name: document.getElementById('ckName').value.trim(),
    phone: document.getElementById('ckPhone').value.trim(),
    email: document.getElementById('ckEmail').value.trim() || null,
    address: document.getElementById('ckAddress').value.trim() || null,
    landmark: document.getElementById('ckLandmark').value.trim() || null,
    pincode: document.getElementById('ckPincode').value.trim() || null,
    instructions: document.getElementById('ckInstructions').value.trim() || null,
  };
  const order = buildOrderObject(orderId, customer, activeOrderType, pm, totals);
  lastOrder = order;

  /* Admin-friendly persistence: append to an order history array in localStorage.
     A real backend would instead POST `order` to an orders API / database. */
  try{
    const history = JSON.parse(localStorage.getItem('momo_orders')||'[]');
    history.push(order);
    localStorage.setItem('momo_orders', JSON.stringify(history));
  }catch(err){ /* storage unavailable */ }
  console.log('New order (admin JSON):', order);

  /* Remember items for "Recently Ordered" */
  saveRecent(order.items.map(it=>({id:it.id})).slice(0,8));

  document.getElementById('successOrderId').textContent=orderId;
  document.getElementById('successPayMethod').textContent=pm.label;
  document.getElementById('successTotal').textContent='₹'+totals.total;
  document.getElementById('successEtaLabel').textContent = activeOrderType==='delivery' ? 'Estimated Delivery' : activeOrderType==='dinein' ? 'Estimated Serve Time' : 'Estimated Ready Time';
  document.getElementById('successEta').textContent = estimateTime(activeOrderType);
  document.getElementById('successMsg').textContent =
    activeOrderType==='delivery' ? 'Your momos are being packed for no-contact delivery.' :
    activeOrderType==='dinein' ? 'Your table order has been sent to the kitchen.' :
    activeOrderType==='takeaway' ? 'Your order will be ready for pickup shortly.' :
    'Pull up to the drive-through window — we\'re getting started.';

  closeCheckout();
  document.getElementById('successOverlay').classList.add('open');
  renderRecentStrip();

  cart={};
  appliedCoupon=null;
  onCartChange();
  e.target.reset();
  selectedPayment=null;
  payMethodsEl.querySelectorAll('.pay-method').forEach(el=>el.classList.remove('selected'));
  payExtraEl.classList.remove('show');
});

document.getElementById('successCloseBtn').addEventListener('click', ()=>{
  document.getElementById('successOverlay').classList.remove('open');
  document.body.style.overflow='';
  document.getElementById('menu').scrollIntoView({behavior:'smooth'});
});
document.getElementById('successOverlay').addEventListener('click', e=>{
  if(e.target.id==='successOverlay'){ e.target.classList.remove('open'); document.body.style.overflow=''; }
});

/* --- Invoice modal + print / WhatsApp / email --- */
const invoiceOverlay=document.getElementById('invoiceOverlay');
document.getElementById('viewInvoiceBtn').addEventListener('click', ()=>{
  if(!lastOrder) return;
  renderInvoice(lastOrder);
  invoiceOverlay.classList.add('open');
  document.body.style.overflow='hidden';
});
document.getElementById('invoiceClose').addEventListener('click', ()=>{ invoiceOverlay.classList.remove('open'); document.body.style.overflow=''; });
invoiceOverlay.addEventListener('click', e=>{ if(e.target===invoiceOverlay){ invoiceOverlay.classList.remove('open'); document.body.style.overflow=''; } });
document.getElementById('printInvoiceBtn').addEventListener('click', ()=>window.print());

function orderSummaryText(order){
  const lines = order.items.map(it=>`• ${it.name} x${it.quantity} — ₹${it.lineTotal}`);
  return [`Order ${order.orderId} at ${CONFIG.restaurantName}`, ...lines,
    `Grand Total: ₹${order.pricing.grandTotal}`, `Payment: ${order.payment.label}`].join('\n');
}
document.getElementById('waShareBtn').addEventListener('click', ()=>{
  if(!lastOrder) return;
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(orderSummaryText(lastOrder))}`, '_blank');
});
document.getElementById('emailReceiptBtn').addEventListener('click', ()=>{
  if(!lastOrder) return;
  const to = lastOrder.customer.email || '';
  window.location.href = `mailto:${to}?subject=${encodeURIComponent('Your '+CONFIG.restaurantName+' receipt — '+lastOrder.orderId)}&body=${encodeURIComponent(orderSummaryText(lastOrder))}`;
});

/* Make hero/nav "Order Now" buttons open the menu and gently nudge users toward the cart */
document.querySelectorAll('a[href="#menu"]').forEach(a=>{
  a.addEventListener('click', ()=>{ closeDrawer(); });
});
