const reviews = [
  
    {
        name: "john",
        location: "coventry, UK",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deserunt quia beatae quasi sint omnis aliquid molestiae aliquam eum modi"
    },
    {
        name: "kofi",
        location: "london, UK",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deserunt quia beatae quasi sint omnis aliquid molestiae aliquam eum modi"
    },
    {
        name: "sam",
        location: "leicester, UK",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deserunt quia beatae quasi sint omnis aliquid molestiae aliquam eum modi"
    },
    {
        name: "billy",
        location: "london, UK",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deserunt quia beatae quasi sint omnis aliquid molestiae aliquam eum modi"
    },
    {
        name: "bob",
        location: "manchester, UK",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deserunt quia beatae quasi sint omnis aliquid molestiae aliquam eum modi"
    },
    
]


const buttons = document.querySelectorAll("button")
const productDetailsContainer = document.querySelector(".product-details-container")
const h2 = document.querySelector("h2")


window.addEventListener("DOMContentLoaded" , () => {
    productOverview()

})

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const menu = e.currentTarget.dataset.id

        if (menu === "product") {
            productOverview()

        } else if (menu === "reviews") {
            let productReviews = reviews.map((review) => {
                return ` 
                <p>${review.name}</p>
                <p>${review.location}</p>
                <p>${review.description}</p>`

            }).join("")

            productDetailsContainer.innerHTML = `<h2>Product Reviews</h2>`
            productDetailsContainer.innerHTML += productReviews;
    
            console.log("reviews clicked");

           } else {
               console.log("extra clicked");
           }
        }) 
    
    })
    

const productOverview = () => {

    let productDetails = 
            `<h2>Product Overview</h2>
            <p>One liner</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum adipisci culpa dolore laudantium error
                voluptate est reprehenderit, aperiam quia veritatis asperiores qui porro optio doloremque? Voluptate
                illo facere expedita, at sunt earum cum laudantium sequi unde quia est eveniet alias iste deserunt modi
                reiciendis velit officiis quas ab itaque. Iste voluptatibus ipsum maiores voluptates odio illo expedita
                earum? Distinctio ab corporis minima ipsum atque dolorum recusandae voluptatem deleniti aliquam rem, et
                ullam illum illo suscipit explicabo ex sint veniam ipsa optio similique asperiores. Dolorem eveniet
                similique cupiditate aliquam. Itaque, corrupti quod? At, eos impedit. Aspernatur nobis consequatur
                doloribus dicta ipsum.</p>
        </div>`
    
        productDetailsContainer.innerHTML = productDetails;
}


/* iterate through buttons
on button click, trigger event
filter through button clicked */