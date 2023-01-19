export function formatDate(date: Date){
    let newDate = new Date(date);
    let formattedDate = newDate.toLocaleDateString("pt-BR", {year: 'numeric', month: 'numeric', day: 'numeric'}) 
    return formattedDate
}