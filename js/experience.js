// Need refactor (obviously lol)

const experienceData = {
  tokopedia: {
    company_name_fmt: "@ Tokopedia",
    job_title: "Software Engineer Intern",
    company_profile_link: "https://www.tokopedia.com/careers/our-workplace",
    date_start_end: "July 2022 - Present",
    company_description: "Biggest e-commerce/digital marketplace in Indonesia",
    work_done: [
      "Involved in developing more than 5 product features in feeds team such as wishlist, voucher, campaign notification, and ASGC from creating tech-plan to implement coding",
      "Dropped more than 50% New Relic metric for the whole tribe; reduced monthly cost by 44%",
      "Created a script to synchronize data in PostgreSQL and ElasticSearch and running it directly in production machine",
      "Tech Stack: Golang, GraphQL, gRPC, NSQ, PostgreSQL, ElasticSearch, New Relic, Microservices",
    ],
  },
  freelance: {
    company_name_fmt: "",
    job_title: "Software Engineer",
    company_profile_link: "",
    date_start_end: "November 2021 - May 2022",
    company_description:
      "Hired by a notary office to create information system management (order, income, etc)",
    work_done: [
      "Developed various REST APIs using Django",
      "Proposed and implemented logging in the codebase to ease debugging",
      "Created API Documentation using Apiary",
      "Tech Stack: Python, Django, PostgreSQL, Docker, Git",
    ],
  },
  jakpat: {
    company_name_fmt: "@ Jakpat",
    job_title: "Backend Engineer Intern",
    company_profile_link: "https://jakpat.net/",
    date_start_end: "November 2021 - February 2022",
    company_description:
      "A mobile survey platform with over 1 million Indonesian respondents",
    work_done: [
      "Worked on Flashback and Account Delete feature with TDD using Laravel",
      "Written technical documentation and flowchart for both feature",
      "Tech Stack PHP, Laravel, PostgreSQL, Docker, Git",
    ],
  },
  sparveon: {
    company_name_fmt: "@ Sparveon",
    job_title: "Backend Engineer Intern",
    company_profile_link: "https://www.linkedin.com/company/sparveon/",
    date_start_end: "June 2021 - September 2021",
    company_description:
      "Product: Machine learning to emerge the signature of energy and mineral resources",
    work_done: [
      "Develop authentication feature using Django with smtp email server",
      "Deployed backend service on AWS with ec2",
      "Tech Stack: Python, Django, PostgreSQL, Git, EC2 AWS",
    ],
  },
};
console.log(experienceData);

const expTokopedia = document.getElementById("experience-tokopedia");
const expFreelance = document.getElementById("experience-freelance");
const expJakpat = document.getElementById("experience-jakpat");
const expSparveon = document.getElementById("experience-sparveon");

const showTokopedia = () => {
  expTokopedia.classList.add("border-yellow");
  expFreelance.classList.remove("border-yellow");
  expJakpat.classList.remove("border-yellow");
  expSparveon.classList.remove("border-yellow");

  var expWorkDone = experienceData.tokopedia.work_done.length;

  document.getElementById("split-75").innerHTML =
    "<h3>" +
    experienceData.tokopedia.job_title +
    " <a href=" +
    experienceData.tokopedia.company_profile_link +
    ' class="text-yellow" target="_blank">' +
    experienceData.tokopedia.company_name_fmt +
    '</a></h3> <p class="experience-date">' +
    experienceData.tokopedia.date_start_end +
    '</p> <p class="experience-company-desc">' +
    experienceData.tokopedia.company_description +
    '</p> <div class="experience-container"> <div class="bullet-arrow"> <img src="assets/arrow-bullet-point.png" alt="bullet point arrow"> </div> <div class="experience-detail"> <p>' +
    experienceData.tokopedia.work_done[0] +
    "</p> </div> </div>";

  for (i = 1; i < expWorkDone; i++) {
    document.getElementById("split-75").innerHTML +=
      '<div class="experience-container"> <div class="bullet-arrow"> <img src="assets/arrow-bullet-point.png" alt="bullet point arrow"> </div> <div class="experience-detail"> <p>' +
      experienceData.tokopedia.work_done[i] +
      "</p> </div> </div>";
  }
};

const showFreelance = () => {
  expTokopedia.classList.remove("border-yellow");
  expFreelance.classList.add("border-yellow");
  expJakpat.classList.remove("border-yellow");
  expSparveon.classList.remove("border-yellow");

  var expWorkDone = experienceData.freelance.work_done.length;

  document.getElementById("split-75").innerHTML =
    "<h3>" +
    experienceData.freelance.job_title +
    " <a href=" +
    experienceData.freelance.company_profile_link +
    ' class="text-yellow" target="_blank">' +
    experienceData.freelance.company_name_fmt +
    '</a></h3> <p class="experience-date">' +
    experienceData.freelance.date_start_end +
    '</p> <p class="experience-company-desc">' +
    experienceData.freelance.company_description +
    '</p> <div class="experience-container"> <div class="bullet-arrow"> <img src="assets/arrow-bullet-point.png" alt="bullet point arrow"> </div> <div class="experience-detail"> <p>' +
    experienceData.freelance.work_done[0] +
    "</p> </div> </div>";

  for (i = 1; i < expWorkDone; i++) {
    document.getElementById("split-75").innerHTML +=
      '<div class="experience-container"> <div class="bullet-arrow"> <img src="assets/arrow-bullet-point.png" alt="bullet point arrow"> </div> <div class="experience-detail"> <p>' +
      experienceData.freelance.work_done[i] +
      "</p> </div> </div>";
  }
};

const showJakpat = () => {
  expTokopedia.classList.remove("border-yellow");
  expFreelance.classList.remove("border-yellow");
  expJakpat.classList.add("border-yellow");
  expSparveon.classList.remove("border-yellow");

  var expWorkDone = experienceData.jakpat.work_done.length;

  document.getElementById("split-75").innerHTML =
    "<h3>" +
    experienceData.jakpat.job_title +
    " <a href=" +
    experienceData.jakpat.company_profile_link +
    ' class="text-yellow" target="_blank">' +
    experienceData.jakpat.company_name_fmt +
    '</a></h3> <p class="experience-date">' +
    experienceData.jakpat.date_start_end +
    '</p> <p class="experience-company-desc">' +
    experienceData.jakpat.company_description +
    '</p> <div class="experience-container"> <div class="bullet-arrow"> <img src="assets/arrow-bullet-point.png" alt="bullet point arrow"> </div> <div class="experience-detail"> <p>' +
    experienceData.jakpat.work_done[0] +
    "</p> </div> </div>";

  for (i = 1; i < expWorkDone; i++) {
    document.getElementById("split-75").innerHTML +=
      '<div class="experience-container"> <div class="bullet-arrow"> <img src="assets/arrow-bullet-point.png" alt="bullet point arrow"> </div> <div class="experience-detail"> <p>' +
      experienceData.jakpat.work_done[i] +
      "</p> </div> </div>";
  }
};

const showSparveon = () => {
  expTokopedia.classList.remove("border-yellow");
  expFreelance.classList.remove("border-yellow");
  expJakpat.classList.remove("border-yellow");
  expSparveon.classList.add("border-yellow");

  var expWorkDone = experienceData.sparveon.work_done.length;

  document.getElementById("split-75").innerHTML =
    "<h3>" +
    experienceData.sparveon.job_title +
    " <a href=" +
    experienceData.sparveon.company_profile_link +
    ' class="text-yellow" target="_blank">' +
    experienceData.sparveon.company_name_fmt +
    '</a></h3> <p class="experience-date">' +
    experienceData.sparveon.date_start_end +
    '</p> <p class="experience-company-desc">' +
    experienceData.sparveon.company_description +
    '</p> <div class="experience-container"> <div class="bullet-arrow"> <img src="assets/arrow-bullet-point.png" alt="bullet point arrow"> </div> <div class="experience-detail"> <p>' +
    experienceData.sparveon.work_done[0] +
    "</p> </div> </div>";

  for (i = 1; i < expWorkDone; i++) {
    document.getElementById("split-75").innerHTML +=
      '<div class="experience-container"> <div class="bullet-arrow"> <img src="assets/arrow-bullet-point.png" alt="bullet point arrow"> </div> <div class="experience-detail"> <p>' +
      experienceData.sparveon.work_done[i] +
      "</p> </div> </div>";
  }
};

expTokopedia.addEventListener("click", showTokopedia);
expFreelance.addEventListener("click", showFreelance);
expJakpat.addEventListener("click", showJakpat);
expSparveon.addEventListener("click", showSparveon);
