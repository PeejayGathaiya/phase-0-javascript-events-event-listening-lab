function addingEventListener() {
    const input = document.getElementById('input')

    function clickHere(){
        alert('You clicked on this button!')
    }

    input.addEventListener('click', clickHere)

    // input.addEventListener('click', function(){
    //     alert('I was clicked')})
}
