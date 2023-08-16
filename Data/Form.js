const NewPost = [
    {
        name:"name",
        placeH:"Name of the event",
        type:"text",
        title:"Name"
    },
    {
        name:"image",
        placeH:"https://drive.google.com/file/d/1-Tb7Dw/view?usp=sharing",
        type:"text",
        title:"Image Link"
    },
    {
        name:"date",
        placeH:"",
        type:"date",
        title:"Date",
        min: new Date().toISOString().split('T')[0]
    },
    {
        name:"time",
        placeH:"Your Name",
        type:"time",
        title:"Time"
    },
    {
        name:"location",
        placeH:"AUDI 4",
        type:"text",
        title:"Location"
    },
    {
        name:"contact",
        placeH:"9245XXXXXX",
        type:"number",
        title:"Contact",
        min:"1000000000",
        max:"9999999999"
    },
]

export  {NewPost}