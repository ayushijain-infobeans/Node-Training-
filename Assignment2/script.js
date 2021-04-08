let totalOrUnit = () => {
    let totalCost = document.getElementById('totalCost')
    let unitCost = document.getElementById('unitCost')
    if ((totalCost.value == "") && (unitCost.value == "")) {
        totalCost.style.border = "1px solid red"
    } else {
        totalCost.style.border = "1px solid red"
        unitCost.style.border = "1px solid blue"

        
    }
}


let CUSIPOrTicker = () => {
    let CUSIP = document.getElementById('cusip')
    let Ticker = document.getElementById('ticker')
    if ((CUSIP.value == "") && (Ticker.value == "")) {
        CUSIP.style.border = "1px solid red"
        Ticker.style.border = "1px solid red"
    } else {
        CUSIP.style.border = "1px solid blue"
        Ticker.style.border = "1px solid blue"

    }
}


let marketPriceTotalMarket = () => {
    let totalMarketValue = document.getElementById('totalMarketValue')
    let marketPrice = document.getElementById('marketPrice')

    if ((totalMarketValue.value == "") && (marketPrice.value == "")) {
        totalMarketValue.style.border = "1px solid red"
        marketPrice.style.border = "1px solid blue"
    } else {
        totalMarketValue.style.border = "1px solid red"
        marketPrice.style.border = "1px solid blue"
    
    }
}

let IdentifierValidation = () => {
    let identifier = document.getElementById('identifier')
    let retrieveBtn = document.getElementById('retrieveBtn')

    if (identifier.value == "") {
        identifier.style.border = "1px solid red"
        retrieveBtn.classList.add("disabled");
        retrieveBtn.disabled = true;
    } else {
        identifier.style.border = "1px solid blue"
        retrieveBtn.classList.remove("disabled");
        retrieveBtn.disabled = false;
    }
}

let securityNameValidation = () => {
    let securityName = document.getElementById('securityName')

    if (securityName.value == "") {
        securityName.style.border = "1px solid red"
    } else {
        securityName.style.border = "1px solid blue"
    }
}

let dateOrTerm = (e) => {
    if (e.target.value) {
        let shortTermBtn = document.getElementById('shortTerm')
        let longTermBtn = document.getElementById('longTerm')

        shortTermBtn.classList.add("disabled");
        shortTermBtn.disabled = true;


        longTermBtn.classList.add("disabled");
        longTermBtn.disabled = true;
    }

}

let numValidation = (e) => {
    let inputField = e.target;

    if (Number.isInteger(parseInt(inputField.value)) && parseInt(inputField.value) > 0) {
        inputField.style.border = "1px solid blue"
    } else {
        inputField.style.border = "1px solid red"
    }
}



let data = {
    "formType": "Add Holding",
    "account_id": [
        "A_101",
        "A_102",
        "A_103",
        "A_104",
        "A_105"
    ],
    "security_type": [
        "S_101",
        "S_102",
        "S_103",
        "S_104",
        "S_105"
    ],
    "identifier": 1011,
    "security_name": "g4s",
    "cusip": 122,
    "ticker": 212121,
    "share_quantity": 1000,
    "purchase_date": "04 March 2021",
    "market_price": 2000,
    "term": [
        "short_term",
        "long_term"
    ],
    "total_market_value": 3000,
    "dont_price": true,
    "unit_cost_basis": 4000,
    "total_cost_basis": 5000
};



let editHolding = (e) => {
    let formValue = document.getElementById('editHolding').value
    if (formValue == 1 || formValue == "") {
        document.getElementById('formHeading').innerHTML = data.formType
        document.getElementById('identifier').value = ""
        document.getElementById('securityName').value = ""
        document.getElementById('cusip').value = ""
        document.getElementById('ticker').value = ""
        document.getElementById('sharesQuantity').value = ""
        document.getElementById('PurchaseDate').value = ""
        document.getElementById('marketPrice').value = ""
        document.getElementById('totalCost').value = ""
        document.getElementById('unitCost').value = ""
        document.getElementById('totalMarketValue').value = ""
        document.getElementById('dontPrice').checked = false

        let formSaveBtn = document.getElementById("formSaveBtn");
        let formSaveAddAddressBtn = document.getElementById("formSaveAddAddressBtn");


        ;



    } else if (formValue == 2) {


        document.getElementById('formHeading').innerHTML = 'Edit Form'
        document.getElementById('identifier').value = data.identifier
        document.getElementById('securityName').value = data.security_name
        document.getElementById('cusip').value = data.cusip
        document.getElementById('ticker').value = data.ticker
        document.getElementById('sharesQuantity').value = data.share_quantity
        document.getElementById('PurchaseDate').value = data.purchase_date
        document.getElementById('marketPrice').value = data.market_price
        document.getElementById('totalCost').value = data.total_cost_basis
        document.getElementById('unitCost').value = data.unit_cost_basis
        document.getElementById('totalMarketValue').value = data.total_market_value

        if (data.dont_price) {
            document.getElementById('dontPrice').checked = true
        }

    } else { }
}

let valueChanged = () => {


    let identifier = document.getElementById('identifier').value
    let securityName = document.getElementById('securityName').value
    let cusip = document.getElementById('cusip').value
    let ticker = document.getElementById('ticker').value
    let sharesQuantity = document.getElementById('sharesQuantity').value
    let PurchaseDate = document.getElementById('PurchaseDate').value
    let marketPrice = document.getElementById('marketPrice').value
    let totalCost = document.getElementById('totalCost').value
    let unitCost = document.getElementById('unitCost').value
    let totalMarketValue = document.getElementById('totalMarketValue').value
    let formControlAccountID = document.getElementById('formControlAccountID').value
    let securityType = document.getElementById('securityType').value


    if (
        identifier == "" ||
        securityName == "" ||
        cusip == "" ||
        ticker == "" ||
        sharesQuantity == "" ||
        PurchaseDate == "" ||
        marketPrice == "" ||
        totalCost == "" ||
        unitCost == "" ||
        totalMarketValue == "" ||
        formControlAccountID == "" ||
        securityType == ""

    ) {
        console.log('some fields are empty');
        



    } else {
        console.log('all fields filled');
        

    }

}


let populateSecurityType = () => {
    let selectField = document.getElementById('securityType')
    let options = "<option value=''> -Select- </option>"
    let securityType = data.security_type

    for (let index = 0; index < securityType.length; index++) {
        options += "<option value= " + securityType[index] + ">" + securityType[index] + "</option>";

    }
    selectField.innerHTML = options
}

let populateAccountData = () => {
    let selectField = document.getElementById('formControlAccountID')
    let options = "<option value=''> -Select- </option>"
    let accData = data.account_id

    for (let index = 0; index < accData.length; index++) {
        options += "<option value= " + accData[index] + ">" + accData[index] + "</option>";

    }
    selectField.innerHTML = options

}




document.addEventListener("DOMContentLoaded", () => {
    populateSecurityType()
    populateAccountData()
    document.getElementById('formHeading').innerHTML = data.formType

    $(function () {
        $("#PurchaseDate").datepicker();
    });
})


