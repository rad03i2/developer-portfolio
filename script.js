const projects = [
  ['Smart File Manager', 'C# WinUI desktop file tools'],
  ['Robotics Language Lab', 'Multi-language robotics examples'],
  ['Python Automation Hub', 'Useful local automation scripts'],
  ['Arabic UI Components', 'RTL components for Arabic web apps'],
  ['IoT Sensor Dashboard', 'Arduino and Node.js telemetry demo'],
  ['Data Analysis Notebooks', 'CSV analysis and reports']
];

const skills = ['C#', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'C++', 'Java', 'Go', 'Rust', 'SQL', 'PowerShell', 'Arduino'];

const projectGrid = document.querySelector('#projects');
const skillGrid = document.querySelector('#skills');

projects.forEach(([name, text]) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `<h2>${name}</h2><p>${text}</p>`;
  projectGrid.appendChild(card);
});

skills.forEach(skill => {
  const item = document.createElement('article');
  item.className = 'card';
  item.textContent = skill;
  skillGrid.appendChild(item);
});
