import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

class APIService {
  constructor() {
    this.userId = getAuthenticatedUser().userId;
  }

  buildURL = (courseId, blockId, endpoint) => `/api/v1/courses/user/${this.userId}/course/${courseId}/block/${blockId}/${endpoint}`;

  handleFetch = async (URL, options) => {
    try {
      const response = await fetch(getConfig().API_GW_URL + URL, options);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      // console.error('Hubo un problema con la operación de fetch:', error);
    }
  };

  visit = async (courseId, blockId) => {
    const URL = this.buildURL(courseId, blockId, 'visit');

    await this.handleFetch(URL, {
      method: 'GET',
    });
  };
}
export default APIService;
