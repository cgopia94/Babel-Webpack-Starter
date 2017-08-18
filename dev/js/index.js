import $ from 'jquery';
import {sum} from './sum.js';
import '../scss/style.scss';

$('#result').text(sum(100,20)).append($('<img />').attr('src', 'img/webpack.png'));