
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
sliderHeader();
