 import { MainController } from './main'
 import * as angular from 'angular'
 var app = angular.module('random-lottery', [])
 app.controller('MainController', MainController)
 angular.element(document).ready (()=> { 
     angular.bootstrap(document, ['random-lottery'])
 });