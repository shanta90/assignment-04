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
