var choreographer = new Choreographer({
    animations: [
        {
            range: [-1, window.innerHeight * 2],
            selector: '#box',
            type: 'scale',
            style: 'opacity',
            from: 0,
            to: 1
        },
        {
            range: [-1, window.innerHeight],
            selector: '#titre',
            type: 'scale',
            style: 'font-size',
            from: 8,
            to: 16,
            unit: 'rem'
        }
    ]
})

window.addEventListener('scroll', function() {
    choreographer.runAnimationsAt(window.pageYOffset)
})
