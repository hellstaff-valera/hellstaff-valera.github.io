$("#sendMail").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if(email == "") {
        $("#errorMess").text("Введіть email");
        return false;
    } else if(name == "") {
        $("#errorMess").text("Введіть ім'я");
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Введіть телефон");
        return false;
    } else if(message.length < 5) {
        $("#errorMess").text("Введіть  повідомлення не менше 5 символів");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: '/assets/ajax/mail.php',
        tupe: 'POST',
        cache: false,
        data: { 'email': email, 'name': name, 'phone': phone, 'message': message},
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
                alert("Виявлено помилки, повідомлення не відправлено!");
            else
                $("#mailForm").trigger("reset");

            $("#sendMail").prop("disabled", false);
        }
    })
});