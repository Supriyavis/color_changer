const buttons=document.querySelectorAll('.button')
//console.log(buttons)
const body=document.querySelector("body")
buttons.forEach(function(button){
console.log(button)
button.addEventListener('click',function(e){
console.log(e)
console.log(e.target)
if(e.target.id==='red')
{
    body.style.backgroundColor="red"
}
if(e.target.id==='palevioletred')


    {
        body.style.backgroundColor="palevioletred"
    }

    if(e.target.id==='blue')
        {
            body.style.backgroundColor="blue"
        }
        if(e.target.id==='green')
            {
                body.style.backgroundColor="green"
            }
            
        
});
});
