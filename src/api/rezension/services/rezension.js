'use strict';

/**
 * rezension service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rezension.rezension');
