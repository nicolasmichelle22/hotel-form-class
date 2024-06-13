
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// //jsx
// ReactDOM.render(
//     <div>
//         <h1 className="header">this is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>,
//     document.getElementById("root")
// )

const navbar = (
    <nav>
        <h1>Simon's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))


//how to add image

// const page = (
//     <div>
//         <img src="./img/logo.react.png"/>
//     </div>
// )

// ReactDOM.render(page, document.getElementById(root))