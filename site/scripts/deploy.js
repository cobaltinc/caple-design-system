var ghpages = require('gh-pages');

console.log('Start deploy...');

ghpages.publish(
  'out',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/cobaltinc/caple-design-system.git',
    message: 'deploy to gh-pages',
    dotfiles: true,
  },
  error => {
    if (error) {
      console.log(error);
    } else {
      console.log('Finished deploy! ✅');
    }
  },
);
