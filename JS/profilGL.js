//fungsi tombol edit
$(".edit-btn").on('click', function(e) {
    $(this).closest(".d-flex").find(".isi").addClass("disappear");
    $(this).closest(".d-flex").find(".edit-btn").addClass("disappear");
    $(this).closest(".mt-25").find(".data-input").removeClass("disappear");
});
$("#save, #cancel").on('click', function(e) {
    $(this).closest(".d-flex").find(".isi").removeClass("disappear");
    $(this).closest(".d-flex").find(".edit-btn").removeClass("disappear");
    $(this).closest(".mt-25").find(".data-input").addClass("disappear");
});

$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.foto-profil-edit').attr('src', e.target.result);
                $('.foto-profil').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});
