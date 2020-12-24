"use strict"

module.exports = (event, context) => {
    // let redirect;
    // if(event.path == "/home") {
    //     redirect = "https://www.alexellis.io/";
    // } else if(event.path == "/sponsors" || event.path == "/insiders") {
    //     redirect = "https://github.com/users/shivamgarg97/sponsorship";
    // }
    // if(!redirect) {
    //     return context
    //         .status(400)
    //         .fail("Unknown short URL");
    // }
    // context
    //     .status(302)
    //     .headers({"location": redirect})
    //     .succeed();
    console.log("hello goto")
}
