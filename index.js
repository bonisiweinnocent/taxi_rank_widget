document.addEventListener('alpine:init', () => {
    Alpine.data('container', () => {
        return {
            init() {
                console.log("Hello World");
                

                this.queues = this.ranks.map(rank => {
                    return new Rank(rank)
                })
                
               
            },
            open: false,
            ranks: ['Langa', 'Somora', 'Nyanga', 'Belhar'],
            queues: []


        }
        
    })
})