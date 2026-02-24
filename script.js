// 1. Data Area
let allJobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "available"
    },
    {
        id: 2,
        company: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "available"
    },
    {
        id: 3,
        company: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data sets into intuitive and interactive visualizations. Experience with D3.js or similar libraries is preferred.",
        status: "available"
    }
];
// Generate more
const names = ["Tech", "Cloud", "Soft", "Data", "Cyber", "Web", "App", "Dev", "Mega", "Global"];
const roles = ["Developer", "Designer", "Engineer", "Manager", "Analyst"];
const cities = ["New York", "London", "Remote", "Dhaka", "Austin"];

for (let i = 4; i <= 40; i++) {
    allJobs.push({
        id: i,
        company: names[i % names.length] + " Solutions " + i,
        position: roles[i % roles.length],
        location: cities[i % cities.length],
        type: "Full-time",
        salary: "$100k - $150k",
        description: "This is a simple job description. Join our team to build amazing products.",
        status: "available"
    });
}
// 2. Logic Area

function updateStats() {
    let total = allJobs.length;
    let interviewCount = 0;
    let rejectedCount = 0;

    for (let i = 0; i < allJobs.length; i++) {
        if (allJobs[i].status === "interview") {
            interviewCount++;
        } else if (allJobs[i].status === "rejected") {
            rejectedCount++;
        }
    }

    document.getElementById("total-count").innerText = total;
    document.getElementById("interview-count").innerText = interviewCount;
    document.getElementById("rejected-count").innerText = rejectedCount;
}

function deleteJob(jobId) {
    allJobs = allJobs.filter(function (job) {
        return job.id !== jobId;
    });

    // Refresh the current view
    let currentTab = getCurrentActiveTab();
    renderJobs(currentTab);
    updateStats();
}

function moveToInterview(jobId) {
    for (let i = 0; i < allJobs.length; i++) {
        if (allJobs[i].id === jobId) {
            allJobs[i].status = "interview";
            break;
        }
    }
    // After moving, refresh the current tab
    let currentTab = getCurrentActiveTab();
    renderJobs(currentTab);
    updateStats();
}

function moveToRejected(jobId) {
    for (let i = 0; i < allJobs.length; i++) {
        if (allJobs[i].id === jobId) {
            allJobs[i].status = "rejected";
            break;
        }
    }
    // After moving, refresh the current tab
    let currentTab = getCurrentActiveTab();
    renderJobs(currentTab);
    updateStats();
}

// Find out which tab is currently selected
function getCurrentActiveTab() {
    if (document.getElementById("filter-all").classList.contains("btn-primary")) return "available";
    if (document.getElementById("filter-interview").classList.contains("btn-primary")) return "interview";
    return "rejected";
}

// Tab shifting function
function filterJobs(filterName) {
    // 1. Reset buttons
    document.querySelectorAll("#filters button").forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("bg-white", "text-gray-500");
    });
 // 2. Set active button
    // Note: the button ID for the first tab is filter-all, but the status we use is 'available'
    let btnId = "filter-" + (filterName === "available" ? "all" : filterName);
    document.getElementById(btnId).classList.add("btn-primary");
    document.getElementById(btnId).classList.remove("bg-white", "text-gray-500");

    // 3. Re-draw the list
    renderJobs(filterName);
}

// 3. Drawing Area
function renderJobs(statusFilter = "available") {
    let listContainer = document.getElementById("job-list");
    listContainer.innerHTML = "";

    // Get jobs for the selected tab
    let jobsToShow = [];
    if (statusFilter === "available") {
        // 'All' tab shows everything
        jobsToShow = allJobs;
    } else {
        // Specific tabs show filtered items
        for (let i = 0; i < allJobs.length; i++) {
            if (allJobs[i].status === statusFilter) {
                jobsToShow.push(allJobs[i]);
            }
        }
    }

    // Update the list count header
    if (statusFilter === "available") {
        document.getElementById("jobs-header-count").innerText = allJobs.length + " jobs";
    } else {
        document.getElementById("jobs-header-count").innerText = jobsToShow.length + " of " + allJobs.length + " Jobs ";
    }

    // EMPTY STATE - Show if no jobs in this tab
    if (jobsToShow.length === 0) {
        listContainer.innerHTML = `
            <div class="bg-white rounded-lg p-20 flex flex-col items-center justify-center text-center shadow-sm border border-gray-50 mt-4">
                <div class="w-24 h-28 bg-blue-100 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                    <svg width="48" height="60" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 0C1.79 0 0 1.79 0 4V46C0 48.21 1.79 50 4 50H36C38.21 50 40 48.21 40 46V12L28 0H4Z" fill="#93c5fd" />
                        <path d="M28 0V12H40L28 0Z" fill="#60a5fa" />
                        <rect x="8" y="20" width="24" height="2" rx="1" fill="white" fill-opacity="0.9" />
                        <rect x="8" y="26" width="24" height="2" rx="1" fill="white" fill-opacity="0.9" />
                        <rect x="8" y="32" width="24" height="2" rx="1" fill="white" fill-opacity="0.9" />
                        <rect x="8" y="38" width="16" height="2" rx="1" fill="white" fill-opacity="0.9" />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-800 mb-2">No jobs available</h3>
                <p class="text-gray-400 font-medium">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }

    // DRAW CARDS
    for (let i = 0; i < jobsToShow.length; i++) {
        let job = jobsToShow[i];

        // Dynamic badge color
        let badgeStyle = "bg-blue-100 text-blue-600";
        let badgeText = "NOT APPLIED";

        if (job.status === "interview") {
            badgeStyle = "bg-green-100 text-green-600";
            badgeText = "INTERVIEW";
        } else if (job.status === "rejected") {
            badgeStyle = "bg-red-100 text-red-600";
            badgeText = "REJECTED";
        }

        let card = `
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-6 relative">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-xl font-bold text-slate-800">${job.company}</h3>
                        <p class="text-gray-500 font-medium">${job.position}</p>
                    </div>
                    <button onclick="deleteJob(${job.id})" class="text-gray-300 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                
                <div class="flex gap-4 text-sm text-gray-400 mt-3 mb-4">
                    <span>${job.location}</span>
                    <span>• ${job.type}</span>
                    <span>• ${job.salary}</span>
                </div>
                
                <div class="mb-5">
                    <span class="px-4 py-1.5 rounded text-xs font-bold uppercase ${badgeStyle}">${badgeText}</span>
                </div>
                
                <p class="text-gray-500 text-sm mb-6 leading-relaxed">${job.description}</p>
                
                <div class="flex gap-3">
                    <button onclick="moveToInterview(${job.id})" class="btn btn-sm bg-white border-green-200 text-green-500 hover:bg-green-50 px-5 normal-case font-bold">INTERVIEW</button>
                    <button onclick="moveToRejected(${job.id})" class="btn btn-sm bg-white border-red-200 text-red-500 hover:bg-red-50 px-5 normal-case font-bold">REJECTED</button>
                </div>
            </div>
        `;
        listContainer.innerHTML += card;
    }
}

// Start the app
// window.onload = function () {
updateStats();
renderJobs("available"); // Show available jobs by default
// };
