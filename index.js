const headers = {
    one: "Muito boom ‼✔",
    two: "Excelentee 🥰🥳",
    tree: "Otimooo 😮🤩",
    four: "Correee 🏃🏃‍♀️",
    five: "Imperdiveel 😘😋",
    six: "Incriveel 😵😯", 
    seven: "Lindinhoo 😍🤤", 
    eight: "Vai acabar rapidoo 🏃🤑",
    nine: "Muito top 🔝✌️",
    ten: "Menor preçoo 💲💲",
}


function replyClick(clickedID)
{
    
    var clickedButton = clickedID 
    // console.log(clickedButton)

    for (const [key, value] of Object.entries(headers)) {
        const keyCheck = key
        if (clickedButton == key) {
        console.log(headers[keyCheck])
        }
    
    }
}











    










// alert(clickBt2)

// document.getElementById('result').innerHTML = headers[teste]

// const productName = document.getElementById('productName').value
// console.log(productName)