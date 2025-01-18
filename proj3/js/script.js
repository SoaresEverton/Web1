function changeStatus(tableId) {
    const table = document.getElementById(tableId);
    const statusDiv = table.querySelector(".status");
    const states = ["available", "occupied", "reserved"];
    const stateNames = {"available": "Disponível", "occupied": "Ocupada", "reserved": "Reservada"};
    let currentIndex = states.findIndex(state => table.classList.contains(state));
    table.classList.remove(states[currentIndex]);
    let newState = states[(currentIndex + 1) % states.length];
    table.classList.add(newState);
    statusDiv.textContent = stateNames[newState];
}
