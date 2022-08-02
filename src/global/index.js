import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    .container {
        width: 80%;
        height: 100%;
        margin: auto;
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    h1, h2, h3 {
        margin: 0;
    }

    .mt-5 {
        margin-top: 5rem;
    }

    .flex-1 {
        flex-basis: 1;
    }

    .flex-2 {
        flex-basis: 2;
    }

    .flex-3 {
        flex-basis: 3;
    }

    .flex-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    } 

    .ml-5 {
        margin-left: 2rem;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    } 

    .text-center {
        text-align: center;
    }

    .text-white {
        color: #fff;
    }

    .text-justify {
        text-align: justify;
    }

    .text-left {
        text-align: left ;
    }

    .text-right {
        text-align: right;
    }

    .h-100 {
        height: 100vh;
        object-fit: cover;
    }

    .w-50 {
        width: 50%;
    }

    .w-70 {
        width: 70%;
    }

    .grid-3 {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .grid-5 {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .lg-heading {
        font-size: 4rem;
    }

    .sm-heading {
        font-size: 2rem;
    }

    .mx-auto {
        margin: auto;
        width: 80%;
    }

    .mr-2 {
        margin-right: 2rem;
    }

    .mr-3 {
        margin-right: 3rem;
    }

    .mr-5 {
        margin-right: 5rem;
    }

    .mt-3 {
        margin-top: 3rem;
    }

    .mt-4 {
        margin-top: 4rem;
    }

    .mt-5 {
        margin-top: 5rem;
    }

    .mb-2 {
        margin-bottom: 2rem;
    }

    .mb-3 {
        margin-bottom: 3rem;
    }

    .mb-4 {
        margin-bottom: 4rem;
    }

    .mb-5 {
        margin-bottom: 5rem;
    }

    .display-none-lg {
        display: none;
    }

    .p-2 {
        /* max-width: 50%;
        flex-basis: 50%; */
        padding: 2rem;
    }


    .p-5 {
        /* max-width: 50%;
        flex-basis: 50%; */
        padding: 5rem;
    }

    .form-group {
        margin-bottom: 30px;
        display: block;
    }

    .form-group label {
        display: block;
    }

    .form-control {
        background-color: #eee;
        padding: 15px 20px;
        border: none;
        width: 30vw;
    }

    .form-control:focus {
        outline: none;
    }

    .bg-dark {
        background-color: #222;
    }

    @media(max-width: 900px){

        .image-sm {
            display: none;
        }

        .display-none-lg {
            display: block;
        }

        .text-lg-sm {
            font-size: 2.5rem;
        }

        .text-sm {
            font-size: 2rem;
        }

        .text-center-sm {
            text-align: center;
        }

        .flex-column-sm {
            flex-direction: column;
        }

        .grid-3 {
            grid-template-columns: repeat(1, 1fr);
        }

        .grid-4 {
            grid-template-columns: repeat(1, 1fr);
        }

        .grid-5 {
            grid-template-columns: repeat(1, 1fr);
        }



        .w-100-sm {
            width: 90%;
        }

    }
`;

export default GlobalStyles;