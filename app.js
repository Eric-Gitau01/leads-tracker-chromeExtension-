let airBnb = {
    name: "Airbnb",
    priceRange: "30$",
    availableRooms: 100,
    customerReviews: [
        {
            author: "John Doe",
            rating: 4,
            comment: "Great place to stay!"
        },
        {
            author: "Jane Smith",
            rating: 5,
            comment: "Love the cleanliness and comfort."
        },
        {
            author: "Michael Johnson",
            rating: 3,
            comment: "Service was slow and the location was not convenient."
        }
    ]
}

// console.log(airBnb.name); // Output: Airbnb

// console.log(airBnb.priceRange); // Output: 30$

// console.log(airBnb.availableRooms); // Output: 100

// console.log(airBnb.customerReviews); // Output: John Doe

console.log(airBnb.customerReviews[2].comment); // Output: John Doe