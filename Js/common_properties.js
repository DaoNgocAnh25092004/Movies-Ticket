var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;


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

//Sự kiện bấm nút thanh tìm kiếm
const iconSearchHeader = document.querySelector('.header__right__search i');
const inputSeachHeader = document.querySelector('.header__right__search--input');

iconSearchHeader.addEventListener('click', () => {
    inputSeachHeader.classList.toggle('input__search--show');
})
//Sự kiện click logo 
const logoMovies = document.querySelector('.header__left img');

logoMovies.addEventListener('click', () => {
    const animationNextPage = document.getElementById('next--page');

    animationNextPage.style.display = 'block';
    setTimeout(() => {
        animationNextPage.style.display = 'none';
        window.location.href = 'index.html';
    }, loadTime);
})
//sự kiện bấm icon user 
const iconUserHeader = document.querySelector('.header__right__user i');

iconUserHeader.addEventListener('click', () => {
    const animationNextPage = document.getElementById('next--page');

    animationNextPage.style.display = 'block';
    setTimeout(() => {
        animationNextPage.style.display = 'none';
        window.location.href = 'login.html';
    }, loadTime);
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
                animationNextPage.style.display = 'block';
                setTimeout(() => {
                    animationNextPage.style.display = 'none';
                    window.location.href = `info_movie.html?movie-id=${addressIdMovie}`;
                }, loadTime);
            });
            posterMovie.addEventListener('click', () => {
                const animationNextPage = document.getElementById('next--page');

                animationNextPage.style.display = 'block';
                setTimeout(() => {
                    animationNextPage.style.display = 'none';
                    window.location.href = `info_movie.html?movie-id=${addressIdMovie}`;
                }, loadTime);
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
            }, loadTime);

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
