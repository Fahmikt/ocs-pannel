
<button class="openPopup" type="button">Open Popup</button>


<script type="text/javascript">
document.querySelector('.openPopup').addEventListener('click', function() {
    var jPopupDemo = new jPopup({
        contentHtml: "<div class='container'>\
        <div class='popup'><div class='smile'>&#9786</div>\
        <h1>This is a popup!</h1>\
        <p>terimakasih</p>\
        <p>Isn't this pleasant. Serene. Lovely.</p>\
        <a href='https://www..com'>Back To Tutorial</a>\
        </div></div>"
    });
});
</script>