// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `-[License]($(license))`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `/n * [license](#)`
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
  const {username , email ,title , description , license , visuals , contribution} = data;

  let licenseSelection = renderLicenseSection(license);

  let licenseBadge = renderLicenseBadge(license);

  return `# ${title}

  ##Table of Content
  -[description](#description)
  -[visuals](#visuals)
  -[contribution](#contribution)
  -[license](#license)
  -[email](#email)
  -[username](#username)
  ${licenseBadge}

  ##username: ${description}

  ##visuals:

  ${visuals}

  ##contribution: ${contribution}

  ##email: ${email}

  ##username: ${username}
  
`;
}
//link to username?
module.exports = generateMarkdown;
