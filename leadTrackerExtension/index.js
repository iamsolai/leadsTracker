let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}


function renderLeads(leads) {
  //Optimising the code ---->DOM manipulations comes at a cost
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>"+ myLeads[i] + "</a></li>";
    //-----------------Template Strings----------------
    listItems += `
      <li>
      <a target = '_blank' href = '${leads[i]}' >
      ${leads[i]}
      </a>
      </li>
      `;
    /* const liEl = document.createElement("li");
    liEl.textContent = myLeads[i];
    ulEl.append(liEl);
    */
  }
  ulEl.innerHTML = listItems;
}

//addEventListener()

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads(myLeads);
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});


tabBtn.addEventListener("click", function () {
  // chrome.tabs.query({active:true,currentWindow:true},function(){
  //   var activeTab = tabs[0];
  //   var activeTabId = activeTab.id;
  // });
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
  });
});
