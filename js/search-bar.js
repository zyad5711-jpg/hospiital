
  const doctors = [
    { name: "Dr. Ahmed Salem", url: "cardiologist-doc1.html" },
    { name: "Dr. Tarek Elkhateb", url: "cardiologist-doc2.html" },
    { name: "Dr. Reem Elharby", url: "cardiologist-doc3.html" }
  ];

  const input = document.getElementById("searchInput");
  const resultsContainer = document.getElementById("searchResults");

  input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    resultsContainer.innerHTML = ""; 

    if (query.trim() === "") {
      return;
    }

    const filtered = doctors.filter(doctor => doctor.name.toLowerCase().includes(query));

    if (filtered.length === 0) {
      resultsContainer.innerHTML = "<p style='padding:10px'>No doctor found</p>";
      return;
    }

    filtered.forEach(doctor => {
      const link = document.createElement("a");
      link.href = doctor.url;
      link.textContent = doctor.name;
      resultsContainer.appendChild(link);
    });
  });

  document.addEventListener("click", function (e) {
    if (!document.getElementById("searchForm").contains(e.target)) {
      resultsContainer.innerHTML = "";
    }
  });

