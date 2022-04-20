// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `
  - [license](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "None"){
  return `## License
  
  this project is licensed under ${license}.`
}
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {username , email ,title , description , license , visuals , contribution , install} = data;

  let licenseSelection = renderLicenseSection(license);
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  return `# ${title}
  ${licenseBadge}

  ## ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  
  - [Contribution](#contribution)
  
  - [Visuals](#visuals)
  ${licenseLink}
  
  - [Questions](#questions)
  
  ---------------------------------

  ## Installation
  
  To install the necessary dependencies, run the following command:
  
-----------------------------------------------
  
 ${install}
 
-------------------------------------------------
  
  ## Contribution

  ${contribution}
  
  ## Visuals

  ${visuals}
  ${licenseSelection}
  
  ## Questions
  
  If you have any questions about this repo, contact me at ${email}. You can find more of my work at [${username}](https://github.com/${username}/).`;
}

module.exports = generateMarkdown;
