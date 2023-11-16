const apiKey = '76726aebd75db6b1efaaefae843b72b9';
/* The Hero Section Implementing */
async function heroSectionMovies() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
    const movies = await response.json();
    let swiperWrapper = document.getElementById('swiper-wrapper');
    for (let index = 0; index < movies.results.length; index++) {
        /* Make Slides  */
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperWrapper.appendChild(swiperSlide);
        /* Make Image for each slide */
        const movieImage = document.createElement('img');
        movieImage.src = `https://image.tmdb.org/t/p/original${movies.results[index].backdrop_path}`;
        swiperSlide.appendChild(movieImage);
        /*Make Overlay that shows movie info */
        const overlay = document.createElement('div');
        overlay.classList.add("overlay");
        swiperSlide.appendChild(overlay);
        /* The Title of each movie */
        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        const titleText = document.createElement('p');
        titleText.classList.add('title-text')
        titleText.innerHTML = `<span>${index + 1} - </span> ${movies.results[index].title} <div class="red-line"></div>`;
        movieTitle.appendChild(titleText);
        overlay.appendChild(movieTitle);
        /* Rating Of the Movie */
        const avg = document.createElement('div');
        avg.classList.add('movie-avg');
        avg.innerHTML = `<span>Rating :</span> <i class="fa-solid fa-star"></i> ${movies.results[index].vote_average.toFixed(1)}`;
        overlay.appendChild(avg);
        /* The Description of each movie */
        const movieDesc = document.createElement('div');
        movieDesc.classList.add('movie-desc');
        movieDesc.innerHTML = `${movies.results[index].overview}`;
        overlay.appendChild(movieDesc);
        /* The buttons of watch now and add to watch list */
        const btn1 = document.createElement('button');
        const btn2 = document.createElement('button');
        btn1.classList.add('btn');
        btn1.classList.add('btn-watch');
        btn1.innerHTML = `<i class="fa-solid fa-play"></i> Watch Now`;
        overlay.appendChild(btn1);
        btn2.classList.add('btn');
        btn2.classList.add('btn-watch2');
        btn2.innerHTML = `<i class="fa-solid fa-plus"></i> Add to Watch List`
        overlay.appendChild(btn2);
    }
}
async function trendingMovies(){
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
    const movies = await response.json();
    let swiperWrapperTwo = document.getElementById('swiper-wrapper-two');
    for (let index = 0; index < movies.results.length; index++) {
        /* Make Slides  */
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperWrapperTwo.appendChild(swiperSlide);
        const movieImage = document.createElement('img');
        movieImage.classList.add("trend-img")
        movieImage.src = `https://image.tmdb.org/t/p/original${movies.results[index].poster_path}`;
        swiperSlide.appendChild(movieImage);
    }
}
async function newReleases(){
    let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
    const movies = await response.json();
    let swiperWrapperThree = document.getElementById('swiper-wrapper-three');
    for (let index = 0; index < movies.results.length; index++) {
        /* Make Slides  */
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperWrapperThree.appendChild(swiperSlide);
        const movieImage = document.createElement('img');
        movieImage.classList.add("trend-img")
        movieImage.src = `https://image.tmdb.org/t/p/original${movies.results[index].poster_path}`;
        swiperSlide.appendChild(movieImage);
    }
}
heroSectionMovies();
trendingMovies();
newReleases();