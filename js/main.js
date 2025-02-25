// For noakhali
document.getElementById('donate-noakhali-btn').addEventListener('click', function(){
    let donateNoakhaliValue = donationInputField('noakhali-donation-field');
    let balanceNoakhali = balanceValue('noakhali-donation-amount');
    let mainBalanceNoakhali = balanceValue('main-balance');

    if(donateNoakhaliValue < 0){
        alert('Something went Wrong. Try Again')
        return
    }

    if(mainBalanceNoakhali < donateNoakhaliValue){
        alert('Something went Wrong. Try Again')
        return
    }

    if(isNaN(donateNoakhaliValue)){
        alert('Something went Wrong. Try Again')
        return
    }
    
    let totalDonateNoakhali = donateNoakhaliValue + balanceNoakhali;
    let newMainBalance = mainBalanceNoakhali - donateNoakhaliValue;
    document.getElementById('noakhali-donation-amount').innerText = totalDonateNoakhali;
    document.getElementById('main-balance').innerText = newMainBalance;

    // Transaction History
    let titleNoakhali = donationTitle('noakhali-donation-title')
    let donateDate = new Date();
    let div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-7', 'my-4')
    let p = document.createElement('p');
    p.classList.add('font-bold')
    let p1 = document.createElement('p');
    p.innerText = `${donateNoakhaliValue} taka is Donated for ${titleNoakhali}`
    p1.innerText = `${donateDate}`
    div.appendChild(p);
    div.appendChild(p1);
    document.getElementById('history').appendChild(div);
})

// For Feni
document.getElementById('donate-feni-btn').addEventListener('click', function(){
    let donateFeniValue = donationInputField('feni-donation-field');
    let balanceFeni = balanceValue('feni-donation-amount');
    let mainBalanceFeni = balanceValue('main-balance');

    if(donateFeniValue < 0){
        alert('Something went Wrong. Try Again')
        return
    }

    if(mainBalanceFeni < donateFeniValue){
        alert('Something went Wrong. Try Again')
        return
    }

    if(isNaN(donateFeniValue)){
        alert('Something went Wrong. Try Again')
        return
    }
    
    let totalDonateFeni = donateFeniValue + balanceFeni;
    let newMainBalance = mainBalanceFeni - donateFeniValue;
    document.getElementById('feni-donation-amount').innerText = totalDonateFeni;
    document.getElementById('main-balance').innerText = newMainBalance;

    // Transaction History
    let titleFeni = donationTitle('feni-donation-title')
    let donateDate = new Date();
    let div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-7', 'my-4')
    let p = document.createElement('p');
    p.classList.add('font-bold')
    let p1 = document.createElement('p');
    p.innerText = `${donateFeniValue} taka is Donated for ${titleFeni}`
    p1.innerText = `${donateDate}`
    div.appendChild(p);
    div.appendChild(p1);
    document.getElementById('history').appendChild(div);

})

// For Quota
document.getElementById('donate-quota-btn').addEventListener('click', function(){
    let donateQuotaValue = donationInputField('quota-donation-field');
    let balanceQuota = balanceValue('quota-donation-amount');
    let mainBalanceQuota = balanceValue('main-balance');

    if(donateQuotaValue < 0){
        alert('Something went Wrong. Try Again')
        return
    }

    if(mainBalanceQuota < donateQuotaValue){
        alert('Something went Wrong. Try Again')
        return
    }

    if(isNaN(donateQuotaValue)){
        alert('Something went Wrong. Try Again')
        return
    }
    
    let totalDonateQuota = donateQuotaValue + balanceQuota;
    let newMainBalance = mainBalanceQuota - donateQuotaValue;
    document.getElementById('quota-donation-amount').innerText = totalDonateQuota;
    document.getElementById('main-balance').innerText = newMainBalance;

    // Transaction History
    let titleQuota = donationTitle('quota-donation-title')
    let donateDate = new Date();
    let div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-7', 'my-4')
    let p = document.createElement('p');
    p.classList.add('font-bold')
    let p1 = document.createElement('p');
    p.innerText = `${donateQuotaValue} taka is Donated for ${titleQuota}`
    p1.innerText = `${donateDate}`
    div.appendChild(p);
    div.appendChild(p1);
    document.getElementById('history').appendChild(div);
})