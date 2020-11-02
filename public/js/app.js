console.log('Client side javascript file is loaded!')


const searchForm = document.querySelector('form')
const input = document.querySelector('input')
const responseText = document.querySelector('#msg-1')
const errorText = document.querySelector('#msg-2')

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = input.value
    fetch(`./weather?address=${location}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                responseText.textContent = data.error
            }else{
                responseText.textContent = data.location + " is now at " + data.current +" degrees. and it feelslike " + data.feelslike + "degrees."
                console.log(data);
            }
        })
    })
})