// Trending ALL 
// https://api.themoviedb.org/3/trending/all/day?api_key=e573b8d898b49e78bddffd6a49e84ca2


// Upcoming Movies
// https://api.themoviedb.org/3/movie/upcoming?api_key=e573b8d898b49e78bddffd6a49e84ca2&language=en-US&page=1

// Top Rated 
// https://api.themoviedb.org/3/movie/top_rated?api_key=e573b8d898b49e78bddffd6a49e84ca2&language=en-US&page=1


// Popular TV
// https://api.themoviedb.org/3/tv/popular?api_key=e573b8d898b49e78bddffd6a49e84ca2&language=en-US&page=1

var upcomingTvContainer = document.querySelector('#upcomingTvContainer')
var upcomingMoviesContainer = document.querySelector('#upcomingMoviesContainer')
var upcomingPersonsContainer = document.querySelector('#upcomingPersonsContainer')
var trendingMoviesContainer = document.querySelector('#trendingMoviesContainer')
var trendingTvShowsContainer = document.querySelector('#trendingTvShowsContainer')
var trendingPersonsContainer = document.querySelector('#trendingPersonsContainer')
var baner1container=document.querySelector('#baner1')
var baner2container=document.querySelector('#baner2')
var besttvseriescontainer=document.querySelector('#besttvseries')

var besttvseries=[]
var besttvseriesdata=""

var banner1=[]
var baner1data=""

var banner2=[]
var baner2data=""

var upcomingMovies =[]
var upcomingMoviesData = ""
var latestTV =[]
var latestTVData = ""


var trendingMovies =[]
var trendingMoviesData = ""

var trendingTv =[]
var trendingTvData = ""

var trendingPersons =[]
var trendingPersonsData = ""

function getbesttvseries()
{
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=e573b8d898b49e78bddffd6a49e84ca2`)
    .then(response => response.json())
    .then(data => 
          {
              besttvseries = data.results
              
              for(var i =2 ; i<besttvseries.length; i++)
              {
                besttvseriesdata+=
                `
                <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="movie-item mb-50">
                    <div class="movie-poster">
                        <a href="movie-details.html"><img src="https://image.tmdb.org/t/p/w500${besttvseries[i].poster_path}" alt=""></a>
                    </div>
                    <div class="movie-content">
                        <div class="top">
                            <h5 class="title"><a href="movie-details.html">Women's Day</a></h5>
                            <span class="date">2021</span>
                        </div>
                        <div class="bottom">
                            <ul>
                                <li><span class="quality">hd</span></li>
                                <li>
                                    <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                    <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                                <a href="movie-details.html"><img src=""  alt=""></a>
                          
  
  
  
                `
              }
              besttvseriescontainer.innerHTML = besttvseriesdata
             
  
          }
  
         
      )
    .catch(error => console.error(error))
  }
  


function getbaner2()
{
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=e573b8d898b49e78bddffd6a49e84ca2`)
    .then(response => response.json())
    .then(data => 
          {
              banner2 = data.results
              
              for(var i =1 ; i<2; i++)
              {
                baner2data+=
                `
                <div class="live-movie-img wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1.8s">
                <img src="https://image.tmdb.org/t/p/w500${banner2[i].poster_path}" alt="">
            </div>

                `
              }
              baner2container.innerHTML = baner2data
  
          }
  
         
      )
    .catch(error => console.error(error))
}


function getbaner1()
{
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=e573b8d898b49e78bddffd6a49e84ca2`)
    .then(response => response.json())
    .then(data => 
          {
              banner1 = data.results
              
              for(var i =0 ; i<1; i++)
              {
                baner1data+=
                `
                <div class="col-lg-6 ">
                <div class="services-img-wrap">
                    <img src="https://image.tmdb.org/t/p/w500${banner1[i].poster_path}" alt="">
                    <a href="" class="download-btn" download>Download <img src="fonts/download.svg" alt=""></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="services-content-wrap">
                    <div class="section-title title-style-two mb-20">
                        <span class="sub-title">Our Services</span>
                        <h2 class="title">Download Your Shows Watch Offline.</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem
                    Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                    <div class="services-list">
                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-television"></i>
                                </div>
                                <div class="content">
                                    <h5>Enjoy on Your TV.</h5>
                                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="flaticon-video-camera"></i>
                                </div>
                                <div class="content">
                                    <h5>Watch Everywhere.</h5>
                                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>      
  
  
                `
              }
              baner1container.innerHTML = baner1data
  
          }
  
         
      )
    .catch(error => console.error(error))

   
}

function getUpcomingMovies(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=e573b8d898b49e78bddffd6a49e84ca2&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => 
          {
              upcomingMovies = data.results
              console.log(upcomingMovies);
              for(var i =0 ; i<upcomingMovies.length; i++)
              {
                upcomingMoviesData+=
                `
                      <div class="movie-item mb-50" >
                      <div class="movie-poster">
                          <a href="movie-details.html"><img src="https://image.tmdb.org/t/p/w500${upcomingMovies[i].poster_path}" alt=""></a>
                      </div>
                      <div class="movie-content">
                          <div class="top">
                              <h5 class="title"><a href="#">${upcomingMovies[i].title}</a></h5>
                              <span class="date">${upcomingMovies[i].release_date}</span>
                          </div>
                          <div class="bottom">
                              <ul>
                                  <li><span class="quality">4k</span></li>
                                  <li>
                                      <span class="duration"><i class="far fa-clock"></i> 
                                        ${upcomingMovies[i].popularity}
                                      </span>
                                      <span class="rating"><i class="fas fa-thumbs-up"></i> 
                                        ${upcomingMovies[i].vote_average}
                                      </span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                `
              }
              upcomingMoviesContainer.innerHTML = upcomingMoviesData
              owlSliderInti2()
          }
  
         
      )
    .catch(error => console.error(error))
  }
  function getLatestTV(){
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=e573b8d898b49e78bddffd6a49e84ca2&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => 
          {
              latestTV = data.results
              console.log(latestTV);
              for(var i =0 ; i<latestTV.length; i++)
              {
                latestTVData+=
                `
                      <div class="movie-item mb-50" >
                      <div class="movie-poster">
                          <a href="movie-details.html"><img src="https://image.tmdb.org/t/p/w500${latestTV[i].poster_path}" alt=""></a>
                      </div>
                      <div class="movie-content">
                          <div class="top">
                              <h5 class="title"><a href="#">${latestTV[i].original_name}</a></h5>
                              <span class="date">${latestTV[i].first_air_date
                              }</span>
                          </div>
                          <div class="bottom">
                              <ul>
                                  <li><span class="quality">4k</span></li>
                                  <li>
                                      <span class="duration"><i class="far fa-clock"></i> 
                                        ${latestTV[i].popularity}
                                      </span>
                                      <span class="rating"><i class="fas fa-thumbs-up"></i> 
                                        ${latestTV[i].vote_average}
                                      </span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                `
              }
              upcomingTvContainer.innerHTML = latestTVData
  
              owlSliderInti()
          }
  
         
      )
    .catch(error => console.error(error))
  }

function getTrendingMovies(){
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e573b8d898b49e78bddffd6a49e84ca2`)
  .then(response => response.json())
  .then(data => 
        {
            trendingMovies = data.results
            console.log(trendingMovies);
            for(var i =0 ; i<trendingMovies.length; i++)
            {
              trendingMoviesData+=
              `
                      <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                      <div class="movie-item mb-60">
                          <div class="movie-poster">
                              <a href="movie-details.html"><img src="https://image.tmdb.org/t/p/w500${trendingMovies[i].poster_path}"  alt=""></a>
                              
                          </div>
                          <div class="movie-content">
                              <div class="top">
                                  <h5 class="title"><a href="#">
                                  ${trendingMovies[i].title}
                                  </a></h5>
                                  <span class="date">${trendingMovies[i].release_date}</span>
                              </div>
                              <div class="bottom">
                                  <ul>
                                      <li><span class="quality">hd</span></li>
                                      <li>
                                          <span class="duration"><i class="far fa-clock"></i> ${trendingMovies[i].popularity}</span>
                                          <span class="rating"><i class="fas fa-thumbs-up"></i> ${trendingMovies[i].vote_average}</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>



              `
            }
            trendingMoviesContainer.innerHTML = trendingMoviesData

        }

       
    )
  .catch(error => console.error(error))
}

function getTrendingTVShows(){
  fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=e573b8d898b49e78bddffd6a49e84ca2`)
  .then(response => response.json())
  .then(data => 
        {
            trendingTv = data.results
            
            for(var i =0 ; i<trendingTv.length; i++)
            {
              trendingTvData+=
              `
                      <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                      <div class="movie-item mb-60">
                          <div class="movie-poster">
                              <a href="movie-details.html"><img src="https://image.tmdb.org/t/p/w500${trendingTv[i].poster_path}"  alt=""></a>
                              
                          </div>
                          <div class="movie-content">
                              <div class="top">
                                  <h5 class="title"><a href="#">
                                  ${trendingTv[i].title}
                                  </a></h5>
                                  <span class="date">${trendingTv[i].release_date}</span>
                              </div>
                              <div class="bottom">
                                  <ul>
                                      <li><span class="quality">hd</span></li>
                                      <li>
                                          <span class="duration"><i class="far fa-clock"></i> ${trendingTv[i].popularity}</span>
                                          <span class="rating"><i class="fas fa-thumbs-up"></i> ${trendingTv[i].vote_average}</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>



              `
            }
            trendingTvShowsContainer.innerHTML = trendingTvData

        }

       
    )
  .catch(error => console.error(error))
}

function getTrendingPersons(){
  fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=e573b8d898b49e78bddffd6a49e84ca2`)
  .then(response => response.json())
  .then(data => 
        {
            trendingPersons = data.results
            console.log(trendingPersons);
            for(var i =0 ; i<trendingPersons.length; i++)
            {
              trendingPersonsData+=
              `
                      <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                      <div class="movie-item mb-60">
                          <div class="movie-poster">
                              <a href="movie-details.html"><img src="https://image.tmdb.org/t/p/w500${trendingPersons[i].profile_path}"  alt=""></a>
                              
                          </div>
                          <div class="movie-content">
                              <div class="top">
                                  <h5 class="title"><a href="#">
                                  ${trendingPersons[i].original_name}
                                  </a></h5>
                                  <span class="date">${trendingPersons[i].release_date}</span>
                              </div>
                              <div class="bottom">
                                  <ul>
                                      <li><span class="quality">hd</span></li>
                                      <li>
                                          <span class="duration"><i class="far fa-clock"></i> ${trendingPersons[i].popularity}</span>
                                          <span class="rating"><i class="fas fa-thumbs-up"></i> ${trendingPersons[i].known_for_department}</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>



              `
            }
            trendingPersonsContainer.innerHTML = trendingPersonsData
           

        }

       
    )
  .catch(error => console.error(error))
}



function owlSliderInti(){
    $('.ucm-active').owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            575: {
                items: 2,
                nav: false,
            },
            768: {
                items: 2,
                nav: false,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            },
        }
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $(".ucm-active").trigger('refresh.owl.carousel');
    });
    
    }
    
    function owlSliderInti2(){
        $('.ucm-active2').owlCarousel({
            loop: true,
            margin: 30,
            items: 4,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                575: {
                    items: 2,
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: false,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4
                },
            }
        });
        }

getLatestTV()

getTrendingMovies()

getTrendingTVShows()

getTrendingPersons()

getbaner1()

getbaner2()

getbesttvseries()