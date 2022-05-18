document.addEventListener('alpine:init', () => {
    Alpine.data('container', () => {
        return {
            init() {
                console.log("Hello World");
                this.routes = this.routesData.map(route => {
                    return new Rank(route.name, route.price)
                })

            },
            open: false,
            routesData: [{ name: 'Langa', "price": 14.00 }, { name: 'Samora', "price": 21.00 }, { name: 'Belhar', "price": 25.00 }, { name: 'Nyanga', "price": 22.00 }],
            queues: [],

            overallTotal(){
                let total = 0
                this.routes.forEach(route => {
                    total += route.totalIncome()
                    
                });
                return total
            }
        }

    })
})