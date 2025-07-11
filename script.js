const leadForm = document.getElementById("lead-form");
const leadsContainer = document.getElementById("leads-container");
const toggleTheme = document.getElementById("toggle-theme");

let leads = JSON.parse(localStorage.getItem("leads")) || [];

function saveLeads() {
    localStorage.setItem("leads", JSON.stringify(leads));
}

function renderLeads() {
    leadsContainer.innerHTML = "";

    leads.forEach((lead, index) => {
        const card = document.createElement("div");
        card.className = "lead-card" + (lead.contacted ? " contacted" : "");
        card.innerHTML = `
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Phone:</strong> ${lead.phone}</p>
            <p><strong>Source:</strong> ${lead.source}</p>
            <div class="actions">
                <button onclick="toggleContacted(${index})">
                    ${lead.contacted ? "Uncontact" : "Contacted"}
                </button>
                <button onclick="deleteLead(${index})">Delete</button>
            </div>
        `;
        leadsContainer.appendChild(card);
    });
}

leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newLead = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        source: document.getElementById("source").value,
        contacted: false
    };
    leads.push(newLead);
    saveLeads();
    renderLeads();
    leadForm.reset();
});

function toggleContacted(index) {
    leads[index].contacted = !leads[index].contacted;
    saveLeads();
    renderLeads();
}

function deleteLead(index) {
    leads.splice(index, 1);
    saveLeads();
    renderLeads();
}

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

renderLeads();
