import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

class APIService {
    constructor() {
        this.userId = getAuthenticatedUser().userId;
    }

    buildURL = (course_id, block_id, endpoint) => {
        return `/api/v1/courses/user/${this.userId}/course/${course_id}/block/${block_id}/${endpoint}`;
    };

    handleFetch = async (URL, options) => {
        try {
            const response = await fetch(getConfig().API_GW_URL + URL, options);

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

        } catch (error) {
            console.error('Hubo un problema con la operación de fetch:', error);
        }
    };

    visit = async (course_id, block_id) => {
        const URL = this.buildURL(course_id, block_id, 'visit');

        await this.handleFetch(URL, {
            method: 'GET'
        });
    };
}
export default APIService;