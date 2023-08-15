const NewPost = [
    {
        name:"name",
        placeH:"Name of the event",
        type:"text",
        title:"Name"
    },
    {
        name:"image",
        placeH:"https://drive.google.com/file/d/1-Tb7D4_6",
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
        name:"Location",
        placeH:"AUDI 4",
        type:"text",
        title:"Location"
    },
    {
        name:"contact",
        placeH:"9245XXXXXX",
        type:"number",
        title:"Contact"
    },
]

export  {NewPost}