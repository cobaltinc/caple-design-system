var ghpages = require('gh-pages');

ghpages.publish('out', {
  branch: 'gh-pages',
  repo: 'https://github.com/cobaltinc/caple-design-system.git',
  message: 'deploy to gh-pages',
});
