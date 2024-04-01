
//Sự kiện con chuột
const cursor = document.querySelector('.cursor');
var timeout;
document.addEventListener('mousemove', (e) => {
    let x = e.pageX - 10;
    let y = e.clientY - 10;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

    //Khi chuột dừng lại
    function mouseStoppped() {
        cursor.style.display = 'none';
    }
    clearTimeout(timeout);
    if (window.innerWidth < 740) {
        timeout = setTimeout(mouseStoppped, 1000)
    }
    timeout = setTimeout(mouseStoppped, 5000)

})

document.addEventListener('mouseout', (e) => {
    cursor.style.display = 'none';
})
document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');

    }, 500);
})

//======================================== Xử lý tìm kiếm phim

const iconSearchHeader = document.querySelector('.header__right__search > i');
const inputSearchHeader = document.querySelector('.header__right__search--input');
const boxInputSearch = document.querySelector('.header__right__search--input input')
const todosSearch = document.querySelector('.todos__search')
const dataMovieSearch = document.querySelectorAll('.header__right__search--list__movies div')
const boxMovieSearch = document.querySelector('.header__right__search--list__movies')
const boxHistorySearch = document.querySelector('.todos__search')

//Khi click icon search
iconSearchHeader.addEventListener('click', () => {
    inputSearchHeader.classList.toggle('input__search__show--width');

    setTimeout(() => {
        inputSearchHeader.classList.toggle('input__search__show--height');
    }, 500);
})

//Xử lý sự kiện khi tìm kiếm ẩn hiện 
boxInputSearch.addEventListener('input', () => {
    boxInputSearch.focus()
    let valueInput = boxInputSearch.value.trim();
    
    //Nếu giá trị không rỗng hiện thị danh sách
    if (!(valueInput == '')) {
        if (boxMovieSearch && boxMovieSearch.classList.contains('hide')) {
            boxMovieSearch.classList.remove('hide')
        }
        if (!boxHistorySearch.classList.contains('hide')) {
            boxHistorySearch.classList.add('hide')
        }
        //Gọi hàm so sánh giá trị
        eqSearhData()
        //Gọi hàm loading dữ liệu
        loadingDataSearch();
        //Gọi lại hàm chuyển trang khi click btnBuyTicket
        clickBuyTicket('.header__right__search--list__movies > div', '.header__right__search--list__movies > div > div');
    }

    //Nếu giá trị rỗng thì hiện lịch sử tìm kiếm
    if (valueInput == '') {
        if (!boxMovieSearch.classList.contains('hide')) {
            boxMovieSearch.classList.add('hide')
        }
        if (boxHistorySearch.classList.contains('hide')) {
            boxHistorySearch.classList.remove('hide')
        }
    }
})

//Xử lý khi điền focus và chuyển trang
boxInputSearch.addEventListener('focus', () => {
    //Gọi hàm loading dữ liệu
    loadingDataSearch();
    //Khi blur sẽ thực hiện chuyển trang
    boxInputSearch.addEventListener('blur', () => {
        clickBuyTicketSearch('.header__right__search--list__movies > div', '.header__right__search--list__movies > div > div');
    })
})

//Hàm chuyển trang và lưu lịch sử tìm kiếm
function clickBuyTicketSearch(list, btnBuy) {
    const movieList = document.querySelectorAll(list);
    movieList.forEach((movie) => {
        const btnBuyTicket = movie.querySelector(btnBuy);
        const addressIdMovie = movie.getAttribute('data-movie-id');
        const posterMovie = movie.querySelector('img'); // Khi ở màn hình điện thoại

        if (btnBuyTicket && addressIdMovie !== null && posterMovie) {
            btnBuyTicket.addEventListener('click', () => {
                const animationNextPage = document.getElementById('next--page');
                animationNextPage.style.display = 'block';

                //Gọi hàm xử lý lưu lịch sử tìm kiếm
                handleSaveDataSearch();

                setTimeout(() => {
                    animationNextPage.style.display = 'none';
                    window.location.href = `info_movie.html?movie-id=${addressIdMovie}`;
                }, 1000);
            });
        }
    });
}


//Xử lý lưu thông tin lịch sử tìm kiếm
boxInputSearch.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        //Gọi hàm xử lý lưu lịch sử tìm kiếm
        handleSaveDataSearch();
    }
})

//Hàm xử lý khi lưu lịch sử
function handleSaveDataSearch() {
    let valueInputHistory = boxInputSearch.value.trim();
    let dataStorage = JSON.parse(localStorage.getItem('dataSearch'));

    if (valueInputHistory.length > 0) {
        //Xử lý khi trùng lịch sử tìm kiếm
        let isExist = false;
        dataStorage.forEach(item => {
            if (item === valueInputHistory) {
                isExist = true;
            }
        });
        if (!isExist) {
            addDataElement(valueInputHistory);
            saveDataSearch();
        }
    }
}

//Thêm phần tử lịch sử trình duyệt
function addDataElement(data) {
    var li = document.createElement('li')

    li.innerHTML = `
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>${data}</span>
                        <i class="fa-solid fa-trash"></i>
                    `

    //Khi click vào một item lịch sử trình duyệt thì điền giá trị vào ô input và hiện thị ra phim theo giá trị
    li.addEventListener('click', (event) => {
        if (event.target.tagName !== 'I') {
            boxInputSearch.value = li.querySelector('span').innerText;
            boxInputSearch.focus()
            let valueInput = boxInputSearch.value;
            if (!(valueInput == '')) {
                if (boxMovieSearch && boxMovieSearch.classList.contains('hide')) {
                    boxMovieSearch.classList.remove('hide')
                }
                if (!boxHistorySearch.classList.contains('hide')) {
                    boxHistorySearch.classList.add('hide')
                }
                //Gọi hàm loading dữ liệu
                loadingDataSearch();

                let listMovies = document.querySelectorAll('.header__right__search--list__movies > div')
                let valueSearch = valueInput.trim().toLowerCase();
                listMovies.forEach(movie => {
                    if (movie.innerText.toLowerCase().includes(valueSearch)) {
                        movie.classList.remove('hide');
                    } else {
                        movie.classList.add('hide');
                    }
                })
            }
        }
    })
    //Xử lý khi click xóa dữ liệu tìm kiếm
    li.querySelector('i:last-child').addEventListener('click', function () {
        if (!(boxMovieSearch && boxMovieSearch.classList.contains('hide'))) {
            boxMovieSearch.classList.add('hide')
        }
        boxInputSearch.value = '';
        boxInputSearch.focus()
        this.parentElement.remove();
        saveDataSearch()
    })

    //Thực hiện thêm vào đầu danh sách
    if (todosSearch.firstChild) {
        todosSearch.insertBefore(li, todosSearch.firstChild);
    } else {
        todosSearch.appendChild(li);
    }
}

//Hàm thực hiện lưu lịch sử trình duyệt
function saveDataSearch() {
    let dataSearch = todosSearch.querySelectorAll('li');
    let dataStorage = [];

    dataSearch.forEach(item => {
        let text = item.querySelector('span').innerText;
        dataStorage.push(text)
    })
    localStorage.setItem('dataSearch', JSON.stringify(dataStorage));

}

//Hàm khởi tạo lịch sử trình duyệt
function initDataSearch() {
    let data = JSON.parse(localStorage.getItem('dataSearch'));
    if (data) {
        data.forEach(dataItem => {
            addDataElement(dataItem)
        })
    }
}
//Gọi hàm khởi tạo lịch sử trình duyệt
initDataSearch();


//Hàm Loading dữ liệu lên thanh search
function loadingDataSearch() {
    boxMovieSearch.innerHTML = ''
    dataSearch.forEach(item => {
        boxMovieSearch.innerHTML += `<div data-movie-id="${item.id}">   
                                        <div>
                                            <div>
                                                <img src="${item.imgPoster}" alt="">
                                            </div>
                                            <div class = "header__right__search--list__movies--name">
                                                ${item.name}
                                            </div>
                                        </div>
                                    </div>`
    })
}

//Hàm so sánh giá trị để hiện ra phim theo giá trị
function eqSearhData() {
    let valueSearch = boxInputSearch.value.trim().toLowerCase();
    boxInputSearch.addEventListener('input', () => {
        valueSearch = boxInputSearch.value.trim().toLowerCase();
        let listMovies = document.querySelectorAll('.header__right__search--list__movies > div')

        listMovies.forEach(movie => {
            if (movie.innerText.toLowerCase().includes(valueSearch)) {
                movie.classList.remove('hide');
            } else {
                movie.classList.add('hide');
            }
        })
    })
}

//======================================== Xử lý tìm kiếm phim

//Sự kiện click logo 
const logoMovies = document.querySelector('.header__left img');

logoMovies.addEventListener('click', () => {
    const animationNextPage = document.getElementById('next--page');

    animationNextPage.style.display = 'block';
    setTimeout(() => {
        animationNextPage.style.display = 'none';
        window.location.href = 'index.html';
    }, 1000);
})
//sự kiện bấm icon user 
const iconUserHeader = document.querySelector('.header__right__user i');

iconUserHeader.addEventListener('click', () => {
    const animationNextPage = document.getElementById('next--page');

    animationNextPage.style.display = 'block';
    setTimeout(() => {
        animationNextPage.style.display = 'none';
        window.location.href = 'login.html';
    }, 1000);
})

//sự kiện nút đổi màu
const btnChangeColorWeb = document.getElementById("wrapper-btn")

btnChangeColorWeb.addEventListener('change', function () {
    document.body.classList.toggle('body--color__change');
});

// Sự kiện click trái tim ở movie list
function clickHeart() {
    const movieItem = document.querySelectorAll('.movie__item');

    movieItem.forEach((item) => {
        const heartMovieList = item.querySelector('.movie__item--footer i');

        heartMovieList.addEventListener('click', () => {
            heartMovieList.classList.toggle('movie__item--footer__icon');
        })
    })
}
clickHeart();




// ------------------------------Sự kiện slider dưới header
function sliderHeader() {
    $(document).ready(function () {
        $('.slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
            draggable: true,
            prevArrow: `<button type='button' class='slick-prev slider-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
            nextArrow: `<button type='button' class='slick-next slider-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        arrows: false,
                        variableWidth: false,
                        centerMode: false,
                    }
                }
            ]
        });

    });
}

//Sự kiện close trailer 
const trailerContainer = document.getElementById('trailer');
const iframeContainer = document.querySelector('#trailer div')

function showTrailer() {
    const movieList = document.querySelectorAll('#movie__list div');

    movieList.forEach((movie) => {
        const btnTrailer = movie.querySelector('.movie__item--img__detail--container div:last-child')
        const addressIdMovie = movie.getAttribute('data-movie-id');

        if (addressIdMovie) {
            if (addressIdMovie.charAt(0) === 'B') {
                movieIsShowing.forEach((item) => {
                    if (addressIdMovie === item.id && btnTrailer) {
                        btnTrailer.addEventListener('click', () => {
                            trailerContainer.style.display = 'block';
                            iframeContainer.innerHTML = item.trailer;
                        })
                    }
                })
            }

            if (addressIdMovie.charAt(0) === 'A') {
                movieComingSoon.forEach((item) => {
                    if (addressIdMovie === item.id && btnTrailer) {
                        btnTrailer.addEventListener('click', () => {
                            trailerContainer.style.display = 'block';
                            iframeContainer.innerHTML = item.trailer;
                        })
                    }
                })
            }
        }
    })
}



//Hàm thực hiện tắt trailer
function closeTrailer() {
    trailerContainer.addEventListener('click', () => {
        iframeContainer.classList.add('animation-trailer');
        setTimeout(() => {
            iframeContainer.innerHTML = '';
            trailerContainer.style.display = 'none';
            iframeContainer.classList.remove('animation-trailer');
        }, 600);
    });
}

//Sự kiện chuyển trang khi mua vé 
function clickBuyTicket(list, btnBuy) {
    const movieList = document.querySelectorAll(list);

    movieList.forEach((movie) => {
        const btnBuyTicket = movie.querySelector(btnBuy);
        const addressIdMovie = movie.getAttribute('data-movie-id');
        const posterMovie = movie.querySelector('img'); // Khi ở màn hình điện thoại

        if (btnBuyTicket && addressIdMovie !== null && posterMovie) {
            btnBuyTicket.addEventListener('click', () => {
                const animationNextPage = document.getElementById('next--page');
                animationNextPage.style.display = 'block'
                setTimeout(() => {
                    animationNextPage.style.display = 'none';
                    window.location.href = `info_movie.html?movie-id=${addressIdMovie}`;
                }, 1000);
            });
            posterMovie.addEventListener('click', () => {
                const animationNextPage = document.getElementById('next--page');

                animationNextPage.style.display = 'block'
                setTimeout(() => {
                    animationNextPage.style.display = 'none';
                    window.location.href = `info_movie.html?movie-id=${addressIdMovie}`;
                }, 1000);
            });
        }
    });
}


//Hiệu ứng khi scroll trang
function animationScroll() {
    var animationElements = document.querySelectorAll('.show-on-scroll');

    function toggleAnimationElementInWindow(element) {
        var rect = element.getClientRects()[0];
        var heightScreen = window.innerHeight;

        if (!(rect.bottom < 0 || rect.top > heightScreen)) {
            element.classList.add('start')
        } else {
            element.classList.remove('start')
        }
    }

    function checkAnimation() {
        animationElements.forEach((element) => {
            toggleAnimationElementInWindow(element);
        })
    }

    window.onscroll = checkAnimation
}

animationScroll();

//Sự kiện khi chuyển trang
function nextPage() {
    const cardsA = document.querySelectorAll('.header__center a');
    const animationNextPage = document.getElementById('next--page');

    cardsA.forEach((card) => {
        card.addEventListener('click', () => {
            event.preventDefault();

            var hrefValue = card.getAttribute('href');
            animationNextPage.style.display = 'block';

            setTimeout(() => {
                animationNextPage.style.display = 'none';
                window.location.href = hrefValue;
            }, 1000);

        })
    })
}

//Gọi lại sự kiện khi chuyển trang
nextPage();

// Hàm thực hiện update ngày

function updateDay(currentToDay, tomorrow, dateTomorrow, afterTomorrow, dateAfterTomorrow) {
    let daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

    let currentDayMovie = new Date();

    // lấy ngày và tháng hiện tại
    let currentDayOfMonth = currentDayMovie.getDate();
    let currentMonth = (currentDayMovie.getMonth() + 1).toString().padStart(2, '0');

    // Lấy thứ, ngày mai và tháng hiện tại
    let tomorrowMovie = new Date();
    tomorrowMovie.setDate(tomorrowMovie.getDate() + 1);
    let tomorrowOfWeek = daysOfWeek[tomorrowMovie.getDay()];
    let tomorrowDayOfMonth = tomorrowMovie.getDate();
    let tomorrowMonth = (tomorrowMovie.getMonth() + 1).toString().padStart(2, '0');

    // Ngày kia và tháng tiếp theo
    let afterTomorrowMovie = new Date();
    afterTomorrowMovie.setDate(afterTomorrowMovie.getDate() + 2);
    let afterTomorrowOfWeek = daysOfWeek[afterTomorrowMovie.getDay()];
    let afterTomorrowDayOfMonth = afterTomorrowMovie.getDate();
    let afterTomorrowMonth = (afterTomorrowMovie.getMonth() + 1).toString().padStart(2, '0');

    // gán giá trị
    currentToDay.innerText = `${currentDayOfMonth}/${currentMonth}`;

    tomorrow.innerText = `${tomorrowOfWeek}`
    dateTomorrow.innerText = `${tomorrowDayOfMonth}/${tomorrowMonth}`;

    afterTomorrow.innerText = `${afterTomorrowOfWeek}`
    dateAfterTomorrow.innerText = `${afterTomorrowDayOfMonth}/${afterTomorrowMonth}`;
}

//Hiệu ứng background mưa tuyết
function randomColor() {
    var charColor = '123456789ABCDEF';
    var color = '#';

    for (let i = 0; i < 6; i++) {
        color += charColor[Math.floor(Math.random() * charColor.length)];
    }
    return color
}
var backgroundAnimation = document.querySelector('.background__animation');
var bodersArray = ['50%', '0'];
var blursArray = ['0', '5px']
var widthBackGround = document.documentElement.clientWidth;
var heightBackGround = document.documentElement.clientHeight;
var count = 100;

function createBackGround() {
    for (var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random() * widthBackGround);
        var randomTop = Math.floor(Math.random() * heightBackGround);
        var border = Math.floor(Math.random() * 2);
        var blur = Math.floor(Math.random() * 3);
        var widtdElement = Math.floor(Math.random() * 5) + 5;
        var timeAnimation = Math.floor(Math.random() * 8) + 5;

        var div = document.createElement('div');
        div.style.backgroundColor = randomColor();
        div.style.position = 'fixed';
        div.style.width = widtdElement + 'px';
        div.style.height = widtdElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.borderRadius = bodersArray[border];
        div.style.filter = 'blur(' + blursArray[blur] + ')';
        div.style.animation = 'move ' + timeAnimation + 's ease-in infinite'

        backgroundAnimation.appendChild(div);
    }
}
createBackGround()