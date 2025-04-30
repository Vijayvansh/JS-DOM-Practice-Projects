const body = document.querySelector("body");
const buttons = document.querySelectorAll('.button');
const text = document.querySelectorAll('.text');

buttons.forEach((button) => {
    // add eventListener
    button.addEventListener('click', (eventObject) =>{
       
        // for decide text color after click event
        let textColor;
        
/*   -------------  Solution -> 1 [ Using if-else ]------------------------------------------------>

        if (eventObject.target.id === 'grey') {
            body.style.backgroundColor = eventObject.target.id;
            textColor = "blue";
        } else if (eventObject.target.id === 'white') {
            body.style.backgroundColor = eventObject.target.id;
            textColor = "black";
        } else if (eventObject.target.id === 'blue') {
            body.style.backgroundColor = eventObject.target.id;
            textColor = "white";
        } else if (eventObject.target.id === 'yellow') {
            body.style.backgroundColor = eventObject.target.id;
            textColor = "red";
        } else if (eventObject.target.id === 'orangered') {
            body.style.backgroundColor = eventObject.target.id;
            textColor = "white";
        } else{
            body.style.backgroundColor = "#212121";
            textColor = "white";
        }

------------------------------ Solution -> 1 -----------------------------------------------------*/


/*---------------------------- Solution -> 1 [ Using Switch-case ] ----------------------------------*/

        switch (eventObject.target.id) {
            case 'grey':
                body.style.backgroundColor = eventObject.target.id;
                textColor = "red";
                break;
            case 'white':
                body.style.backgroundColor = eventObject.target.id;
                textColor = "black";
                break;
            case 'blue':
                body.style.backgroundColor = eventObject.target.id;
                textColor = "white";
                break;
            case 'yellow':
                body.style.backgroundColor = eventObject.target.id;
                textColor = "red";
                break;
            case 'orangered':
                body.style.backgroundColor = eventObject.target.id;
                textColor = "yellow";
                break;
        
            default:
                body.style.backgroundColor = '#212121';
                textColor = "white";
                break;
        }

        // for change all text color according to click event
        text.forEach((textItem) => {
            textItem.style.color = `${textColor}`;
        })

/*---------------------------- Solution -> 1 [ Using Switch-case ] ----------------------------------*/
        
    })
})
