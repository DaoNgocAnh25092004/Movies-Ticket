// ----------------------------Xử lý lấy dữ liệu từ trang thông tin
// Lấy các biến từ localStorage ở trang khác
var imgSmallInfoMovieSrc = localStorage.getItem('imgSmallInfoMovieSrc');
var movieId = localStorage.getItem('movieId');
var boxInnerHTML = localStorage.getItem('timeSlected');
var nameCity = localStorage.getItem('nameCity');
var nameAddress = localStorage.getItem('nameAddress');
var nameMovieInfoMovieInnerHTML = localStorage.getItem('nameMovieInfoMovieInnerHTML');
var stringDay = localStorage.getItem('stringDay');
var nameRap = localStorage.getItem('nameRap');

//Truyền dữ liệu
const boxTime1 = document.querySelector('.container__buy--box1__change--time p')
const imgBox = document.querySelector('.container__buy--box2__info--img img')
const timeMovie = document.querySelector('.container__buy--box2__info--name div:first-child')
const cityMovie = document.querySelector('.container__buy--box2__info--name div:nth-child(2)')
const nameCinema = document.querySelector('.container__buy--box2__info--name div:nth-child(3) p:first-child')
const nameRapText = document.querySelector('.container__buy--box2__info--name div:nth-child(3) p:last-child')
const boxTime2 = document.querySelector('.container__buy--box2__info--name div:nth-child(4) div:first-child p:last-child')
const dayBuy = document.querySelector('.container__buy--box2__info--name div:nth-child(4) div:last-child')


boxTime1.innerHTML = boxInnerHTML
imgBox.src = imgSmallInfoMovieSrc
timeMovie.innerHTML = nameMovieInfoMovieInnerHTML
cityMovie.innerHTML = nameCity
nameCinema.innerHTML = nameAddress
nameRapText.innerHTML = nameRap
boxTime2.innerHTML = boxInnerHTML
dayBuy.innerHTML = stringDay

// ---------------------------------------------------------------------------------------
//Xử lý quy trình mua vé
const opacityStep = document.querySelectorAll("#step--buy div");

opacityStep.forEach(item => {
    if (!item.classList.contains("step--buy__tick")) {
        item.classList.add("step--buy__unmarked");
    }
})
//--------------------------------- Xử lý chọn ghế
// Xử lý chọn ghế
const messageChair = document.getElementById('message__chair');
const btnCloseMessageChair = document.querySelector('.btn--close__message--chair')
const overlayMessageChair = document.querySelector('.overlay--message__chair')


//Thoát thông báo lỗi
btnCloseMessageChair.addEventListener('click', () => {
    messageChair.classList.add('hide');
    overlayMessageChair.classList.add('hide');
})

overlayMessageChair.addEventListener('click', () => {
    messageChair.classList.add('hide');
    overlayMessageChair.classList.add('hide');
})


const chairsRow1 = document.querySelectorAll('.container__buy--box1__select--chair li:first-child span');
const chairsRow2 = document.querySelectorAll('.container__buy--box1__select--chair li:nth-child(2) span');
const chairsRow3 = document.querySelectorAll('.container__buy--box1__select--chair li:nth-child(3) span');
const chairsRow4 = document.querySelectorAll('.container__buy--box1__select--chair li:nth-child(4) span');
const chairsRow5 = document.querySelectorAll('.container__buy--box1__select--chair li:nth-child(5) span');
const chairsRow6 = document.querySelectorAll('.container__buy--box1__select--chair li:nth-child(6) span');
const chairsRow7 = document.querySelectorAll('.container__buy--box1__select--chair li:nth-child(7) span');
const chairsRow8 = document.querySelectorAll('.container__buy--box1__select--chair li:nth-child(8) span');
//Hàng 1
chairRowEvent(chairsRow1, '.container__buy--box1__select--chair li:first-child');
//Hàng 2
chairRowEvent(chairsRow2, '.container__buy--box1__select--chair li:nth-child(2)');

//Hàng 3
chairRowEvent(chairsRow3, '.container__buy--box1__select--chair li:nth-child(3)');

//Hàng 4
chairRowEvent(chairsRow4, '.container__buy--box1__select--chair li:nth-child(4)');

//Hàng 5
chairRowEvent(chairsRow5, '.container__buy--box1__select--chair li:nth-child(5)');

//Hàng 6
chairRowEvent(chairsRow6, '.container__buy--box1__select--chair li:nth-child(6)');

//Hàng 7
chairRowEvent(chairsRow7, '.container__buy--box1__select--chair li:nth-child(7)');

//Hàng 8
chairRowEvent(chairsRow8, '.container__buy--box1__select--chair li:nth-child(8)');


function chairRowEvent(row, chairPurchased) {
    row.forEach(chair => {
        chair.addEventListener('click', () => {
            // Kiểm tra xem ghế đã được chọn chưa

            if (!chair.classList.contains('container__buy--box1__chair--selected')) {

                // Kiểm tra xem ghế có thể chọn được không
                if (canSelectChair(chair, row, chairPurchased)) {
                    chair.classList.add('container__buy--box1__chair--selected');

                } else {
                    //Hiển thị thông báo lỗi
                    messageChair.classList.remove('hide');
                    overlayMessageChair.classList.remove('hide');
                }
            } else {
                // Nếu ghế đã được chọn, hủy chọn ghế
                chair.classList.remove('container__buy--box1__chair--selected');
            }
        });
    });
}


function canSelectChair(selectedChair, chairRow, rowPurchase) {
    const selectedChairs = document.querySelectorAll('.container__buy--box1__chair--selected');
    const purchasedChairs = document.querySelectorAll(rowPurchase + ' .container__buy--box1__chair--purchase');
    // const lengthRowSelectedChairs = chairRow.querySelectorAll('.container__buy--box1__chair--selected');
    // Lấy vị trí ghế đã được chọn
    let selectChairIndex = Array.from(chairRow).indexOf(selectedChair);

    // Lấy vị trí của ghế đã được mua
    let purchasedChairIndex = Array.from(purchasedChairs).map(chair => {
        let chairIndex = Array.from(chairRow).indexOf(chair);
        return chairIndex;
    });

    // Lấy vị trí của các ghế đã chọn
    let selectedChairIndexes = Array.from(selectedChairs).map(chair => {
        let chairIndex = Array.from(chairRow).indexOf(chair);
        return chairIndex;
    });

    // Nếu không có ghế nào được chọn, cho phép chọn ghế đầu tiên=
    let i = 0;
    chairRow.forEach(item => {
        if (item.classList.contains('container__buy--box1__chair--selected')) {
            i++;
        }
    })
    if (i == 0) {
        return true;
    }

    //Kiểm tra xem ghế chọn hai bên ghế đã mua thì vẫn cho chọn
    if (purchasedChairIndex.includes(selectChairIndex - 1) || purchasedChairIndex.includes(selectChairIndex + 1)) {
        return true;
    }

    // Kiểm tra xem ghế được chọn có ở bên cạnh một ghế đã chọn trước đó không
    if (selectedChairIndexes.includes(selectChairIndex - 1) || selectedChairIndexes.includes(selectChairIndex + 1)) {
        return true;
    }

    return false;
}



//------------------------ Xử lý giá ghế
const boxDoubleChair = document.querySelector('.container__buy--box2__info--chair > div:last-child');
const boxSingleChair = document.querySelector('.container__buy--box2__info--chair > div:first-child');
const doubleChairs = document.querySelectorAll('.container__buy--box1__select--chair .double__chair span');
const singleChairs = document.querySelectorAll('.container__buy--box1__select--chair .single__chair span');
const allChair = document.querySelectorAll('.container__buy--box1__select--chair span');
const quanitySingleChair = document.querySelector('.quantity__single--chair p:last-child');
const quanityDoubleChair = document.querySelector('.quantity__double--chair p:last-child');
const boxIndexDoubleChair = document.querySelector('.index__double--chair');
const boxIndexSingleChair = document.querySelector('.index__single--chair');
const textPriceSingleChair = document.querySelector('.price__single--chair');
const textPriceDoubleChair = document.querySelector('.price__double--chair');
const textTotalPrice = document.querySelector('.price__total--chair')

const priceSingleChair = 100000; //Gía ghế đơn
const priceDoubleChair = 200000; // Gía ghế đôi



//Xử lý khi click vào ghế đôi
doubleChairs.forEach(doubleChair => {
    doubleChair.addEventListener('click', () => {
        let count = 0; // biến đếm số lượng ghế
        let i = 0; // biến đếm số ghế không được selected
        doubleChairs.forEach(doubleChair2 => {
            count++;
            if (!doubleChair2.classList.contains('container__buy--box1__chair--selected')) {
                i++;
            }
        })
        let quanityChairSelected = count - i;
        if (i == count) {
            boxDoubleChair.classList.add('hide')
        } else {
            boxDoubleChair.classList.remove('hide')
            //Điền số lượng ghế
            quanityDoubleChair.innerHTML = '';
            quanityDoubleChair.innerHTML = quanityChairSelected;

            //Xử lý lấy số ghê
            contentChair('doubleChair', doubleChairs, boxIndexDoubleChair);

            //Tính giá tiền ghế 
            let price = quanityChairSelected * priceDoubleChair
            let formattedNumber = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
            textPriceDoubleChair.innerHTML = formattedNumber;
        }
    })
})


//Xử lý khi click vào ghế đơn
singleChairs.forEach(singleChair => {
    singleChair.addEventListener('click', () => {
        let count = 0; // biến đếm số lượng ghế
        let i = 0; // biến đếm số ghế không được selected
        singleChairs.forEach(singleChair2 => {
            count++;
            if (!singleChair2.classList.contains('container__buy--box1__chair--selected')) {
                i++;
            }
        })
        let quanityChairSelected = count - i;
        if (i == count) {
            boxSingleChair.classList.add('hide');
        } else {
            boxSingleChair.classList.remove('hide')
            //Điền số lượng ghế
            quanitySingleChair.innerHTML = '';
            quanitySingleChair.innerHTML = quanityChairSelected;

            //Xử lý lấy số ghê
            contentChair('singleChair', singleChairs, boxIndexSingleChair);

            //Tính giá tiền ghế 
            let price = quanityChairSelected * priceSingleChair
            let formattedNumber = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
            textPriceSingleChair.innerHTML = formattedNumber;
        }
    })
})

// Xử lý lấy nội dụng và vị trí của ghế được chọn
function contentChair(check, typeChair, boxTypeChair) {
    boxTypeChair.innerHTML = '';

    typeChair.forEach(span => {
        if (span.classList.contains('container__buy--box1__chair--selected')) {
            let paragraph = span.closest('li').querySelector('p');
            //Lấy vị trí hàng
            let paragraphContentP = paragraph.textContent.trim();

            // Lấy ra nội dung của thẻ span
            let spanContent = span.textContent.trim();

            let p = document.createElement('p');
            if (check == 'doubleChair') {
                // Tách các số trong spanContent
                let spanNumbers = spanContent.match(/\d+/g);
                let firstNumber = spanNumbers[0]; // Lấy số đầu tiên
                let lastNumber = spanNumbers[1]; // Lấy số đầu tiên
                p.innerHTML = paragraphContentP + lastNumber + ' - ' + paragraphContentP + firstNumber;
            }
            if (check == 'singleChair') {
                p.innerHTML = paragraphContentP + spanContent;
            }
            boxTypeChair.appendChild(p);
        }
    });
}

//Xử lý tính giá tổng
allChair.forEach(allChair => {
    allChair.addEventListener('click', () => {
        let priceDoubleChair = parseFloat(textPriceDoubleChair.innerText.replace(/[^\d]/g, ''));
        let priceSingleChair = parseFloat(textPriceSingleChair.innerText.replace(/[^\d]/g, ''));

        // Kiểm tra nếu giá trị không hợp lệ (NaN), gán giá trị mặc định là 0
        if (isNaN(priceDoubleChair)) {
            priceDoubleChair = 0;
        }
        if (isNaN(priceSingleChair)) {
            priceSingleChair = 0;
        }

        let totalPrice = priceDoubleChair + priceSingleChair;
        let formattedNumber = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

        textTotalPrice.innerHTML = formattedNumber;
    })
})


// -------------------------------- Chuyển sang chọn thức ăn
const btnContinue = document.querySelector('.btn__continue--ticket');
const titleBuyFood = document.querySelector('#step--buy div:nth-child(2)');
const titleBuyChair = document.querySelector('#step--buy div:nth-child(1)');
const boxFood = document.querySelector('.container__buy--box1 > div:nth-child(2)')
const boxChair = document.querySelector('.container__buy--box1 > div:first-child')
const boxInfoFoodSelected = document.querySelector('.container__buy--box2__info--food')
const txtMessageErr = document.querySelector('.message__chair--card p')

let clickCount = 0; //Biến đếm số lượng lần click

btnContinue.addEventListener('click', () => {
    clickCount++;

    switch (clickCount) {
        case 1:
            //Cập nhật vị trí quy trình thanh toán và hiển thị thức ăn
            IndexPage(titleBuyChair, titleBuyFood);
            checkSelectedChair();
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            break;
    }
});

//Hàm kiểm tra xem chọn ghế chưa
function checkSelectedChair() {
    console.log(textTotalPrice.innerHTML.trim());
    if (textTotalPrice.innerHTML.trim() == '0<span>₫</span>') {
    txtMessageErr.innerHTML = 'Bạn chưa có chọn ghế!'
    messageChair.classList.remove('hide')
    overlayMessageChair.classList.remove('hide');
    clickCount = 0;
    return;
} else {
    //Điền lại thông tin lỗi
    txtMessageErr.innerHTML = 'Việc chọn vị trí ghế của bạn không được để trống 1 ghế ở bên trái, giữa hoặc bên phải trên cùng hàng ghế mà bạn vừa chọn. Có thể chọn hai bên ghế đã bán.'
    //Ân ghế
    boxChair.classList.add('hide')
    //Hiện thức ăn
    boxFood.classList.remove('hide')
}
}


//Hàm update dữ liệu thức ăn
function updateHtmlFood() {
    food.forEach(food => {
        let formattedNumber = food.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

        let priceString = formattedNumber

        boxFood.innerHTML +=
            `
        <div class="container__buy--box1__food">
        <div class="container__buy--box1__food__img">
            <img src="${food.imgFood}" alt="">
        </div>
        <div class="container__buy--box1__food__content">
            <div class="container__buy--box1__food__content--name">
                ${food.nameFood}
            </div>

            <div class="container__buy--box1__food__content--note">
            ${food.noteFood}
            </div>

            <div class="container__buy--box1__food__content--price">
                <p>Giá:</p>
                <p>${priceString}</p>
            </div>
            <div class="container__buy--box1__food__content--btn">
                <p><i class="fa-solid fa-minus"></i></p>
                <p>0</p>
                <p><i class="fa-solid fa-plus"></i></p>
            </div>
        </div>

    </div>
        `
    })

    quanityFood()
}
updateHtmlFood()
// //Hàm thực hiện vị trí index của việc mua
function IndexPage(htmlBefore, htmlCurrent) {
    htmlCurrent.classList.add('step--buy__tick');
    htmlCurrent.classList.remove('step--buy__unmarked');
    htmlBefore.classList.add('step--buy__unmarked');
}

//Hàm thực hiện tăng số lượng food
function quanityFood() {
    const btnPlusFoods = document.querySelectorAll('.container__buy--box1__food__content--btn p:last-child');
    const btnMinusFoods = document.querySelectorAll('.container__buy--box1__food__content--btn p:first-child');
    const boxValueQuantityFoods = document.querySelectorAll('.container__buy--box1__food__content--btn p:nth-child(2)');
    const nameFood = document.querySelectorAll('.container__buy--box1__food__content--name')
    const priceFood = document.querySelectorAll('.container__buy--box1__food__content--price p:last-child')

    btnPlusFoods.forEach((btnPlusFood, index) => {
        let value = 0;
        btnPlusFood.addEventListener('click', () => {
            value++;
            boxValueQuantityFoods[index].innerHTML = value;

            //Bật info food 
            boxInfoFoodSelected.classList.remove('hide')

            //Điền số lượng thức ăn được chọn
            checkNameQualityFood(nameFood[index].innerHTML.trim(), value)

            //Tính tiền với mỗi sản phẩm
            priceFoodElement(nameFood[index].innerHTML.trim(), value, priceFood[index].innerHTML.trim())

            //Tính tổng tiền
            totalPriceFoodAndChair()

            checkNameShowFood(nameFood[index].innerHTML.trim())
        });

        btnMinusFoods[index].addEventListener('click', () => {
            if (value > 0) {
                value--;
            }
            //Nếu số lượng 0 thì ẩn đi
            if (value === 0) {
                checkNameHiddenFood(nameFood[index].innerHTML.trim())
                boxInfoFoodSelected.classList.add('hide')

            }
            //Điền số lượng thức ăn được chọn
            checkNameQualityFood(nameFood[index].innerHTML.trim(), value)

            //Tính tiền với mỗi sản phẩm
            priceFoodElement(nameFood[index].innerHTML.trim(), value, priceFood[index].innerHTML.trim())

            //Tính tổng tiền
            totalPriceFoodAndChair()

            boxValueQuantityFoods[index].innerHTML = value;
        });
    });
}

const boxShowFood1 = document.querySelector('.container__buy--box2__info--food > div:first-child');
const boxShowFood2 = document.querySelector('.container__buy--box2__info--food > div:nth-child(2)');
const boxShowFood3 = document.querySelector('.container__buy--box2__info--food > div:nth-child(3)');
const boxShowFood4 = document.querySelector('.container__buy--box2__info--food > div:nth-child(4)');
const nameboxShowFood1 = boxShowFood1.querySelector('div:last-child > p:first-child');
const nameboxShowFood2 = boxShowFood2.querySelector('div:last-child > p:first-child');
const nameboxShowFood3 = boxShowFood3.querySelector('div:last-child > p:first-child');
const nameboxShowFood4 = boxShowFood4.querySelector('div:last-child > p:first-child');
const quanityFoodSelected1 = boxShowFood1.querySelector('div:first-child > p:last-child');
const quanityFoodSelected2 = boxShowFood2.querySelector('div:first-child > p:last-child');
const quanityFoodSelected3 = boxShowFood3.querySelector('div:first-child > p:last-child');
const quanityFoodSelected4 = boxShowFood4.querySelector('div:first-child > p:last-child');
const priceFoodSelected1 = boxShowFood1.querySelector('div:last-child > p:last-child');
const priceFoodSelected2 = boxShowFood2.querySelector('div:last-child > p:last-child');
const priceFoodSelected3 = boxShowFood3.querySelector('div:last-child > p:last-child');
const priceFoodSelected4 = boxShowFood4.querySelector('div:last-child > p:last-child');
const priceFoodSelected = document.querySelectorAll('.container__buy--box2__info--food > div > div:last-child > p:last-child')

//Hàm  hiện các ô tính tiền
function checkNameShowFood(name) {
    if (name == nameboxShowFood1.innerHTML.trim()) {
        boxShowFood1.classList.remove('hide')
    }
    if (name == nameboxShowFood2.innerHTML.trim()) {
        boxShowFood2.classList.remove('hide')
    }
    if (name == nameboxShowFood3.innerHTML.trim()) {
        boxShowFood3.classList.remove('hide')
    }
    if (name == nameboxShowFood4.innerHTML.trim()) {
        boxShowFood4.classList.remove('hide')
    }
}

//Hàm  ẩn các ô tính tiền
function checkNameHiddenFood(name) {
    if (name == nameboxShowFood1.innerHTML.trim()) {
        boxShowFood1.classList.add('hide')
    }
    if (name == nameboxShowFood2.innerHTML.trim()) {
        boxShowFood2.classList.add('hide')
    }
    if (name == nameboxShowFood3.innerHTML.trim()) {
        boxShowFood3.classList.add('hide')
    }
    if (name == nameboxShowFood4.innerHTML.trim()) {
        boxShowFood4.classList.add('hide')
    }
}

//Hàm tính số lượng 
function checkNameQualityFood(name, value) {
    if (name == nameboxShowFood1.innerHTML.trim()) {
        quanityFoodSelected1.innerHTML = value
    }
    if (name == nameboxShowFood2.innerHTML.trim()) {
        quanityFoodSelected2.innerHTML = value
    }
    if (name == nameboxShowFood3.innerHTML.trim()) {
        quanityFoodSelected3.innerHTML = value
    }
    if (name == nameboxShowFood4.innerHTML.trim()) {
        quanityFoodSelected4.innerHTML = value
    }
}

function priceFoodElement(name, value, price) {
    let numberPrice = parseFloat(price.replace(/[^\d]/g, ''));
    if (name == nameboxShowFood1.innerHTML.trim()) {
        numberPrice *= value
        let formattedNumber = numberPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        priceFoodSelected1.innerHTML = formattedNumber
    }
    if (name == nameboxShowFood2.innerHTML.trim()) {
        numberPrice *= value
        let formattedNumber = numberPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        priceFoodSelected2.innerHTML = formattedNumber
    }
    if (name == nameboxShowFood3.innerHTML.trim()) {
        numberPrice *= value
        let formattedNumber = numberPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        priceFoodSelected3.innerHTML = formattedNumber
    }
    if (name == nameboxShowFood4.innerHTML.trim()) {
        numberPrice *= value
        let formattedNumber = numberPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        priceFoodSelected4.innerHTML = formattedNumber
    }
}

//Hàm tính tổng giá tiền ghê và thức ăn
function totalPriceFoodAndChair() {
    let totalPriceFood = 0;

    // Tính tổng giá trị của thức ăn
    priceFoodSelected.forEach(price => {
        let numberPrice = parseFloat(price.innerHTML.trim().replace(/[^\d]/g, ''));

        if (isNaN(numberPrice)) {
            numberPrice = 0;
        }

        totalPriceFood += numberPrice;
    });

    // Tính giá ghế
    let priceDoubleChair = parseFloat(textPriceDoubleChair.innerText.replace(/[^\d]/g, ''));
    let priceSingleChair = parseFloat(textPriceSingleChair.innerText.replace(/[^\d]/g, ''));

    // Kiểm tra nếu giá trị không hợp lệ (NaN), gán giá trị mặc định là 0
    if (isNaN(priceDoubleChair)) {
        priceDoubleChair = 0;
    }
    if (isNaN(priceSingleChair)) {
        priceSingleChair = 0;
    }

    let totalPriceChair = priceDoubleChair + priceSingleChair;

    // Tổng giá trị thức ăn và ghế
    console.log(totalPriceFood);
    let totalPrice = totalPriceFood + totalPriceChair;
    let formattedNumber = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    textTotalPrice.innerHTML = formattedNumber;
}
