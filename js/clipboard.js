function clipboard() {
    var urlbox = document.getElementById( 'textbox-url' );
    urlbox.select();
    document.execCommand( 'Copy' );
    alert( 'URL 이 복사 되었습니다.' );
}