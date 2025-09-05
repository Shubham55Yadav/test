// Add your API endpoint here
var API_ENDPOINT = "https://mvvcom19kl.execute-api.us-east-1.amazonaws.com/prod";

// AJAX POST request to save user data
document.getElementById("saveuser").onclick = function(){
    var inputData = {
        "userid": $('#userid').val(),
        "name": $('#name').val(),
        "Class": $('#Class').val(),
        "age": $('#age').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("userSaved").innerHTML = "User Data Saved!";
        },
        error: function () {
            alert("Error saving user data.");
        }
    });
}

// AJAX GET request to retrieve all users
document.getElementById("getusers").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#userTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#userTable").append("<tr> \
                    <td>" + data['userid'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['Class'] + "</td> \
                    <td>" + data['age'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving user data.");
        }
    });
}