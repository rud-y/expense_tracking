const baseURL = "http://localhost:3000/api/expenses"

export default {
    
    getExpenses(){
        return fetch(baseURL)
        .then(res => res.json())
    },

    postExpense(payload){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

    deleteExpense(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
}