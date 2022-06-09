const reviews = [

    {
        name: "John",
        location: "Coventry, January 2022",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque mollitia earum recusandae quasi vero ex dolor, neque voluptatum."
    },
    {
        name: "Kofi",
        location: "London, March 2022",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deserunt quia beatae quasi sint omnis aliquid molestiae aliquam eum modi"
    },
    {
        name: "Sam",
        location: "Leicester, May 2022",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque eum maiores non, tempore ea inventore, ducimus recusandae, tempora quibusdam consequuntur quidem quam. Dolorem sint, minima illum et veritatis omnis! Quisquam maxime rem accusamus ea iusto aliquam!"
    },
    {
        name: "Billy",
        location: "London, April 2022",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deserunt quia beatae quasi sint omnis aliquid molestiae aliquam eum modi"
    },
    {
        name: "Bob",
        location: "Manchester, June 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero soluta deserunt voluptas harum architecto? Impedit ipsum est rem nulla reprehenderit natus, non libero sapiente eius esse qui modi illum at sed? Quod velit ut laborum, cumque ab ipsa ratione aliquid, accusantium accusamus voluptate deleniti, eius fuga ducimus iste quis! Iste repellendus eos laudantium."
    },

]
const productOverview = () => {
    let productDetails =
        `<h2>Product Overview</h2>
        <p>Check out this amazing protein shake</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero soluta deserunt voluptas harum architecto? Impedit ipsum est rem nulla reprehenderit natus, non libero sapiente eius esse qui modi illum at sed? Quod velit ut laborum, cumque ab ipsa ratione aliquid, accusantium accusamus voluptate deleniti, eius fuga ducimus iste quis! Iste repellendus eos laudantium.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum adipisci culpa dolore laudantium error
            voluptate est reprehenderit, aperiam quia veritatis asperiores qui porro optio doloremque? Voluptate
            illo facere expedita, at sunt earum cum laudantium sequi unde quia est eveniet alias iste deserunt modi
            reiciendis velit officiis quas ab itaque. Iste voluptatibus ipsum maiores voluptates odio illo expedita
            earum? Distinctio ab corporis minima ipsum atque dolorum recusandae voluptatem deleniti aliquam rem, et
            ullam illum illo suscipit explicabo ex sint veniam ipsa optio similique asperiores. Dolorem eveniet
            similique cupiditate aliquam. Itaque, corrupti quod? At, eos impedit. Aspernatur nobis consequatur
            doloribus dicta ipsum.</p>
                
        <div class="img-container">
            <img class="img-container-images" src="optinum_nutrition.png" alt="optinum nutrition protein shake">
            <img class="img-container-images" src="optinum_nutrition.png" alt="optinum nutrition protein shake">
            <img class="img-container-images" src="optinum_nutrition.png" alt="optinum nutrition protein shake">
            <img class="img-container-images" src="optinum_nutrition.png" alt="optinum nutrition protein shake">
        </div>

        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum quis, velit consectetur architecto voluptatem tempora harum, vero veritatis, explicabo impedit cupiditate est maxime. Saepe vel ab error, quisquam, repellendus velit, optio inventore voluptatibus non aut reiciendis animi? Earum impedit debitis aspernatur. Repellendus est animi id deleniti fuga sint esse nisi similique optio praesentium, error explicabo, tempora qui rerum quam? Distinctio quia facere nesciunt voluptates illo voluptatibus non odio culpa."</p>
            
        <div>
            <article class="showcase">
                <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis atque dolores unde sunt ipsam consectetur dicta nihil, doloribus inventore saepe voluptate animi ea architecto ut, tenetur at pariatur odit tempora. Molestiae minima sint voluptates, laudantium quos ab iusto? Pariatur quo repellendus blanditiis ipsam unde molestias nemo aspernatur beatae quidem officiis voluptatum inventore, deleniti harum, soluta veritatis fugiat perspiciatis dolorum magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem ab perferendis, exercitationem quas quisquam! Blanditiis ducimus assumenda, aut fugiat eos maiores eveniet. Ipsam repudiandae aliquam aliquid. Dolor totam enim omnis, provident modi quisquam repellat facilis accusamus nisi nam rerum porro fugiat ipsum animi? Sunt sint eum ullam suscipit accusamus mollitia omnis ipsam laboriosam atque officia minus nihil nulla facilis repellat fugiat eos provident esse, dolores saepe quis dignissimos modi. Magni voluptatem, harum ad ducimus impedit animi dolor voluptas error repudiandae sapiente minima pariatur, sed facere, aliquam necessitatibus amet. Beatae aliquam soluta id molestias fuga provident ea, praesentium dolorum distinctio!"</p> 
                <img class="showcase-img" src="optinum_nutrition.png" alt="optinum nutrition protein shake">
            </article>
        </div>`

    productDetailsContainer.innerHTML = productDetails;
}

const buttons = document.querySelectorAll("button");
const productDetailsContainer = document.querySelector(".product-details-container");

window.addEventListener("DOMContentLoaded", () => {
    productOverview();
})

buttons.forEach((btn) => {
    
    // Add event to buttons that display new HTML on click
    btn.addEventListener("click", e => {

        // Get dataset of each button
        const menu = e.currentTarget.dataset.id;

        // Compare dataset to title heading
        if (menu === "product") {
            productOverview()

        } else if (menu === "reviews") {
            // Display dyanmic content using map
            let productReviews = reviews.map(review => {
                return ` 
                <div class="review-container">
                <p>${review.name}</p>
                <p>${review.location}</p>
                <p>${review.description}</p>
                </div>`
            }).join("")

            productDetailsContainer.innerHTML = `<h2>Product Reviews</h2>`;
            productDetailsContainer.innerHTML += productReviews;

        } else {
            console.log("extra clicked");
            alert("Nothing here yet!...")
        }
    })
});