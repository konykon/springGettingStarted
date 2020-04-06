let greeting = () => {
    let name = $('#name').val();
    let url = 'http://localhost:8080/greeting?name=' + name;
    $.ajax(url)
        .done(function (response) {
            $('<p/>',{
                text: response.content,
                id: response.id
            }).appendTo('#greeting-content');
        })
        .fail(function (error) {
            console.log(error);
        });
}