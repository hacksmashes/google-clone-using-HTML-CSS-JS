let dark_m = document.getElementById("dark")            // Dark theme image element
let light_m = document.getElementById("light")          // Light theme image element
let b = document.body                                   // Body
let gmail = document.getElementById("gmail")            // Gmail element
let images = document.getElementById("images")          // Google images element
let app = document.getElementById("app")                // Google apps element
let brand = document.getElementById("gl_dt")            // Google logo element
let ip = document.getElementById("ip")                  // Input area element
let input = document.getElementById("search_field")     // Input element
let b1 = document.getElementById("box_1")
let b2 = document.getElementById("box_2")
let langs_head = document.getElementById("langs_head")  // Languages heading
let country = document.getElementById("country")        // Country name
let b_nav = document.getElementById("bottom_nav")       // Bottom nav element
let nav_1 = document.getElementById("nav_1")
let nav_2 = document.getElementById("nav_2")
let a_h = document.getElementsByClassName("app_h")      // Google apps heading
let l = document.getElementsByClassName("l")            // Languages list
let a_b = document.getElementsByClassName("app_box")    // Google boxes

function ip_check()
{
    let trimmed_val = input.value.trim()
    if (trimmed_val.length === 0)
    {
        
        alert("You haven't type anything, Type something to search")
        document.getElementById("search_bar").setAttribute("action", " ")
        window.location.reload()
    }
}

// Event listener of dark theme button
dark_m.addEventListener("click", function()
{
    light_m.style.display = "block";
    dark_m.style.display = "none";
    b.style.backgroundColor = "#202124";
    document.getElementById("gl_apps").style.backgroundColor = "#303134"
    gmail.style.color = "white";
    images.style.color = "white";
    app.style.filter = "none";
    brand.setAttribute("src", "sources/gl_lt.png");
    ip.style.border = "1px solid #5f6368";
    input.setAttribute("style", "background-color: #202124; color: #bdc1c6; box-shadow: none");
    b1.setAttribute("style", "background-color: #303134; border: 1px solid #303134; border-radius: 4px; color: #e8eaed;")
    b2.setAttribute("style", "background-color: #303134; border: 1px solid #303134; border-radius: 4px; color: #e8eaed;")
    langs_head.setAttribute("style", "color: #bdc1c6")
    nav_1.setAttribute("style", "background:#171717; color:#9aa0a6;")
    nav_2.setAttribute("style", "background:#171717; color:#9aa0a6;")
    country.setAttribute("style", "background:#171717; color:#9aa0a6; border-bottom:1px solid #212327;")
    b_nav.setAttribute("style", "background:#171717; color:#9aa0a6;")

    for (let j = 0; j < 9; j++)
    {
        l[j].style.color = "#8ab4f8"
    }

    for (let i = 0; i < 13; i++)
    {
        a_h[i].style.color = "white"
    }
})


// Event listener of light theme button
light_m.addEventListener("click", function()
{
    light_m.style.display = "none";
    dark_m.style.display = "block";
    b.style.backgroundColor = "white";
    document.getElementById("gl_apps").style.backgroundColor = "white"
    gmail.style.color = "#202124";
    images.style.color = "#202124";
    app.style.filter = "invert(1)";
    brand.setAttribute("src", "sources/gl_dt.png");
    ip.style.border = "1px solid #dfe1e5";
    input.setAttribute("style", "background-color: white; color: #202124; box-shadow: none");
    b1.setAttribute("style", "background-color: #f8f9fa; color: #3c4043; border: 1px solid #f8f9fa;")
    b2.setAttribute("style", "background-color: #f8f9fa; color: #3c4043; border: 1px solid #f8f9fa;")
    langs_head.setAttribute("style", "color: #3c4043")
    nav_1.setAttribute("style", "background:#f2f2f2; color:#70757a;")
    nav_2.setAttribute("style", "background:#f2f2f2; color:#70757a;")
    country.setAttribute("style", "background:#f2f2f2; color:#70757a; border-bottom:1px solid #dadce0;")
    b_nav.setAttribute("style", "background:#f2f2f2; color:#70757a;")

    for (let j = 0; j < 9; j++)
    {
        l[j].style.color = "#1a0dab"
    }

    for (let i = 0; i < 13; i++)
    {
        a_h[i].style.color = "black"
    }
})


// Event listener of Google apps button
let count = 0;
app.addEventListener("click", function()
{
    // Google apps will appear when count is an even number
    if (count % 2 === 0)
    {
        count += 1;
        document.getElementById("apps_menu").setAttribute("style", "opacity: 1;")
    } 
    
    // Google apps will not appear when count is an odd number
    else
    {
        count += 1;
        document.getElementById("apps_menu").setAttribute("style", "opacity: 0;")
    }
}
)
