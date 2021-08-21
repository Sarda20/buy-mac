// catagorycost function
function categoryCost(priceId, price) {
    const categoryprice = document.getElementById(priceId);
    categoryprice.innerText = price;
    totalPrice();
}

// calculate total price
function totalPrice() {
    const bestprice = 1299;
    const memoryprice = document.getElementById('memory-price').innerText;
    const storageprice = document.getElementById('storage-price').innerText;
    const deliveryprice = document.getElementById('delivery-price').innerText;
    const totalprice = bestprice + parseFloat(memoryprice) + parseFloat(storageprice) + parseFloat(deliveryprice);
    document.getElementById('total-price').innerText = totalprice;
    document.getElementById('footer-price').innerText = totalprice;
}

// calculate discount for promo code
document.getElementById('promo-btn').addEventListener('click', function() {
    const inputvalue = document.getElementById('promo-input').value;
    const totalprice = document.getElementById('total-price').innerText;
    let floattotalprice = parseFloat(totalprice);
    if (inputvalue == 'stevekaku') {
        floattotalprice = floattotalprice * 0.8;
        document.getElementById('total-price').innerText = floattotalprice;
        document.getElementById('footer-price').innerText = floattotalprice;
    } else {
        alert('Discount not possible');
    }
})

//call functions
document.getElementById('8gb-memory').addEventListener('click', function() {
    categoryCost('memory-price', 0);
})
document.getElementById('16gb-memory').addEventListener('click', function() {
    categoryCost('memory-price', 180);
})
document.getElementById('256gb-storage').addEventListener('click', function() {
    categoryCost('storage-price', 0);
})
document.getElementById('512gb-storage').addEventListener('click', function() {
    categoryCost('storage-price', 100);
})
document.getElementById('1tb-storage').addEventListener('click', function() {
    categoryCost('storage-price', 180);
})
document.getElementById('free-delivery').addEventListener('click', function() {
    categoryCost('delivery-price', 0);
})
document.getElementById('charge-delivery').addEventListener('click', function() {
    categoryCost('delivery-price', 20);
})