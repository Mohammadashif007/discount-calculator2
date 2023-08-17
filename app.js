document.getElementById('btn-apply').addEventListener('click', () => {
    const getPrice = getElementById('price');
    const couponCode = document.getElementById('coupon');
    const couponCodeValue = couponCode.value;
    const setPrice = document.getElementById('pay-price');

    if(couponCodeValue == "ashif30"){
        const payAblePrice = getPrice - (getPrice*30/100);
        setPrice.innerText = payAblePrice;
    }
    else {
        setPrice.innerText = getPrice;
    }
    
    
})


function getElementById(elementId){
    const inputElement = document.getElementById(elementId);
    const inputElementValue = parseInt(inputElement.value);
    inputElement.innerText = "";
    return inputElementValue;
}