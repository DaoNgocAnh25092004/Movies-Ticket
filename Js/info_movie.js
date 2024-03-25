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
