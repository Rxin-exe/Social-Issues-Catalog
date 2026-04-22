/**
 * scripts.js
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another object to the issues array a few lines down. Reload your
 *    browser and observe what happens. You should see a new card appear
 *    with the data you added.
 *
 */

// This is an array of objects. Each object {} represents one social issue.
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.
let issues = [
  {
    title: "Maternal Mortality Among Black Women",
    category: "Healthcare",
    community: "Black Community",
    severity: 5,
    description: "Black women in the U.S. die from pregnancy-related causes at 2.6 times the rate of white women. This persists across income and education levels, driven by systemic bias in medical settings and inadequate prenatal care.",
    tags: ["race", "gender", "healthcare"]
  },
  {
    title: "Indigenous Land Rights and Sovereignty",
    category: "Civil Rights",
    community: "Indigenous Community",
    severity: 5,
    description: "Native American tribes continue to face violations of treaty rights, with sacred lands and water sources threatened by extraction industries. Only 2% of U.S. land remains under Indigenous control today.",
    tags: ["indigenous", "land", "sovereignty"]
  },
  {
    title: "Immigration Detention and Family Separation",
    category: "Criminal Justice",
    community: "Immigrant Community",
    severity: 5,
    description: "Over 37,000 immigrants are held in ICE detention on any given day, often in conditions violating basic standards of care. Between 2017-2018, over 5,500 children were separated from parents at the border.",
    tags: ["immigration", "detention", "family"]
  },
  {
    title: "Redlining Legacy and Housing Segregation",
    category: "Housing",
    community: "Black Community",
    severity: 4,
    description: "Decades of federally sanctioned redlining denied Black families mortgages in desirable neighborhoods. The Black-white homeownership gap today is wider than it was in 1968.",
    tags: ["race", "housing", "wealth"]
  },
  {
    title: "School-to-Prison Pipeline",
    category: "Education",
    community: "Black Community",
    severity: 4,
    description: "Black students are suspended at three times the rate of white students for similar infractions. Zero-tolerance policies and police in schools funnel students into the justice system.",
    tags: ["race", "education", "incarceration"]
  },
  {
    title: "LGBTQ+ Youth Homelessness",
    category: "Housing",
    community: "LGBTQ+ Community",
    severity: 4,
    description: "LGBTQ+ youth make up 40% of the homeless youth population despite being only 7% of all youth. Family rejection after coming out is the leading cause.",
    tags: ["lgbtq", "housing", "youth"]
  },
  {
    title: "Environmental Racism and Toxic Exposure",
    category: "Environment",
    community: "Black Community",
    severity: 5,
    description: "Black Americans are 75% more likely than white Americans to live near hazardous industrial facilities, leading to higher rates of asthma, cancer, and developmental disorders.",
    tags: ["race", "environment", "health"]
  },
  {
    title: "Wage Theft from Immigrant Workers",
    category: "Economic Justice",
    community: "Immigrant Community",
    severity: 4,
    description: "Undocumented workers lose billions annually to wage theft. Employers pay below minimum wage or withhold pay entirely, knowing workers fear deportation if they report it.",
    tags: ["immigration", "labor", "wages"]
  },
  {
    title: "Disability and Institutionalization",
    category: "Civil Rights",
    community: "Disabled Community",
    severity: 4,
    description: "Despite the ADA, hundreds of thousands of people with disabilities remain in institutional settings against their preference. Medicaid rules historically incentivize institutions over home-based care.",
    tags: ["disability", "rights", "healthcare"]
  },
  {
    title: "Gender Pay Gap",
    category: "Economic Justice",
    community: "Women",
    severity: 3,
    description: "Women earn 84 cents per dollar earned by men. For Black women it is 67 cents and Latina women 57 cents. Over a 40-year career, the average woman loses $400,000 in earnings.",
    tags: ["gender", "wages", "race"]
  },
  {
    title: "Missing and Murdered Indigenous Women",
    category: "Criminal Justice",
    community: "Indigenous Community",
    severity: 5,
    description: "Native women are murdered at more than 10 times the national average in some jurisdictions. Jurisdictional gaps between tribal, state, and federal law enforcement leave perpetrators unaccountable.",
    tags: ["indigenous", "violence", "justice"]
  },
  {
    title: "Unequal Access to Mental Health Care",
    category: "Healthcare",
    community: "Low-Income Community",
    severity: 4,
    description: "Therapy costs $100 to $300 per session without insurance. More than half of U.S. counties have no psychiatrist. Jails and prisons have become the largest de facto psychiatric facilities.",
    tags: ["mental health", "poverty", "healthcare"]
  },
  {
    title: "Voting Rights Suppression",
    category: "Civil Rights",
    community: "Black Community",
    severity: 5,
    description: "Since the 2013 Shelby County decision, states have closed 1,600 polling places and enacted voter ID laws that disproportionately impact Black voters. 1 in 13 Black Americans is disenfranchised.",
    tags: ["race", "voting", "democracy"]
  },
  {
    title: "Transgender Healthcare Bans",
    category: "Healthcare",
    community: "LGBTQ+ Community",
    severity: 5,
    description: "Over 20 states have banned gender-affirming care for youth, contradicting every major U.S. medical association. Research shows these bans significantly increase depression and suicidal ideation in trans youth.",
    tags: ["lgbtq", "healthcare", "rights"]
  },
  {
    title: "Solitary Confinement in U.S. Prisons",
    category: "Criminal Justice",
    community: "Black Community",
    severity: 5,
    description: "80,000 people are held in solitary confinement in the U.S., often 22 to 24 hours a day for years. The UN classifies prolonged solitary as torture. People in solitary are 6.9x more likely to self-harm.",
    tags: ["incarceration", "race", "torture"]
  },
  {
    title: "Predatory Payday Lending",
    category: "Economic Justice",
    community: "Low-Income Community",
    severity: 3,
    description: "Payday lenders charge APRs averaging 400%, trapping borrowers in debt cycles. 80% of loans are rolled over within 14 days. Black and Latino neighborhoods have 3x more payday lenders per capita.",
    tags: ["poverty", "race", "debt"]
  },
  {
    title: "Indigenous Children in Foster Care",
    category: "Education",
    community: "Indigenous Community",
    severity: 4,
    description: "Native children are placed in foster care at 4 times the rate of white children, often with non-Native families in violation of the Indian Child Welfare Act. Poverty is frequently misidentified as neglect.",
    tags: ["indigenous", "children", "family"]
  },
  {
    title: "Reproductive Rights Rollbacks Post-Dobbs",
    category: "Healthcare",
    community: "Women",
    severity: 5,
    description: "Since the 2022 Dobbs decision, 13 or more states enacted near-total abortion bans. Over 20 million women of reproductive age live in ban states. Low-income women and women of color are most impacted.",
    tags: ["gender", "healthcare", "rights"]
  },
  {
    title: "Digital Divide and Educational Inequity",
    category: "Education",
    community: "Low-Income Community",
    severity: 3,
    description: "21 million Americans lack reliable broadband. During COVID-19, 1 in 5 school-age children had no home internet, causing them to fall dramatically behind. Rural areas have 26% lower broadband access than cities.",
    tags: ["technology", "education", "poverty"]
  },
  {
    title: "Anti-Asian Hate and Discrimination",
    category: "Civil Rights",
    community: "Immigrant Community",
    severity: 4,
    description: "Anti-Asian hate crimes surged 339% during COVID-19, fueled by political scapegoating. Elderly Asian Americans have been frequent targets of violent attacks across the country.",
    tags: ["race", "violence", "discrimination"]
  }
];

let activeCategory = "All";

// This function adds cards the page to display the data in the array
function showCards(data) {
  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");
  cardContainer.innerHTML = "";

  if(data == undefined) {
    data = issues;
  }

  document.getElementById("results-count").textContent = "Showing " + data.length + " issues."

  for (let i = 0; i < data.length; i++) {
    let issue = data[i]; // create current issue card

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, issue, i); // Edit title and content
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}



function editCardContent(card, issue, index) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = issue.title;

  const cardCommunity = card.querySelector(".card-community")
  cardCommunity.textContent = issue.community;

  const cardDesc = card.querySelector(".card-desc");
  cardDesc.textContent = issue.description;

  const dotsContainer = card.querySelector(".severity-dots");

  const cardCategory = card.querySelector(".card-category");
  cardCategory.textContent = issue.category;

  const categoryCLass = "cat-" + issue.category.replace(/ /g, "-");
  cardCategory.classList.add(categoryCLass);

  dotsContainer.innerHTML = "";
  for (let d = 1; d <= 5 ; d++){
    const dot = document.createElement("div");
    dot.classList.add("dot")

    if (d <= issue.severity){
      dot.classList.add("filled");
    }

    dotsContainer.appendChild(dot);

  }


  const tagsContainer = card.querySelector(".card-tags");

  tagsContainer.innerHTML = "";
  for (let i = 0; i < issue.tags.length ; i++){
    const tag = document.createElement("li");
    tag.textContent = issue.tags[i];
    tag.classList.add("tag");

    tagsContainer.appendChild(tag)
  }

  const trashButton = card.querySelector(".trash-btn");
  trashButton.onclick = function(){
    removeCard(index);
  }
  

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", issue.title, "- html: ", card);
}

function filterCards(){

  const searchInput = document.getElementById("search-input");
  const input = searchInput.value.toLowerCase();

  const matches = [];

  for (let i = 0 ; i < issues.length ; i++){
    let issue = issues[i]
    if (
      (activeCategory === "All" || issue.category === activeCategory) &&
      (issue.title.toLowerCase().includes(input) ||
      issue.category.toLowerCase().includes(input) ||
      issue.community.toLowerCase().includes(input) ||
      issue.description.toLowerCase().includes(input) ||
      issue.tags.some(function(tag) { return tag.includes(input); })

      )
    ){
      matches.push(issues[i]);
    }

  }
  showCards(matches)
}

function setCategory(category, clickedButton){
  activeCategory = category;
  const allButtons = document.querySelectorAll(".filter-btn");

  for (let i = 0 ; i< allButtons.length ; i++){
    allButtons[i].classList.remove("active")

  }

  clickedButton.classList.add("active")

  filterCards();

  
}

function removeCard(index){
  issues.splice(index, 1);
  filterCards();

  
}

function addIssue(){
  const nameEntry = document.getElementById("input-name");
  const communityEntry = document.getElementById("input-community");
  const categoryEntry = document.getElementById("input-category");
  const descEntry = document.getElementById("input-desc");

  const name = nameEntry.value;
  const community = communityEntry.value;
  const category = categoryEntry.value;
  const desc = descEntry.value;

  const newIssue = {
    title: name,
    category: category,
    community: community,
    description: desc,
    severity: 3,
    tags: [],
  }

  issues.push(newIssue);
  
  filterCards();

}

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function() {
  showCards();
});

function removeLastCard() {
  issues.pop(); // Remove last item in issues array
  showCards(); // Call showCards again to refresh
}
