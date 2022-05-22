

// nav的jquery 
let main = $("#set-list-main");
let main_hidden = $("#nav-drowndrop-main");
main.hover(function(){
    main_hidden.stop(true).slideDown("fast")
},function(){
    main_hidden.slideUp(100)
})

let order = $("#set-list-order");
let order_hidden = $("#nav-drowndrop-order");
order.hover(function(){
    order_hidden.stop(true).slideDown("fast")
},function(){
    order_hidden.slideUp(100)
})

let help = $("#nav-tel-list");
let help_hidden = $(".tel-list-more");
help.hover(function(){
    help_hidden.stop(true).slideDown("fast")
},function(){
    help_hidden.slideUp(5)
})

let hotel = $("#nav_til_hotel");
let hotel_hidden = $("#nav_til_hotel_hid");
hotel.hover(function(){
    hotel_hidden.stop(true).slideDown("fast")
},function(){
    hotel_hidden.slideUp(100)
})

let trip = $("#nav_til_trip");
let trip_hidden = $("#nav_til_trip_hid");
trip.hover(function(){
    trip_hidden.stop(true).slideDown("fast")
},function(){
    trip_hidden.slideUp(100)
})

let plane = $("#nav_til_plane");
let plane_hidden = $("#nav_til_plane_hid");
plane.hover(function(){
    plane_hidden.stop(true).slideDown("fast")
},function(){
    plane_hidden.slideUp(100)
})

let train = $("#nav_til_train");
let train_hidden = $("#nav_til_train_hid");
train.hover(function(){
    train_hidden.stop(true).slideDown("fast")
},function(){
    train_hidden.slideUp(100)
})

let ship = $("#nav_til_ship");
let ship_hidden = $("#nav_til_ship_hid");
ship.hover(function(){
    ship_hidden.stop(true).slideDown("fast")
},function(){
    ship_hidden.slideUp(100)
})

let car = $("#nav_til_car");
let car_hidden = $("#nav_til_car_hid");
car.hover(function(){
    car_hidden.stop(true).slideDown("fast")
},function(){
    car_hidden.slideUp(100)
})

let ticket = $("#nav_til_ticket");
let ticket_hidden = $("#nav_til_ticket_hid");
ticket.hover(function(){
    ticket_hidden.stop(true).slideDown("fast")
},function(){
    ticket_hidden.slideUp(100)
})

let shopping = $("#nav_til_shopping");
let shopping_hidden = $("#nav_til_shopping_hid");
shopping.hover(function(){
    shopping_hidden.stop(true).slideDown("fast")
},function(){
    shopping_hidden.slideUp(100)
})

let card = $("#nav_til_card");
let card_hidden = $("#nav_til_card_hid");
card.hover(function(){
    card_hidden.stop(true).slideDown("fast")
},function(){
    card_hidden.slideUp(100)
})

let business = $("#nav_til_business");
let business_hidden = $("#nav_til_business_hid");
business.hover(function(){
    business_hidden.stop(true).slideDown("fast")
},function(){
    business_hidden.slideUp(100)
})

let more = $("#nav_til_more");
let more_hidden = $("#nav_til_more_hid");
more.hover(function(){
    more_hidden.stop(true).slideDown("fast")
},function(){
    more_hidden.slideUp(50)
})();


