// 1. if ticket number is less then or equal 100, per ticket price = 100tk,

// 2. if ticket number is more then or equal 100, but less then or equal 200,
//   a.first 100 ticket price will be : 100tk,
//   b. rest ticket price will be : 90tk,

// 3. if ticket number is more then 200,
//   a.first 100 ticket price will be : 100tk,
//   c.second 101-200 ticket price will be : 90tk;
//   b. rest ticket price will be : 70tk,


function ticketQuantity (number){
    const first100Ticket = 100;
    const second100Ticket = 90;
    const restTicketPrice = 70;
    if(number <= 100){
        const price = number * first100Ticket;
        return price;
    }
    else if(number <= 200){
        const first100Price = 100 * first100Ticket;
        const rest = number - 100;
        const restTicket = rest * second100Ticket;
        const totalTickets = first100Price + restTicket;
        return totalTickets;
    }
    else if(number > 200){

        

        const first100Prices = 100 * first100Ticket;
        const second100Tickets = 200 -100;
        const second100TicketsPrice = second100Tickets * second100Ticket;
        const restTickets = number - 200;
        const restTicketPrices = restTickets * restTicketPrice;
        const totalPrices = first100Prices + second100TicketsPrice + restTicketPrices;
        return totalPrices;
    }
}
const totalTicket = 250;
const totalAmount = ticketQuantity(totalTicket);
console.log(totalAmount);