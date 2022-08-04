import EmberRouter from '@ember/routing/router';
import config from 'portfolio-2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('writing');
  this.route('videos');
  this.route('projects');
  this.route('work');
});
