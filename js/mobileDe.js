function getAdvertIdFromElement(el) {
    var id = $(el).attr('href').substring($(el).attr('href').indexOf("id=") + 3);
    id = id.substring(0, id.indexOf("&"));
    return id;
}

function formatAdvert(that) {
    var el = $('.vehicle-data--ad-with-price-rating-label');
    var inner = el.html();
    while (inner.indexOf(',') > -1) {
        inner = inner.replace(',', '<br/>');
    }
    el.html(inner);
}