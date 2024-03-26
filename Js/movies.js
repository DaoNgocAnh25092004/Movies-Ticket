
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
    clickBuyTicket('#movie__list div', '.movie__item--img__detail--container div:first-child');

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
    clickBuyTicket('#movie__list div', '.movie__item--img__detail--container div:first-child');

}

clickHeart();

//Gọi lại hàm slider
sliderHeader();
