// ------------------------------Sự kiện ở thanh header
var currentUrlHtml = window.location.href;

//Sự kiện bấm nút thanh tìm kiếm
const iconSearchHeader = document.querySelector('.header__right__search i');
const inputSeachHeader = document.querySelector('.header__right__search--input');

iconSearchHeader.addEventListener('click', () => {
    inputSeachHeader.classList.toggle('input__search--show');
})

//sự kiện bấm icon user 
const iconUserHeader = document.querySelector('.header__right__user i');

iconUserHeader.addEventListener('click', () => {
    if (currentUrlHtml.endsWith('index.html')) {
        window.location.href = '/Html/login.html';
    } else {
        window.location.href = 'login.html';
    }
})

//sự kiện nút đổi màu
const btnChangeColorWeb = document.getElementById("theme-toggle-button")

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




//---------------------------Sử lý sự kiện khi ở trang index
if (currentUrlHtml.endsWith('index.html')) {

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
            movieList.innerHTML += `<div class="movie__item">
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
                                    <img src="${item.imgPoter}" alt="">
                                </div>
                                <div class="movie__item--footer">
                                    <p class="movie__item--name">${item.name}</p>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`
        });
        //Gọi lại hàm click trái tim
        clickHeart();
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
            movieList.innerHTML += `<div class="movie__item">
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
                                    <img src="${item.imgPoter}" alt="">
                                </div>
                                <div class="movie__item--footer">
                                    <p class="movie__item--name">${item.name}</p>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`
        });
        //Gọi lại hàm click trái tim
        clickHeart();


        
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

    // ----------------------------- Sự kiện slider promotion
    $(document).ready(function () {
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
    });
    
    //Gọi lại hàm slider 
    sliderHeader();
}

//---------------------------Sử lý sự kiện khi ở trang movies
if (currentUrlHtml.endsWith('movies.html')) {
    const listMovieIsShowing = document.querySelector('.list__movie--isShowing');
    const listMovieComingSoon = document.querySelector('.list__movie--comingSoon');

    if (listMovieIsShowing) {
        movieIsShowing.forEach(item => {
            listMovieIsShowing.innerHTML += `<div class="movie__item">
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
                                    <img src="${item.imgPoter}" alt="">
                                </div>
                                <div class="movie__item--footer">
                                    <p class="movie__item--name">${item.name}</p>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`

        });
    }
    if (listMovieComingSoon) {
        movieComingSoon.forEach(item => {
            listMovieComingSoon.innerHTML += `<div class="movie__item">
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
                                    <img src="${item.imgPoter}" alt="">
                                </div>
                                <div class="movie__item--footer">
                                    <p class="movie__item--name">${item.name}</p>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>`

        });
    }

    clickHeart();

    //Gọi lại hàm slider
    sliderHeader();
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

    // Xử lý lấy ngày
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
    currentToday.innerText = `${currentDayOfMonth}/${currentMonth}`;

    nameTomorrowMovie.innerText = `${tomorrowOfWeek}`
    currentTomorrow.innerText = `${tomorrowDayOfMonth}/${tomorrowMonth}`;

    nameAfterTomorrowMovie.innerText = `${afterTomorrowOfWeek}`
    currentAfterTomorrow.innerText = `${afterTomorrowDayOfMonth}/${afterTomorrowMonth}`;
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
                        <img src="${item.imgPoter}" alt="">
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
                            <img src="${item.imgPoter}" alt="">
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
                            <img src="${item.imgPoter}" alt="">
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
                            <img src="${item.imgPoter}" alt="">
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
    addressCinema.addEventListener('change',  () => {
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
    sliderHeader();
}


