// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "\n* [License](#license)\n";
  }
  return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return "## License \nThis project is licensed under the $(license} license.";
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

#Description

  ${data.description}

#Table of Contents

* [Installation](#installation)
  
${data.installation}

* [Usage](#usage)

  ${data.usage}

  ${renderLicenseLink(data.license)}

* [Contribution](#contrubution)

  ${data.contribution}

* [Tests](#test)

  ${data.test}
  
`;
}

module.exports = generateMarkdown;
