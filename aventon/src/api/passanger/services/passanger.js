'use strict';

/**
 * passanger service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::passanger.passanger');
