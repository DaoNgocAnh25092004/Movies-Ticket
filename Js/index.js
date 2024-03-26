
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
    clickBuyTicket('#movie__list div', '.movie__item--img__detail--container div:first-child');
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
    clickBuyTicket('#movie__list div', '.movie__item--img__detail--container div:first-child');
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
clickBuyTicket('#movie__list div', '.movie__item--img__detail--container div:first-child');

//Gọi lại hàm slider
sliderHeader();

//Sự kiện slider promotion
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

//Gọi hàm chuyển trang
clickBuyTicket('#movie__list div', '.movie__item--img__detail--container div:first-child');
