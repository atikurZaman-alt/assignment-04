const totalEl = document.getElementById("total");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");
const tabCountEl = document.getElementById("tabCount");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const noJobsDiv = document.getElementById("no-jobs");

let currentTab = "all";

function updateStatusUI(card, status) {
  const statusEl = card.querySelector(".status");

  statusEl.className =
    "status px-3 py-1 rounded text-sm font-semibold inline-block";

  if (status === "Interview") {
    statusEl.innerText = "Interview";
    statusEl.classList.add("bg-green-100", "text-green-700");
  } else if (status === "Rejected") {
    statusEl.innerText = "Rejected";
    statusEl.classList.add("bg-red-100", "text-red-700");
  } else {
    statusEl.innerText = "Not Applied";
    statusEl.classList.add("bg-gray-100", "text-gray-700");
  }
}

document.querySelectorAll(".card").forEach((card) => {
  card.dataset.status = "Not Applied";
  updateStatusUI(card, "Not Applied");
});

function updateDashboard() {
  const cards = document.querySelectorAll(".card");

  let interviewCount = 0;
  let rejectedCount = 0;

  cards.forEach((card) => {
    if (card.dataset.status === "Interview") interviewCount++;
    if (card.dataset.status === "Rejected") rejectedCount++;
  });

  totalEl.innerText = cards.length;
  interviewCountEl.innerText = interviewCount;
  rejectedCountEl.innerText = rejectedCount;
}

function updateTabCount() {
  const cards = document.querySelectorAll(".card");

  let count = 0;

  cards.forEach((card) => {
    if (currentTab === "all") count++;
    else if (card.dataset.status === currentTab) count++;
  });

  tabCountEl.innerText = count + " Jobs";
}

function filterCards() {
  const cards = document.querySelectorAll(".card");
  let visibleCount = 0;

  cards.forEach((card) => {
    if (currentTab === "all") {
      card.style.display = "flex";
      visibleCount++;
    } else if (card.dataset.status === currentTab) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleCount === 0 && currentTab !== "all") {
    noJobsDiv.classList.remove("hidden");
  } else {
    noJobsDiv.classList.add("hidden");
  }

  updateTabCount();
}

function toggleStyle(id) {
  const buttons = [allFilterBtn, interviewFilterBtn, rejectedFilterBtn];

  buttons.forEach((btn) => {
    btn.classList.remove("bg-[#3B82F6]", "text-white");
    btn.classList.add("bg-[#F1F2F4]", "text-black");
  });

  const selected = document.getElementById(id);

  

  filterCards();
}

document.querySelector("main").addEventListener("click", function (e) {
  const card = e.target.closest(".card");

  if (!card) return;

  if (e.target.classList.contains("interview-btn")) {
    card.dataset.status = "Interview";
    updateStatusUI(card, "Interview");
  }

  if (e.target.classList.contains("rejected-btn")) {
    card.dataset.status = "Rejected";
    updateStatusUI(card, "Rejected");
  }

  if (e.target.tagName === "IMG") {
    card.remove();
  }

  updateDashboard();
  filterCards();
});

updateDashboard();
updateTabCount();
