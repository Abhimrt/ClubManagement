const signup = [
    {
        name: "email",
        title: "Your Email",
        placeholder: "name@miet.ac.in",
        type: "text",
        required: true
    },
    {
        name: "password",
        title: "Your Password",
        placeholder: "••••••••",
        type: "password",
        required: true
    },
    {
        name: "Cpassword",
        title: "Confirm Password",
        placeholder: "••••••••",
        type: "password",
        required: true
    },
]

const info = [
    {
        name: "name",
        title: "Your Name",
        placeholder: "Abhishek Singhal",
        type: "text",
        required: true
    },
    {
        name: "photo",
        title: "Photo",
        placeholder: "https://drive.google.com/file/d/1SQ7ttMeU76Okhg5A5sxw/view?usp=sharing",
        type: "text",
        required: false
    }
]
const login = [
    {
        name: "email",
        title: "Your Email",
        placeholder: "name@miet.ac.in",
        type: "text",
        required: true
    },
    {
        name: "password",
        title: "Your Password",
        placeholder: "••••••••",
        type: "password",
        required: true
    },
]

export { signup, info, login }