$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/greeting"
    }).then(function(data, status, jqxhr) {
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
        console.log(data.content);
    });

    var granimInstance = new Granim({
        element: '#canvas-interactive',
        name: 'interactive-gradient',
        elToSetClassOn: '.canvas-interactive-wrapper',
        direction: 'diagonal',
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 800,
        states : {
            "default-state": {
                gradients: [
                    ['#B3FFAB', '#12FFF7'],
                    ['#1A2980', '#26D0CE']
                ],
                transitionSpeed: 5000
            },
            "violet-state": {
                gradients: [
                    ['#9D50BB', '#6E48AA'],
                    ['#4776E6', '#8E54E9']
                ],
                transitionSpeed: 2000
            },
            "orange-state": {
                gradients: [ ['#FF4E50', '#F9D423'] ],
                loop: false
            }
        }
    });

// With jQuery
    $('#default-state-cta').on('mouseover', function(event) {
        event.preventDefault();
        granimInstance.changeState('default-state');
        setClass('#default-state-cta')
    });
    $('#violet-state-cta').on('mouseover', function(event) {
        event.preventDefault();
        granimInstance.changeState('violet-state');
        setClass('#violet-state-cta')
    });
    $('#orange-state-cta').on('mouseover', function(event) {
        event.preventDefault();
        granimInstance.changeState('orange-state');
        setClass('#orange-state-cta')
    });

    function setClass(element) {
        $('.canvas-interactive-wrapper a').removeClass('active');
        $(element).addClass('active');
    };

})