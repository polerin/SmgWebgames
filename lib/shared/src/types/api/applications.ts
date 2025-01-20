/**
 * Applications controller endpoints
 * 
 * NOTE: These are endpoints for the core api that list or manage
 * the hosted applications, they are not the API endpoints WITHIN
 * each hosted endpoint.
 */

import { SmgHostedAppDefinition } from '../../hostedApplications/index.js';
import { PaginatedRequest, PaginatedResponse } from './apiBase.js';

/**
 * Request a list of available hosted applications
 */
export type AvailableApplicationsRequest = PaginatedRequest & {};

/**
 * Response with a list of available hosted applications
 */
export type AvailableApplicationsResult = PaginatedResponse<SmgHostedAppDefinition[]>;