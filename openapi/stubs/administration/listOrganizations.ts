import { constants } from "@owlgrid-dev/constants";
import { generateName } from "@owlgrid-dev/generators";
import { db } from "../connectors/database";
import { AdministrationOrganizationsListResponse } from "@owlgrid-dev/types";

/**
 * List organizations
 * @param req query parameters
 * @returns list of organizations
 */
export const listOrganizations = async (pageSize: number, pageToken?: string, orderBy?: string, filter?: string, properties?: string[]): Promise<{ data: AdministrationOrganizationsListResponse[], name: string, totalSize: number, nextPageToken: string }> => {
    // Check that the user is authorized to do the action
    // TODO or on the gateway?

    let data: AdministrationOrganizationsListResponse[];

    // Run query to fetch database
    const rawData = await db.listDocuments(constants.administration.organizations.collection_id, pageSize, pageToken, orderBy, filter, properties);

    // Extract objects and assert type
    data = rawData.data as AdministrationOrganizationsListResponse[];

    // Extract metadata
    const totalSize = rawData.totalSize || 0;
    const nextPageToken = rawData.nextPageToken || '';

    // Generate resource name
    const name = generateName(constants.administration.name, constants.administration.organizations.name);

    // Return result
    return {
        name,
        totalSize,
        nextPageToken,
        data
    };
};