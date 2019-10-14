import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('foo');
  this.route('bar');
  this.route('queryparams');
  this.route('queryparams-helper');
  this.route('queryparams-children', { path: '/qp' }, function() {
    this.route('child');
  });

  this.route('profile', { path: '/profile/:id' }, function() {
    this.route('view');
  });

  this.route('feed', { path: '/feed/:id' }, function() {
    this.route('view');
  });

  this.route('parent', function() {
    this.route('child');
    this.route('sibling');
  });

  this.route('refresh-parent', function() {
    this.route('refresh-child');
  });

  this.route('abort-transition-to-child', function() {
    this.route('child');
  });
});

export default Router;
