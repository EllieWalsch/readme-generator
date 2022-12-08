// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license == "No license") {
    return ""
  } else {
    return `[${data.license}](https://choosealicense.com/licenses/${data.license.toLowerCase().split(' ').join('-')})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// badge goes at the top of the page
function generateMarkdown(data) {
  return `
  # ${data.title}


  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseLink(data)}

  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  - Please visit my Github page at [github.com/${data.github}](https://github.com/${data.github})
  - For additional questions, please [send me and email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
