// Set the base URL dynamically
(function() {
    var base = document.createElement('base');
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        base.href = '/';
    } else {
        base.href = '/WD-SEATWORK-4-JIGABOO-TX03/';
    }
    document.head.appendChild(base);
})();
