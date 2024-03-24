// ------------------------------Sự kiện ở thanh header

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
function clickBuyTicket() {
    const movieList = document.querySelectorAll('#movie__list div');

    movieList.forEach((movie) => {
        const btnBuyTicket = movie.querySelector('.movie__item--img__detail--container div:first-child');
        const addressIdMovie = movie.getAttribute('data-movie-id');
        const posterMovie = movie.querySelector('img'); // Khi ở màn hình điện thoại

        if (btnBuyTicket && addressIdMovie !== null && posterMovie) {
            btnBuyTicket.addEventListener('click', () => {
                const animationNextPage = document.getElementById('next--page');

                animationNextPage.style.display = 'block';
                setTimeout(() => {
                    animationNextPage.style.display = 'none';
                    window.location.href = `info_movie.html?movie-id=${addressIdMovie}`;
                }, 1000);
            });
            posterMovie.addEventListener('click', () => {
                const animationNextPage = document.getElementById('next--page');

                animationNextPage.style.display = 'block';
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


var currentUrlHtml = window.location.href;

//---------------------------Sử lý sự kiện khi ở trang index
if (currentUrlHtml.endsWith('index.html')) {
    $(document).ready(function () {
        function initializeSlider() {
            $('.promotion').slick({
                infinite: true,
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 740,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                            variableWidth: false,
                        }
                    }
                ]
            });
        }
    
        // Kiểm tra xem phần tử có lớp .promotion tồn tại không
        if ($('.promotion').length > 0) {
            initializeSlider();
        }
    });
    

    //sự kiện bấm nút like
    const likeItem = document.querySelectorAll('.comment--detail__icon');

    likeItem.forEach((item) => {
        const likeList = item.querySelector('.comment--detail__icon__btn1');

        likeList.addEventListener('click', () => {
            likeList.classList.toggle('comment--detail__icon--click');
        })
    })

    // ---------------------------- Sự kiện click vào title main ở Phim
    const btnMovieIsShowing = document.querySelector('.title__main__detail--show');
    const btnMovieComingSoon = document.querySelector('.title__main__detail--comingsoon');
    const movieList = document.getElementById('movie__list');

    //click vào phim sắp chiếu
    btnMovieComingSoon.addEventListener('click', () => {
        movieList.innerHTML = '';

        //Sử lý lớp giả khi click lớp giả nó bị xuất hiện 2 vạch
        btnMovieComingSoon.classList.add('change__height--after');
        btnMovieIsShowing.classList.remove('change__height--after');

        //Vị trí index sau khi click
        btnMovieIsShowing.classList.remove('title__main__index');
        btnMovieComingSoon.classList.add('title__main__index');


        //Số lượng phim muốn lấy ra
        let limit = 8;
        let countMovieComingSoon = movieComingSoon.slice(0, limit);

        countMovieComingSoon.forEach(item => {
            movieList.innerHTML += `<div class="movie__item zoom show-on-scroll" data-movie-id="${item.id}">
                                <div class="movie__item--img">
                                    <div class="movie__item--img__detail">
                                        <div class="movie__item--img__detail--container">
                                            <div>
                                                <i class="fa-solid fa-ticket"></i>
                                                <p>Mua vé</p>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-circle-play"></i>
                                                <p>Trailer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="${item.imgPoster}" alt="">
                                </div>
                                <div class="movie__item--footer">
                                    <p class="movie__item--name">${item.name}</p>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`
        });
        //Gọi lại hàm click trái tim
        clickHeart();

        //Gọi hàm open trailer
        showTrailer();

        //Gọi lại hàm close trailer
        closeTrailer();

        //Gọi lại hàm animationScroll trang
        animationScroll();

        //Gọi lại hàm chuyển trang khi click btnBuyTicket
        clickBuyTicket();
    })

    //click vào phim đang chiếu 
    btnMovieIsShowing.addEventListener('click', () => {

        movieList.innerHTML = '';

        //Sử lý lớp giả khi click lớp giả nó bị xuất hiện 2 vạch
        btnMovieIsShowing.classList.add('change__height--after');
        btnMovieComingSoon.classList.remove('change__height--after');

        //Vị trí index sau khi click
        btnMovieComingSoon.classList.remove('title__main__index');
        btnMovieIsShowing.classList.add('title__main__index');

        //Số lượng phim muốn lấy ra
        let limit = 8;
        let countMovieComingSoon = movieIsShowing.slice(0, limit);

        countMovieComingSoon.forEach(item => {
            movieList.innerHTML += `<div class="movie__item zoom show-on-scroll" data-movie-id="${item.id}">
                                <div class="movie__item--img">
                                    <div class="movie__item--img__detail">
                                        <div class="movie__item--img__detail--container">
                                            <div>
                                                <i class="fa-solid fa-ticket"></i>
                                                <p>Mua vé</p>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-circle-play"></i>
                                                <p>Trailer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="${item.imgPoster}" alt="">
                                </div>
                                <div class="movie__item--footer">
                                    <p class="movie__item--name">${item.name}</p>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`
        });
        //Gọi lại hàm click trái tim
        clickHeart();

        //Gọi hàm open trailer
        showTrailer();

        //Gọi lại hàm close trailer
        closeTrailer();

        //Gọi lại hàm animationScroll trang
        animationScroll();

        //Gọi lại hàm chuyển trang khi click btnBuyTicket
        clickBuyTicket();
    })

    // ---------------------------- Sự kiện click vào title main ở Góc điện ảnh

    const commentFilmCorner = document.querySelector('.title__main__detail--comment');
    const blogFilmCorner = document.querySelector('.title__main__detail--blog');

    //img
    const filmCornerLeftimg = document.querySelector('.comment__left--img img');
    const filmCornerRightimg1 = document.querySelector('.comment__right__box1--img img');
    const filmCornerRightimg2 = document.querySelector('.comment__right__box2--img img');
    const filmCornerRightimg3 = document.querySelector('.comment__right__box3--img img');

    //name 
    const filmCornerLeftname = document.querySelector('.comment__left--detail p');
    const filmCornerRightname1 = document.querySelector('.comment__right__box1--detail p');
    const filmCornerRightname2 = document.querySelector('.comment__right__box2--detail p');
    const filmCornerRightname3 = document.querySelector('.comment__right__box3--detail p');

    blogFilmCorner.addEventListener('click', () => {

        //Sử lý lớp giả khi click lớp giả nó bị xuất hiện 2 vạch
        blogFilmCorner.classList.add('change__height--after');
        commentFilmCorner.classList.remove('change__height--after');

        //Vị trí index sau khi click
        commentFilmCorner.classList.remove('title__main__index');
        blogFilmCorner.classList.add('title__main__index');

        filmCornerLeftimg.src = filmBlog[0].imgBlog;
        filmCornerLeftname.innerText = filmBlog[0].name;

        filmCornerRightimg1.src = filmBlog[1].imgBlog;
        filmCornerRightname1.innerText = filmBlog[1].name;

        filmCornerRightimg2.src = filmBlog[2].imgBlog;
        filmCornerRightname2.innerText = filmBlog[2].name;

        filmCornerRightimg3.src = filmBlog[3].imgBlog;
        filmCornerRightname3.innerText = filmBlog[3].name;
    })

    commentFilmCorner.addEventListener('click', () => {

        //Sử lý lớp giả khi click lớp giả nó bị xuất hiện 2 vạch
        commentFilmCorner.classList.add('change__height--after');
        blogFilmCorner.classList.remove('change__height--after');

        //Vị trí index sau khi click
        blogFilmCorner.classList.remove('title__main__index');
        commentFilmCorner.classList.add('title__main__index');

        filmCornerLeftimg.src = comments[0].imgComment;
        filmCornerLeftname.innerText = comments[0].name;

        filmCornerRightimg1.src = comments[1].imgComment;
        filmCornerRightname1.innerText = comments[1].name;

        filmCornerRightimg2.src = comments[2].imgComment;
        filmCornerRightname2.innerText = comments[2].name;

        filmCornerRightimg3.src = comments[3].imgComment;
        filmCornerRightname3.innerText = comments[3].name;
    })

   

    //Sự kiện khi click vào tất cả phim
    const allMovies = document.querySelector('.title__main__detail--all');

    allMovies.addEventListener('click', () => {
        const animationNextPage = document.getElementById('next--page');

        animationNextPage.style.display = 'block';
        setTimeout(() => {
            animationNextPage.style.display = 'none';
            window.location.href = 'movies.html';
        }, 1000);
    })

    

    //Gọi hàm open trailer
    showTrailer();

    //Gọi lại hàm close trailer
    closeTrailer();

    //Gọi lại hàm chuyển trang khi click btnBuyTicket
    clickBuyTicket();

    // Gọi hàm khởi tạo slider khi trang được tải
    $(document).ready(function () {
        sliderHeader();
    })
}

//---------------------------Sử lý sự kiện khi ở trang movies
if (currentUrlHtml.endsWith('movies.html')) {
    const listMovieIsShowing = document.querySelector('.list__movie--isShowing');
    const listMovieComingSoon = document.querySelector('.list__movie--comingSoon');

    if (listMovieIsShowing) {
        movieIsShowing.forEach(item => {
            listMovieIsShowing.innerHTML += `<div class="movie__item zoom show-on-scroll" data-movie-id="${item.id}">
                                <div class="movie__item--img">
                                    <div class="movie__item--img__detail">
                                        <div class="movie__item--img__detail--container">
                                            <div>
                                                <i class="fa-solid fa-ticket"></i>
                                                <p>Mua vé</p>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-circle-play"></i>
                                                <p>Trailer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="${item.imgPoster}" alt="">
                                </div>
                                <div class="movie__item--footer">
                                    <p class="movie__item--name">${item.name}</p>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`
        });

        //Gọi hàm open trailer
        showTrailer();

        //Gọi lại hàm close trailer
        closeTrailer();

        //Gọi lại hàm animationScroll trang
        animationScroll();

        //Gọi lại hàm chuyển trang khi click btnBuyTicket
        clickBuyTicket();
    }
    if (listMovieComingSoon) {
        movieComingSoon.forEach(item => {
            listMovieComingSoon.innerHTML += `<div class="movie__item zoom show-on-scroll" data-movie-id="${item.id}">
                                <div class="movie__item--img">
                                    <div class="movie__item--img__detail">
                                        <div class="movie__item--img__detail--container">
                                            <div>
                                                <i class="fa-solid fa-ticket"></i>
                                                <p>Mua vé</p>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-circle-play"></i>
                                                <p>Trailer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="${item.imgPoster}" alt="">
                                </div>
                                <div class="movie__item--footer">
                                    <p class="movie__item--name">${item.name}</p>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`

        });

        //Gọi hàm open trailer
        showTrailer();

        //Gọi lại hàm close trailer
        closeTrailer();

        //Gọi lại hàm animationScroll trang
        animationScroll();

        //Gọi lại hàm chuyển trang khi click btnBuyTicket
        clickBuyTicket();
    }

    clickHeart();

    //Gọi lại hàm slider
    $(document).ready(function () {
        sliderHeader();
    })

}

//---------------------------Sử lý sự kiện khi ở trang cinema__price
if (currentUrlHtml.endsWith('cinema__price.html')) {

    // XỬ LÝ PHIM THEO NGÀY
    const movieToday = document.querySelector('.movie--day__detail div:first-child');
    const movieTomorrow = document.querySelector('.movie--day__detail div:nth-child(2)');
    const movieDayAfterTomorrow = document.querySelector('.movie--day__detail div:last-child');
    const listMovieDay = document.querySelectorAll('.movie--day__detail div');
    const currentToday = document.querySelector('.movie--day__detail div:first-child p:last-child');
    const currentTomorrow = document.querySelector('.movie--day__detail div:nth-child(2) p:last-child');
    const nameTomorrowMovie = document.querySelector('.movie--day__detail div:nth-child(2) p:first-child');
    const currentAfterTomorrow = document.querySelector('.movie--day__detail div:nth-child(3) p:last-child');
    const nameAfterTomorrowMovie = document.querySelector('.movie--day__detail div:nth-child(3) p:first-child');
    const movieDayList = document.querySelector('.movie--day__list');
    const silderCinemaTicket = document.querySelector('.slider');
    const addressCinema = document.getElementById('cinemaMoviesSelect');
    const cityCinema = document.getElementById('cityMovies');
    const addressCinemaDetails = document.querySelector('.cinema__box1--address div:first-child p:last-child');
    const addressCinemaDetails2 = document.querySelector('.container--address__detail div:first-child p:last-child');
    const map = document.querySelector('.container--address__map');
    const titlleCinemaName = document.querySelector('.cinema__box1--name')

    // Xử lý lấy ngày

    updateDay(currentToday, nameTomorrowMovie, currentTomorrow, nameAfterTomorrowMovie, currentAfterTomorrow);


    // Xử lý current item
    function updateCurrentDay(clickedItem) {
        listMovieDay.forEach((item) => {
            item.classList.remove('movie--day__detail--current')
        })
        clickedItem.classList.add('movie--day__detail--current');
    }

    listMovieDay.forEach((item) => {
        item.addEventListener('click', function () {
            updateCurrentDay(this);
        });
    });

    // Hiện phim theo đúng ngày

    if (movieToday) {
        cinemaAndTicket.forEach(cinema => {
            if (cinema.nameCinema === 'Movies Nguyễn Du') {
                cinema.movieShowingToday.forEach(item => {
                    movieDayList.innerHTML += ` <div class="movie--day__item">
                    <div class="movie--day__item--img">
                        <img src="${item.imgPoster}" alt="">
                    </div>
                    <div class="movie--data__item--name">
                        ${item.name}
                    </div>
                </div>`
                })
            }
        })
    }

    //click vào phim hôm nay
    movieToday.addEventListener('click', () => {
        if (movieToday.classList.contains('movie--day__detail--current')) {
            movieDayList.innerHTML = '';

            cinemaAndTicket.forEach(cinema => {
                if (cinema.nameCinema === 'Movies Nguyễn Du') {
                    cinema.movieShowingToday.forEach(item => {
                        movieDayList.innerHTML += ` <div class="movie--day__item">
                        <div class="movie--day__item--img">
                            <img src="${item.imgPoster}" alt="">
                        </div>
                        <div class="movie--data__item--name">
                            ${item.name}
                        </div>
                    </div>`
                    })
                }
            })
        }
    })

    //Click vào phim ngày mai
    movieTomorrow.addEventListener('click', () => {
        if (movieTomorrow.classList.contains('movie--day__detail--current')) {
            movieDayList.innerHTML = '';

            cinemaAndTicket.forEach(cinema => {
                if (cinema.nameCinema === 'Movies Nguyễn Du') {
                    cinema.movieShowingTomorrow.forEach(item => {
                        movieDayList.innerHTML += ` <div class="movie--day__item">
                        <div class="movie--day__item--img">
                            <img src="${item.imgPoster}" alt="">
                        </div>
                        <div class="movie--data__item--name">
                            ${item.name}
                        </div>
                    </div>`
                    })
                }
            })
        }
    })

    //click vào phim ngày kia
    movieDayAfterTomorrow.addEventListener('click', () => {
        if (movieDayAfterTomorrow.classList.contains('movie--day__detail--current')) {
            movieDayList.innerHTML = '';

            cinemaAndTicket.forEach(cinema => {
                if (cinema.nameCinema === 'Movies Nguyễn Du') {
                    cinema.movieShowingAfterTomorrow.forEach(item => {
                        movieDayList.innerHTML += ` <div class="movie--day__item">
                        <div class="movie--day__item--img">
                            <img src="${item.imgPoster}" alt="">
                        </div>
                        <div class="movie--data__item--name">
                            ${item.name}
                        </div>
                    </div>`
                    })
                }
            })
        }
    })

    //sự kiện khi chọn địa chỉ cinema
    addressCinema.addEventListener('change', () => {
        let selectedCinema = addressCinema.value;

        // silderCinemaTicket.innerHTML = '';
        // Địa chỉ
        addressCinemaDetails.innerHTML = '';
        //map
        map.innerHTML = '';

        if (selectedCinema === "Movies Nguyễn Du") {
            //Thay đổi silder 
            // cinemaAndTicket.forEach(itemSlider => {
            //     if (itemSlider.nameCinema === "Movies Nguyễn Du") {
            //         itemSlider.imgSlider.forEach(itemImg => {
            //             silderCinemaTicket.innerHTML += `
            //                 <div class="slider__img--item">
            //                     <img src="${itemImg.img}" alt="">
            //                 </div>`;
            //         });
            //     }
            // });

            cinemaAndTicket.forEach(item => {
                if (item.nameCinema === "Movies Nguyễn Du") {
                    addressCinemaDetails.innerHTML = item.address;
                    addressCinemaDetails2.innerHTML = item.address;
                    titlleCinemaName.innerHTML = item.nameCinema;
                    map.innerHTML = item.map;
                }
            });
        }

        if (selectedCinema === "Movies Sala") {
            //Thay đổi slider
            // cinemaAndTicket.forEach(itemSlider => {
            //     if (itemSlider.nameCinema === "Movies Sala") {
            //         itemSlider.imgSlider.forEach(itemImg => {
            //             silderCinemaTicket.innerHTML += `
            //                 <div class="slider__img--item">
            //                     <img src="${itemImg.img}" alt="">
            //                 </div>`;

            //         });
            //     }
            // });
            cinemaAndTicket.forEach(item => {
                if (item.nameCinema === "Movies Sala") {
                    addressCinemaDetails.innerHTML = item.address;
                    addressCinemaDetails2.innerHTML = item.address;
                    titlleCinemaName.innerHTML = item.nameCinema;
                    map.innerHTML = item.map;
                }
            });
        }
    })

    //Khi chọn Hồ Chí Minh
    cityCinema.addEventListener('change', () => {
        let selectedCity = cityCinema.value;


    })

    //Gọi lại hàm slider
    $(document).ready(function () {
        sliderHeader();
    })
}

//---------------------------Sử lý sự kiện khi ở trang info_movie
if (currentUrlHtml.includes('info_movie.html')) {
    const btnTrasferHtml = document.querySelector('.info--movie__film--hot_btn');

    btnTrasferHtml.addEventListener('click', () => {
        const animationNextPage = document.getElementById('next--page');

        animationNextPage.style.display = 'block';
        setTimeout(() => {
            animationNextPage.style.display = 'none';
            window.location.href = 'movies.html';
        }, 1000);
    })

    //Xử lý update ngày 
    const currentToDay = document.querySelector('.info--movie__detail__showtimes--box__day div:first-child p:last-child');
    const nameTomorrow = document.querySelector('.info--movie__detail__showtimes--box__day div:nth-child(2) p:first-child');
    const currentTomorrow = document.querySelector('.info--movie__detail__showtimes--box__day div:nth-child(2) p:last-child');
    const nameAfterTomorrow = document.querySelector('.info--movie__detail__showtimes--box__day div:nth-child(3) p:first-child');
    const currentAfterTomorrow = document.querySelector('.info--movie__detail__showtimes--box__day div:nth-child(3) p:last-child');
    const menuTimesShow = document.querySelectorAll('.info--movie__detail__showtimes--box__day div');

    updateDay(currentToDay, nameTomorrow, currentTomorrow, nameAfterTomorrow, currentAfterTomorrow);



    //Sử lý sự hay đổi khi đến trang này
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movie-id');
    const imgSmallInfoMovie = document.querySelector('.info--movie__detail__describe--img div img')
    const imgBigInfoMovie = document.querySelector('.watch__trailer__img img');
    const nameMovieInfoMovie = document.querySelector('.info--movie__detail__describe__info--name')
    const timeMovieInfoMovie = document.querySelector('.info--movie__detail__describe__info--time div p')
    const nationMovieInfoMovie = document.querySelector('.info--movie__detail__describe__info--country p:last-child')
    const producerMovieInfoMovie = document.querySelector('.info--movie__detail__describe__info--producer p:last-child')
    const categoryMovieInfoMovie = document.querySelector('.info--movie__detail__describe__info--category div')
    const directorMovieInfoMovie = document.querySelector('.info--movie__detail__describe__info--film--director div')
    const performerMovieInfoMovie = document.querySelector('.info--movie__detail__describe__info--film--performers div')
    const contentMovieInfoMovie = document.querySelector('.info--movie__detail__content--film')
    const playTrailerInfoMovie = document.getElementById('watch__trailer');
    const dayInfoMovie = document.querySelector('.info--movie__detail__describe__info--time div:last-child p')
    const startInfoMovie = document.querySelector('.info--movie__detail__describe__info--evaluate p:nth-child(2)');
    const voteInfoMovie = document.querySelector('.info--movie__detail__describe__info--evaluate p:nth-child(3)');
    const boxTimeInfoMovie = document.querySelector('.info--movie__detail__time--specifically__box__info');

    //Xử lý updateTimePast
    function updateTimePast() {
        const timePs = document.querySelectorAll('.info--movie__detail__time--specifically__box__info p');

        timePs.forEach(p => {
            let timeString = p.textContent.trim();
            let timeParts = timeString.split(':');
            let hour = parseInt(timeParts[0]);
            let minute = parseInt(timeParts[1]);
            let currentTime = new Date();
            let movieTime = new Date();
            movieTime.setHours(hour, minute, 0, 0);


            if (currentTime > movieTime) {
                p.style.display = 'none';
            }
        });
    }

    //Xử lý dữ liệu
    if (movieId.charAt(0) === 'B') {
        infomationMovie.forEach(item => {
            item.detailsMovieIsShowing.forEach(movie => {
                if (movie.id === movieId) {

                    //Thay thế nội dung
                    imgSmallInfoMovie.src = movie.imgPosterVertical;
                    imgBigInfoMovie.src = movie.imgPosterHorizontal;
                    nameMovieInfoMovie.innerHTML = movie.name;
                    timeMovieInfoMovie.innerHTML = movie.time;
                    nationMovieInfoMovie.innerHTML = movie.nation;
                    producerMovieInfoMovie.innerHTML = movie.producer;
                    contentMovieInfoMovie.innerHTML = movie.content;
                    dayInfoMovie.innerHTML = movie.day;
                    startInfoMovie.innerHTML = movie.start;
                    voteInfoMovie.innerHTML = movie.vote;

                    //------------Xử lý bao nhiêu phần tử trong mảng
                    //Thể loại
                    categoryMovieInfoMovie.innerHTML = '';
                    movie.category.forEach(item => {
                        let div = document.createElement('div');
                        div.innerHTML = item;

                        categoryMovieInfoMovie.appendChild(div);
                    })

                    //Đạo diễn
                    directorMovieInfoMovie.innerHTML = '';
                    movie.director.forEach(item => {
                        let div = document.createElement('div');
                        div.innerHTML = item;

                        directorMovieInfoMovie.appendChild(div);
                    })

                    //Diễn viên
                    performerMovieInfoMovie.innerHTML = '';
                    movie.actor.forEach(item => {
                        let div = document.createElement('div');
                        div.innerHTML = item;

                        performerMovieInfoMovie.appendChild(div);
                    })
                }
            })

            if (item.city === 'TP Hồ Chí Minh' && item.nameCinema === 'Movies Nguyễn Du') {
                item.detailsMovieIsShowing.forEach(movie => {
                    if (movie.id === movieId) {
                        boxTimeInfoMovie.innerHTML = ''
                        movie.showTimesToDay.forEach(itemTime => {
                            let boxP = document.createElement('p');
                            boxP.innerHTML = itemTime;

                            boxTimeInfoMovie.appendChild(boxP);
                        })
                    }
                })
            }
        })

        //Sự kiện xem trailer 
        movieIsShowing.forEach(item => {
            if (item.id === movieId) {
                playTrailerInfoMovie.addEventListener('click', () => {
                    trailerContainer.style.display = 'block';
                    iframeContainer.innerHTML = item.trailer;
                })
            }
        })

        //Gọi hàm tắt trailer
        closeTrailer();

        //Gọi hàm update thời gian hiện tại
        updateTimePast()

    }

    if (movieId.charAt(0) === 'A') {
        infomationMovie.forEach(item => {
            item.detailsMovieComingSoon.forEach(movie => {
                if (movie.id === movieId) {

                    //Thay thế nội dung
                    imgSmallInfoMovie.src = movie.imgPosterVertical;
                    imgBigInfoMovie.src = movie.imgPosterHorizontal;
                    nameMovieInfoMovie.innerHTML = movie.name;
                    timeMovieInfoMovie.innerHTML = movie.time;
                    nationMovieInfoMovie.innerHTML = movie.nation;
                    producerMovieInfoMovie.innerHTML = movie.producer;
                    contentMovieInfoMovie.innerHTML = movie.content;
                    dayInfoMovie.innerHTML = movie.day;
                    startInfoMovie.innerHTML = movie.start;
                    voteInfoMovie.innerHTML = movie.vote;

                    //------------Xử lý bao nhiêu phần tử trong mảng
                    //Thể loại
                    categoryMovieInfoMovie.innerHTML = '';
                    movie.category.forEach(item => {
                        let div = document.createElement('div');
                        div.innerHTML = item;

                        categoryMovieInfoMovie.appendChild(div);
                    })

                    //Đạo diễn
                    directorMovieInfoMovie.innerHTML = '';
                    movie.director.forEach(item => {
                        let div = document.createElement('div');
                        div.innerHTML = item;

                        directorMovieInfoMovie.appendChild(div);
                    })

                    //Diễn viên
                    performerMovieInfoMovie.innerHTML = '';
                    movie.actor.forEach(item => {
                        let div = document.createElement('div');
                        div.innerHTML = item;

                        performerMovieInfoMovie.appendChild(div);
                    })


                }
            })
            //Box thời gian

            if (item.city === 'TP Hồ Chí Minh' && item.nameCinema === 'Movies Nguyễn Du') {
                item.detailsMovieComingSoon.forEach(movie => {
                    if (movie.id === movieId) {
                        boxTimeInfoMovie.innerHTML = ''
                        movie.showTimesToDay.forEach(itemTime => {
                            let boxP = document.createElement('p');
                            boxP.innerHTML = itemTime;

                            boxTimeInfoMovie.appendChild(boxP);
                        })
                    }
                })
            }
            //Sự kiện xem trailer 
            movieComingSoon.forEach(item => {
                if (item.id === movieId) {
                    playTrailerInfoMovie.addEventListener('click', () => {
                        trailerContainer.style.display = 'block';
                        iframeContainer.innerHTML = item.trailer;
                    })
                }
            })

            //Gọi hàm tắt trailer
            closeTrailer();

            //Gọi hàm update thời gian hiện tại
            updateTimePast()
        })
    }

    //Xử lý địa chỉ cinema
    const cityCinemaInfoMovie = document.getElementById('cityMovies');
    const addressDetailInfoMovie = document.getElementById('cinemaMoviesSelect');
    const boxDayInfoMovie = document.querySelectorAll('.info--movie__detail__showtimes--box__day div')
    const boxToDayInfoMovie = document.querySelector('.info--movie__detail__showtimes--box__day div:first-child')
    const boxTomorrowInfoMovie = document.querySelector('.info--movie__detail__showtimes--box__day div:nth-child(2)')
    const boxAfterInfoMovie = document.querySelector('.info--movie__detail__showtimes--box__day div:last-child')

    //hàm xử lý click ngày hôm này ngày hôm kia ngày mốt
    function clickBoxDay(valueCity, valueNameCinema) {
        infomationMovie.forEach(itemBig => {
            if (itemBig.city === valueCity && itemBig.nameCinema === valueNameCinema) {
                if (movieId.charAt(0) === 'B') {
                    itemBig.detailsMovieIsShowing.forEach(itemSmall => {
                        if (itemSmall.id === movieId) {
                            //Click phim hôm nay
                            boxToDayInfoMovie.addEventListener('click', () => {
                                menuTimesShow.forEach(item => {
                                    item.classList.remove('info--movie__detail__showtimes--box__day--current');
                                })
                                boxToDayInfoMovie.classList.add('info--movie__detail__showtimes--box__day--current');
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesToDay.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                                //Gọi hàm update thời gian hiện tại
                                updateTimePast()
                            })

                            //Click phim ngày mai
                            boxTomorrowInfoMovie.addEventListener('click', () => {
                                menuTimesShow.forEach(item => {
                                    item.classList.remove('info--movie__detail__showtimes--box__day--current');
                                })
                                boxTomorrowInfoMovie.classList.add('info--movie__detail__showtimes--box__day--current');
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            })

                            //Click phim ngày kia
                            boxAfterInfoMovie.addEventListener('click', () => {
                                menuTimesShow.forEach(item => {
                                    item.classList.remove('info--movie__detail__showtimes--box__day--current');
                                })
                                boxAfterInfoMovie.classList.add('info--movie__detail__showtimes--box__day--current');
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesAfterTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            })
                        }
                    })
                }
                if (movieId.charAt(0) === 'A') {
                    itemBig.detailsMovieComingSoon.forEach(itemSmall => {
                        if (itemSmall.id === movieId) {

                            addressDetailInfoMovie.addEventListener('change', () => {
                                boxTimeInfoMovie.innerHTML = ''

                                boxDayInfoMovie.forEach(boxDay => {
                                    if (boxDay.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                        itemSmall.showTimesToDay.forEach(itemTime => {
                                            let boxP = document.createElement('p');
                                            boxP.innerHTML = itemTime;

                                            boxTimeInfoMovie.appendChild(boxP);
                                        })
                                    }
                                })
                                //Gọi hàm update thời gian hiện tại
                                updateTimePast()
                            })

                            //Click phim hôm nay
                            boxToDayInfoMovie.addEventListener('click', () => {
                                menuTimesShow.forEach(item => {
                                    item.classList.remove('info--movie__detail__showtimes--box__day--current');
                                })
                                boxToDayInfoMovie.classList.add('info--movie__detail__showtimes--box__day--current');
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesToDay.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                                //Gọi hàm update thời gian hiện tại
                                updateTimePast()
                            })

                            //Click phim ngày mai
                            boxTomorrowInfoMovie.addEventListener('click', () => {
                                menuTimesShow.forEach(item => {
                                    item.classList.remove('info--movie__detail__showtimes--box__day--current');
                                })
                                boxTomorrowInfoMovie.classList.add('info--movie__detail__showtimes--box__day--current');
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            })

                            //Click phim ngày kia
                            boxAfterInfoMovie.addEventListener('click', () => {
                                menuTimesShow.forEach(item => {
                                    item.classList.remove('info--movie__detail__showtimes--box__day--current');
                                })
                                boxAfterInfoMovie.classList.add('info--movie__detail__showtimes--box__day--current');
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesAfterTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            })
                        }
                    })
                }

            }
        })
    }
    clickBoxDay('TP Hồ Chí Minh', 'Movies Nguyễn Du');

    //Xử lý đoạn thay đổi tỉnh
    addressDetailInfoMovie.addEventListener('change', () => {
        let valueOptionAddress = addressDetailInfoMovie.value;

        infomationMovie.forEach(itemBig => {
            if (itemBig.nameCinema === valueOptionAddress) {
                if (movieId.charAt(0) === 'B') {
                    itemBig.detailsMovieIsShowing.forEach(itemSmall => {
                        if (itemSmall.id === movieId) {
                            //Khi current ở ô today
                            if (boxToDayInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesToDay.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                                //Gọi hàm update thời gian hiện tại
                                updateTimePast()
                            }

                            //Khi current ở ô after tomorrow
                            if (boxAfterInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesAfterTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            }
                            //Khi current ở ô tomorrow
                            if (boxTomorrowInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            }

                        }
                    })
                }
            }
        })
    })

    //Xử lý khi thay đổi cinema
    cityCinemaInfoMovie.addEventListener('change', () => {
        let valueCity = cityCinemaInfoMovie.value;

        //Thay đổi giá trị của ô address Cinema
        nameCityAndCinema.forEach(item => {
            if (valueCity === item.nameCity) {
                addressDetailInfoMovie.innerHTML = '';

                item.nameCinema.forEach(itemCinema => {
                    let option = document.createElement('option');

                    option.value = itemCinema;
                    option.innerHTML = itemCinema

                    addressDetailInfoMovie.appendChild(option);
                })
            }

        })
        let valueOptionAddress = addressDetailInfoMovie.value;

        infomationMovie.forEach(itemBig => {
            if (itemBig.nameCinema === valueOptionAddress && itemBig.city === valueCity) {
                if (movieId.charAt(0) === 'B') {
                    itemBig.detailsMovieIsShowing.forEach(itemSmall => {
                        if (itemSmall.id === movieId) {
                            //Khi current ở ô today
                            if (boxToDayInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesToDay.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);

                                })
                                //Gọi hàm update thời gian hiện tại
                                updateTimePast()
                            }

                            //Khi current ở ô after tomorrow
                            if (boxAfterInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesAfterTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            }
                            //Khi current ở ô tomorrow
                            if (boxTomorrowInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            }


                        }
                    })
                }
                if (movieId.charAt(0) === 'A') {
                    itemBig.detailsMovieComingSoon.forEach(itemSmall => {
                        if (itemSmall.id === movieId) {
                            //Khi current ở ô today
                            if (boxToDayInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesToDay.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                                //Gọi hàm update thời gian hiện tại
                                updateTimePast()
                            }

                            //Khi current ở ô after tomorrow
                            if (boxAfterInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesAfterTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            }
                            //Khi current ở ô tomorrow
                            if (boxTomorrowInfoMovie.classList.contains('info--movie__detail__showtimes--box__day--current')) {
                                boxTimeInfoMovie.innerHTML = ''

                                itemSmall.showTimesTomorrow.forEach(itemTime => {
                                    let boxP = document.createElement('p');
                                    boxP.innerHTML = itemTime;

                                    boxTimeInfoMovie.appendChild(boxP);
                                })
                            }

                        }
                    })
                }
            }
        })
    })

    //Hàm khi click hôm nay ngày mai ngày kia để update dữ liệu time
    function handleAddressChange() {
        let valueOptionAddress = addressDetailInfoMovie.value;


        clickBoxDay(cityCinemaInfoMovie.value, valueOptionAddress)
    }

    function handleCityChange() {
        let valueCity = cityCinemaInfoMovie.value;


        clickBoxDay(valueCity, addressDetailInfoMovie.value)
    }

    cityCinemaInfoMovie.addEventListener('change', handleCityChange)
    addressDetailInfoMovie.addEventListener('change', handleAddressChange)



}

