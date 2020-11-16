const displayDate = function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var today = day + '/' + month + '/' + year;
    return today;
}

export default displayDate;
