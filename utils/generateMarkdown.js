function generateMarkdown(data) {
  return `
# ${data.title}

${licenseBadge(data.license, data.username, data.title)}


## Description

${data.description}


## Table of Contents

${data.tableOfContents}

* [Installation] (#installation)

* [Usage] (#usage)

* [License] (#license)

* [Contributing] (#contributing)

* [Tests] (#tests)

* [Questions] (#questions)


## Installation

For installing the dependencies, run the given command:

${data.installation}


## Usage

${data.usage}


## License

${data.license}


## Contributing

${data.contributing}


## Tests

For running the tests, run the given command:

${data.tests}


## Questions

For any questions or queries, contact: ${data.username}
Or send an email to ${data.email}

`;
}

function newProject(username, title) {
  const projectTitle = title.split(" ").join("-");
  return `https://github.com/${username}/${projectTitle}`;
}

function licenseBadge(license, username, title) {
  if (license !== "None") {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](${newProject(username, title)})`;
  } else {
    return '';
  }
}

module.exports = generateMarkdown;
