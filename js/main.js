(() => {
    //init the vue stuff!
    const vm = new Vue({
        el : "#app", //vue will target everything in this entire id automatically

        data : { //all of the ID's we want Vue to target
            welcomemessage : "Thousands of movies at your fingertips.", //the message on the page

            videodata : [], //arrays because we want all of that data
            singledata : [], //^^

            videotitle : "",
            videodescription : "",
            videosource : "",


            showDetails : false
        },

        created : function() { //when the vue function gets created it calls on this function
            //get all of the movie date on a page load
            this.fetchMovieData(null); //we press on null because the url has not run yet, therefore it is nothing yet so we will define it as a null until it does
        },

        methods : {
            login() {
                //stub
                console.log('login functionality'); //login shell for video player
            },

            fetchSingle(e) {
              //debugger; //comment this out when it gets working 
              this.fetchMovieData(e.currentTarget.dataset.movie); //firing off a fetch call in order to get the movie data then we need to load the movie below
            },

            loadMovie(e) {
               //debugger; //comment out when this part is working 
               e.preventDefault(); //preventing the default of an anchor tag: blocking a page reload

               dataKey = e.currentTarget.getAttribute('href'); //give me the href thats a video name
               currentData = this.videodata.filter(video => video.vid_path === dataKey); //pulling the object and setting it as current data

               //referring to vue attributes and putting them inside
               this.videotitle = currentData[0].vid_name;
               this.videodescription = currentData[0].vid_desc;
               this.videosource = dataKey; //how to target an href? outer link

               this.showDetails = true;

               setTimeout(function(){ window.scrollTo(0, 1200)}, 500);
            },

            fetchMovieData(movie) { 
                // this is a ternary statement (shorthand for if / else). left of the : is true, right is false 
                let url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';

                fetch(url)
                .then(res => res.json()) //the line that connects the json to a local project
                .then(data => {
                    console.log(data); 

                    if(movie) {
                        this.singledata = data; //if we load the page one video comes up
                    } else {
                        this.videodata = data; //all the videos come up if we dont specify one
                    }
                })
                .catch(function(error) {
                    console.log(error); //making an error
                });
            }
        }

    });
})();