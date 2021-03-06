let root = document.documentElement;

var app = new Vue({
    el: '#app',
    data: {
        background: '#FFFFFF',
        color1: '#F519B7',
        color2: '#0085DE',
        color3: '#00D08E',
        color4: '#C47ED8'
    },
    methods: {
        changeColor: function () {
            root.style.setProperty('--color1', this.color1);
            root.style.setProperty('--color2', this.color2);
            root.style.setProperty('--color3', this.color3);
            root.style.setProperty('--color4', this.color4);
            root.style.setProperty('--background', this.background);
        }
    },
    beforeMount(){
        this.changeColor()
    },
})
